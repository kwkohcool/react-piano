import React, { FunctionComponent, ReactEventHandler } from 'react';
import clsx from 'clsx';
import { NoteType } from '../../domain/note';
import { usePressObserver } from '../PressObserver/usePressObserver';
import './style.css';

interface KeyProps {
    type: NoteType;
    label: string;
    disabled?: boolean;

    onUp: ReactEventHandler<HTMLButtonElement>;
    onDown: ReactEventHandler<HTMLButtonElement>;
}

export const Key: FunctionComponent<KeyProps> = ({
    type,
    label,
    onDown,
    onUp,
    ...rest
}) => {
    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp,
    });

    return (
        <button
            className={clsx(`key key--${type}`, pressed && 'is-pressed')}
            type="button"
            onMouseDown={onDown}
            onMouseUp={onUp}
            {...rest}
        >
            {label}
        </button>
    );
};

export default Key;
