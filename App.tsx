import React, { useState, useRef, useCallback, useEffect } from 'react';
import { HeadphoneProfile } from './types';
import { HEADPHONE_PROFILES } from './data/headphoneData';
import HeadphoneSelector from './components/HeadphoneSelector';
import CaptureControls from './components/PlaybackControls';
import EqVisualizer from './components/EqVisualizer';
import AudioSourceDisplay from './components/AudioSourceDisplay';
import { TitleIcon, GithubIcon } from './components/Icons';

const App: React.FC = () => {
    const [selectedProfile, setSelectedProfile] = useState<HeadphoneProfile>(HEADPHONE_PROFILES[0]);
    const [isEqEnabled, setIsEqEnabled] = useState<boolean>(true);
    const [isCapturing, setIsCapturing] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(1);
    const [error, setError] = useState<string>('');
    const [sourceLabel, setSourceLabel] = useState<string>('');

    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);
    const filterNodesRef = useRef<BiquadFilterNode[]>([]);
    const analyserNodeRef = useRef<AnalyserNode | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    
    const cleanupAudioNodes = useCallback(() => {
        sourceNodeRef.current?.disconnect();
        sourceNodeRef.current = null;
        filterNodesRef.current.forEach(filter => filter.disconnect());
        filterNodesRef.current = [];
        gainNodeRef.current?.disconnect();
        analyserNodeRef.current?.disconnect();
    }, []);

    const setupAudioGraph = useCallback((stream: MediaStream) => {
        if (!audioContextRef.current) return;
        cleanupAudioNodes();

        // Create nodes
        sourceNodeRef.current = audioContextRef.current.createMediaStreamSource(stream);
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.gain.value = volume;
        
        analyserNodeRef.current = audioContextRef.current.createAnalyser();
        analyserNodeRef.current.fftSize = 2048;

        let lastNode: AudioNode = sourceNodeRef.current;

        // Create and connect filters if EQ is enabled
        if (isEqEnabled && selectedProfile.filters.length > 0) {
            filterNodesRef.current = selectedProfile.filters.map(filterData => {
                const filter = audioContextRef.current!.createBiquadFilter();
                filter.type = filterData.type;
                filter.frequency.value = filterData.frequency;
                filter.gain.value = filterData.gain;
                filter.Q.value = filterData.q;
                return filter;
            });

            filterNodesRef.current.forEach(filter => {
                lastNode.connect(filter);
                lastNode = filter;
            });
        }
        
        // Connect remaining nodes
        lastNode.connect(analyserNodeRef.current);
        analyserNodeRef.current.connect(gainNodeRef.current);
        gainNodeRef.current.connect(audioContextRef.current.destination);

    }, [cleanupAudioNodes, isEqEnabled, selectedProfile, volume]);

    const startCapture = async () => {
        setError('');
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
                setError("La cattura dell'audio non è supportata da questo browser. Prova con Chrome o Firefox su desktop.");
                return;
            }

            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: false,
                audio: {
                    channelCount: 2,
                    sampleRate: 44100
                }
            });

            mediaStreamRef.current = stream;
            
            const audioTrack = stream.getAudioTracks()[0];
            if (audioTrack) {
                setSourceLabel(audioTrack.label || 'Sorgente Sconosciuta');
                audioTrack.onended = () => { // When the user stops sharing via browser UI
                    stopCapture();
                };
            }

            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (audioContextRef.current.state === 'suspended') {
                await audioContextRef.current.resume();
            }

            setupAudioGraph(stream);
            setIsCapturing(true);

        } catch (err) {
            console.error("Error starting capture: ", err);
            setError("Impossibile avviare la cattura. Hai negato il permesso o non hai selezionato una sorgente audio valida. Assicurati di selezionare una 'Scheda' con audio.");
            setIsCapturing(false);
            setSourceLabel('');
        }
    };

    const stopCapture = useCallback(() => {
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
            mediaStreamRef.current = null;
        }
        cleanupAudioNodes();
        setIsCapturing(false);
        setSourceLabel('');
    }, [cleanupAudioNodes]);


    useEffect(() => {
        if (isCapturing && mediaStreamRef.current) {
            setupAudioGraph(mediaStreamRef.current);
        }
    }, [isEqEnabled, selectedProfile, isCapturing, setupAudioGraph]);

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (gainNodeRef.current) {
            gainNodeRef.current.gain.value = newVolume;
        }
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black font-sans">
            <main className="w-full max-w-2xl bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 border border-neutral-800">
                <header className="text-center">
                    <div className="flex items-center justify-center gap-3 text-3xl font-bold text-white">
                        <TitleIcon />
                        <h1>Equalizzatore Audio Web</h1>
                    </div>
                    <p className="text-neutral-400 mt-2">Applica l'EQ a qualsiasi audio del tuo browser</p>
                </header>
                
                {error && <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">{error}</div>}

                <EqVisualizer
                    analyserNode={analyserNodeRef.current}
                    isPlaying={isCapturing}
                    profile={isEqEnabled ? selectedProfile : null}
                    audioContext={audioContextRef.current}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <HeadphoneSelector
                        profiles={HEADPHONE_PROFILES}
                        selectedProfileName={selectedProfile.name}
                        onProfileChange={(name) => {
                            const newProfile = HEADPHONE_PROFILES.find(p => p.name === name);
                            if (newProfile) setSelectedProfile(newProfile);
                        }}
                    />
                    <div className="flex items-center justify-center md:justify-end gap-4 bg-black/30 p-3 rounded-lg">
                        <label htmlFor="eq-toggle" className="font-medium text-neutral-300">Abilita EQ</label>
                        <button
                            id="eq-toggle"
                            onClick={() => setIsEqEnabled(!isEqEnabled)}
                            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white ${isEqEnabled ? 'bg-white' : 'bg-neutral-700'}`}
                        >
                            <span className={`inline-block w-4 h-4 transform bg-black rounded-full transition-transform duration-300 ${isEqEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                    </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg space-y-4">
                    <div className="text-center mb-4">
                        <h3 className="font-bold text-lg text-white">Controllo Equalizzatore</h3>
                        <p className="text-sm text-neutral-400">
                            Clicca 'Avvia', poi scegli la scheda del browser che sta riproducendo audio.
                        </p>
                    </div>
                    <AudioSourceDisplay isCapturing={isCapturing} sourceLabel={sourceLabel} />
                    <CaptureControls
                        isCapturing={isCapturing}
                        onStartCapture={startCapture}
                        onStopCapture={stopCapture}
                        volume={volume}
                        onVolumeChange={handleVolumeChange}
                    />
                </div>

            </main>
            <footer className="text-center mt-8 text-neutral-500">
                <p>Creato con la Web Audio API e `getDisplayMedia`.</p>
                <a href="https://github.com/jaakkopasanen/AutoEq" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    Dati di equalizzazione da AutoEQ Project
                </a>
                 <div className="mt-4">
                    <a href="https://github.com/your-github/repo" target="_blank" rel="noopener noreferrer" className="inline-block text-neutral-400 hover:text-white transition-colors">
                        <GithubIcon />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;