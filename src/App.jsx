import { useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';
import InvitationContent from './components/InvitationContent';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const openEnvelope = () => {
        setIsOpen(true);
    };

    return <div className="wedding">{isOpen ? <EnvelopeIntro onOpen={openEnvelope} /> : <InvitationContent />}</div>;
}

export default App;
