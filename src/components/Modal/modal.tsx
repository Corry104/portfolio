import React, { useEffect, useRef } from 'react';
import './modal.scss';

/** Defined props for dialogs */
interface Params {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    btnText: string
}

export const Modal: React.FC<Params> = (params: Params) => {
    const { title, description, isOpen, onClose, btnText } = params;
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };



    return (
        <>
            <div className={'modal-overlay'} onClick={() => handleClickOutside}>
                <div className={'modal-content'} ref={modalRef}>
                    <h2 className={'modal-title'}>{title}</h2>
                    <p>{description}</p>
                    <button className={`close-button text`} onClick={onClose}>
                        {btnText}
                    </button>

                </div>
            </div>
        </>
    );
};

