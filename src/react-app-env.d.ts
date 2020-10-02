/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext;
type SoundfontType = typeof Sountfont;

interface Window extends Window {
    webkitAudioContext: AudioContextType;
}
