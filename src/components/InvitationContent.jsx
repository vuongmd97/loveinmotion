import FamilyInfo from './FamilyInfo';
import SaveTheDate from './SaveTheDate';
import WeddingAlbum from './WeddingAlbum';
import SendGifts from './SendGifts';
import WeddingCountDown from './WeddingCountDown';
import Thankyou from './Thankyou';

export default function InvitationContent() {
    return (
        <div className="flex-column gap-12">
            <section className="section1 relative">
                <img className="absolute opacity-5 img-1" src="images/image_2.png" alt="img" />
                <img className="absolute opacity-3 img-2" src="images/image_5.png" alt="img" />
            </section>

            <section className="section2">
                <div className="flex-column custom-label flex-column gap-4">
                    <span className="line"></span>
                    <div className="flex-column gap-4">
                        <p className="label">Lễ </p>
                        <p className="label">Thành</p>
                        <p className="label">Hôn</p>
                    </div>
                    <span className="line"></span>
                </div>

                <div className="wrap-img">
                    <div className="cyrcle-img">
                        <img className="img img-1" src="images/image_3.png" alt="img" />
                    </div>
                    <div>
                        <img className="img-2" src="images/image_7.png" alt="img" />
                    </div>
                </div>
            </section>

            <FamilyInfo />
            <SaveTheDate />
            <WeddingCountDown />
            <WeddingAlbum />
            <SendGifts />
            <Thankyou />
        </div>
    );
}
