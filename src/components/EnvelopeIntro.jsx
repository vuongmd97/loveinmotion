export default function EnvelopeIntro({ onOpen }) {
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
            <div className="flex-column text-center gap-10">
                <p className="fs-11">THIỆP</p>
                <p className="fs-25 great-vibes">Mời Cưới</p>
            </div>
            <img
                className="img-xs"
                src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-4.png"
                alt="song-hy"
            />
            <img
                className="img-lg animation-pulse cursor-pointer"
                src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/envelope-close.png"
                alt="evenlope"
                onClick={onOpen}
            />
            <p className="fs-9">- NHẤP VÀO THIỆP ĐỂ MỞ -</p>
        </section>
    );
}
