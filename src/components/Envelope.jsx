import { useState } from 'react';
import '../assets/css/envelope.scss';

export default function Envelope({ onOpen, isOpen }) {
    return (
        <>
            <section className="cssletter">
                <div className={`envelope ${isOpen ? 'active' : 'animation-pulse'}`}>
                    <button className="heart" aria-label="Open Envelope">
                        <span className="heart-text" onClick={onOpen}>
                            Mở
                        </span>
                    </button>
                    <div className="envelope-flap"></div>
                    <div className="envelope-folds">
                        <div className="envelope-left"></div>
                        <div className="envelope-right"></div>
                        <div className="envelope-bottom"></div>
                    </div>
                </div>
                <div className="letters"></div>
            </section>
        </>
    );
}
