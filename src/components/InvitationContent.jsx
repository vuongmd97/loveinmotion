import SaveTheDate from './SaveTheDate';
import WeddingCountDown from './WeddingCountDown';

export default function InvitationContent() {
    return (
        <div className="flex-column gap-12">
            <SaveTheDate />
            <WeddingCountDown />
        </div>
    );
}
