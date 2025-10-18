import SaveTheDate from './SaveTheDate';
import WeddingCountDown from './WeddingCountDown';

export default function InvitationContent() {
    return (
        <div className="flex-column gap-12">
            <section className="section1 relative">
                <img
                    className="absolute opacity-5 img-1"
                    src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-2.png"
                    alt="img"
                />
                <img
                    className="absolute opacity-3 img-2"
                    src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-5.png"
                    alt="img"
                />
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
                        <img
                            className="img img-1"
                            src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-3.png"
                            alt="img"
                        />
                    </div>
                    <div>
                        <img
                            className="img img-2"
                            src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-7.png"
                            alt="img"
                        />
                    </div>
                </div>
            </section>

            <SaveTheDate />
            <WeddingCountDown />
        </div>
    );
}
