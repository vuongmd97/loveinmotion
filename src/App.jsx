import { useRef, useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';
import InvitationContent from './components/InvitationContent';
import Lottie from 'lottie-react';
import music from './assets/lottie/music.json';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const lottieRef = useRef();

    const openEnvelope = () => {
        setIsOpen(true);
    };

    const handleToggle = () => {
        if (isPlaying) {
            lottieRef.current.stop();
            setIsPlaying(false);
        } else {
            lottieRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="wedding">
            <div className="wedding__container">
                <EnvelopeIntro onOpen={openEnvelope} isOpen={isOpen} />
                {isOpen && <InvitationContent />}
                <div className="btn-play" onClick={handleToggle}>
                    <Lottie lottieRef={lottieRef} animationData={music} loop autoplay={isOpen ? true : false} />
                </div>
            </div>
        </div>
    );
}

export default App;
