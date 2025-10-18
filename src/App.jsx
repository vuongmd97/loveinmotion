import { useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';
import InvitationContent from './components/InvitationContent';
import Envelope from './components/Envelope';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const openEnvelope = () => {
        setIsOpen(true);
    };

    return (
        <div className="wedding">
            <EnvelopeIntro onOpen={openEnvelope} isOpen={isOpen} />
            {isOpen && <InvitationContent />}
        </div>
    );
}

export default App;
