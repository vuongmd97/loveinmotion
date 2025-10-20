import { useState } from 'react';

export default function ModalImage({ src, className = '' }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img src={src} alt="img" className={className} onClick={() => setIsOpen(true)} />

            {isOpen && (
                <div className="modal">
                    <span className="modal__overlay" onClick={() => setIsOpen(false)}></span>
                    <div className="modal__container">
                        <img src={src} alt="img" className={className} />
                    </div>
                </div>
            )}
        </>
    );
}
