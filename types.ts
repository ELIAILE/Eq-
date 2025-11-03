export interface FilterSettings {
  type: BiquadFilterType;
  frequency: number; // Hz
  gain: number; // dB
  q: number; // Q-factor
}

export interface HeadphoneProfile {
  name: string;
  filters: FilterSettings[];
}
