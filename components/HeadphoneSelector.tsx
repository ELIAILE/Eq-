import React, { useState, useRef, useEffect, useMemo } from 'react';
import { HeadphoneProfile } from '../types';

interface HeadphoneSelectorProps {
  profiles: HeadphoneProfile[];
  selectedProfileName: string;
  onProfileChange: (name: string) => void;
}

const HeadphoneSelector: React.FC<HeadphoneSelectorProps> = ({ profiles, selectedProfileName, onProfileChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredProfiles = useMemo(() => {
    if (!searchTerm) return profiles;
    return profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, profiles]);

  const handleSelection = (name: string) => {
    onProfileChange(name);
    setSearchTerm("");
    setIsOpen(false);
  };
  
  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className="relative w-full" ref={wrapperRef}>
       <label htmlFor="headphone-search" className="font-medium text-neutral-300 mb-2 block">Seleziona le tue cuffie</label>
      <button
        type="button"
        id="headphone-search"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-2.5 text-white text-left flex justify-between items-center focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
      >
        <span className="truncate">{selectedProfileName}</span>
        <svg className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <div className="p-2">
            <input
              type="text"
              placeholder="Cerca cuffie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-600 rounded-md p-2 text-white focus:ring-2 focus:ring-white focus:border-white"
            />
          </div>
          <ul className="py-1">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <li
                  key={profile.name}
                  onClick={() => handleSelection(profile.name)}
                  className="px-4 py-2 text-white hover:bg-neutral-700 cursor-pointer"
                >
                  {profile.name}
                </li>
              ))
            ) : (
                <li className="px-4 py-2 text-neutral-400">Nessun risultato</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeadphoneSelector;