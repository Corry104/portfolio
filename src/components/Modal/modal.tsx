import React, { useEffect, useRef } from 'react';
import styles from './modal.module.scss';

interface Params {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void
}

export const Modal: React.FC<Params> = (params: Params) => {
    const { title, description, isOpen, onClose } = params;
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
            <div className={styles['modal-overlay']} onClick={() => handleClickOutside}>
                <div className={styles['modal-content']} ref={modalRef}>
                    <h2 className={styles['modal-title']}>{title}</h2>
                    <p>{description}</p>
                    <button className={`${styles['close-button']} text`} onClick={onClose}>
                        Close
                    </button>

                </div>
            </div>
        </>
    );
};

