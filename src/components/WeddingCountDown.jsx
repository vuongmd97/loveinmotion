import { useEffect, useState } from 'react';

export default function WeddingCountDown() {
    const weddingDate = new Date(2025, 11, 13, 0, 0, 0);
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-350 text-right">
            <img
                className="img countdown"
                src="https://vodcftljfczkktzzpgxv.supabase.co/storage/v1/object/public/wedding-assets/image-6.png"
                alt="countdown"
            />

            <div className="flex gap-4 text-3xl font-bold text-gray-800">
                <div>
                    <p>{timeLeft.days}</p>
                    <span>Ngày</span>
                </div>
                <div>
                    <p>{timeLeft.hours}</p>
                    <span>Giờ</span>
                </div>
                <div>
                    <p>{timeLeft.minutes}</p>
                    <span>Phút</span>
                </div>
                <div>
                    <p>{timeLeft.seconds}</p>
                    <span>Giây</span>
                </div>
            </div>
        </section>
    );
}
