import React, { useEffect, useRef } from 'react';
import './modal.scss';
import { ModalParams } from '../../utils/interfaces/interface';

export const Modal: React.FC<ModalParams> = (params: ModalParams) => {
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
                <section className={'modal-content'} ref={modalRef}>
                    <h2 className={'modal-title'}>{title}</h2>
                    <p>{description}</p>
                    <button className={`close-button text`} onClick={onClose}>
                        {btnText}
                    </button>
                </section>
            </div>
        </>
    );
};

