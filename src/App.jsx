import { useRef, useState, useEffect } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';
import InvitationContent from './components/InvitationContent';
import Lottie from 'lottie-react';
import music from './assets/lottie/music.json';
import bird from './assets/lottie/birdletter.json';
import mp3 from './assets/audio/weddingmusic.mp3';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loadBird, setLoadBird] = useState(false);
    const lottieRef = useRef();
    const audioRef = useRef();

    const openEnvelope = () => {
        setIsOpen(true);
        setIsPlaying(true);
        audioRef.current.play();
        lottieRef.current.play();
    };

    const handleToggle = () => {
        if (isPlaying) {
            lottieRef.current.stop();
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            lottieRef.current.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        setLoadBird(true);

        const timeoutId = setTimeout(() => {
            setLoadBird(false);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="wedding">
            <div className="wedding__container">
                {loadBird && (
                    <div className="loading">
                        <Lottie animationData={bird} loop />
                    </div>
                )}
                <EnvelopeIntro onOpen={openEnvelope} isOpen={isOpen} />
                {isOpen && <InvitationContent />}
                {!loadBird && (
                    <div className="btn-play" onClick={handleToggle}>
                        <Lottie lottieRef={lottieRef} animationData={music} loop autoplay={false} />
                        <audio ref={audioRef} src={mp3} loop preload="auto"></audio>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
