import { useState } from 'react';
import '../assets/css/envelope.scss';

export default function EnvelopeIntro({ onOpen, isOpen }) {
    const [letter, setLetter] = useState(false);

    if (isOpen) {
        setTimeout(() => {
            setLetter(true);
        }, 300);
    }

    return (
        <section className="wedding-intro flex-column align-center gap-20">
            <div className="header">
                <img
                    className="img w-170 absolute top-left opacity-3"
                    src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-5.png"
                    alt="img"
                />
                <div className="wrap">
                    <img
                        className="img w-110 absolute opacity-5 img-1"
                        src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-1.png"
                        alt="img"
                    />
                    <img
                        className="img w-110 absolute opacity-5 img-2"
                        src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-1.png"
                        alt="img"
                    />
                </div>
            </div>
            <div className="text-center">
                <p className="fs-11">THIỆP</p>
                <p className="fs-25 header-label">Mời Cưới</p>
            </div>
            <img
                className="img-xs"
                src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-4.png"
                alt="song-hy"
            />
            <section className={`cssletter ${letter ? 'active' : ''}`}>
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
                    <div className="letters">
                        <img className="img" alt="img" src="https://placehold.co/600x600"></img>
                    </div>
                </div>
            </section>
        </section>
    );
}
