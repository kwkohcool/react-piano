import React, { FunctionComponent, useEffect } from 'react';
import { useAudioContext } from '../AudioContextProvider/useAudioContext';
// import { useSoundfont } from '../../adapters/Soundfont/useSoundfont';
import { Keyboard } from './Keyboard';
import { useInstrument } from '../../state/Instrument/Context';
import './style.css';
import { SoundfontProvider } from '../../adapters/Soundfont/SoundfontProvider';

// Provider pattern implemented with only hooks
/*
export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!;
    const { instrument } = useInstrument();
    const { loading, current, play, stop, load } = useSoundfont({
        AudioContext,
    });

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument);
    }, [load, loading, current, instrument]);

    return <Keyboard loading={loading} play={play} stop={stop} />;
};
*/

// Provider pattern implemented with Render Props - using a functional component
export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!;
    const { instrument } = useInstrument();

    return (
        <SoundfontProvider
            AudioContext={AudioContext}
            instrument={instrument}
            render={(props) => <Keyboard {...props} />}
        />
    );
};

export default KeyboardWithInstrument;
