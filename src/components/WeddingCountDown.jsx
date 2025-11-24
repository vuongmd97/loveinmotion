import { useEffect, useRef, useState } from 'react';
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

function pad2(n) {
    return String(n).padStart(2, '0');
}

function FlipDigit({ value }) {
    const flipRef = useRef(null);
    const tickerRef = useRef(null);

    useEffect(() => {
        if (flipRef.current && !tickerRef.current) {
            const timer = setTimeout(() => {
                tickerRef.current = Tick.DOM.create(flipRef.current, {
                    value: pad2(value)
                });
            }, 1);

            return () => {
                clearTimeout(timer);
                if (tickerRef.current) {
                    Tick.DOM.destroy(tickerRef.current);
                    tickerRef.current = null;
                }
            };
        }
    }, []);

    useEffect(() => {
        if (tickerRef.current) {
            tickerRef.current.value = pad2(value);
        }
    }, [value]);

    return (
        <div ref={flipRef} className="tick">
            <div data-repeat="true">
                <span data-view="flip">Tick</span>
            </div>
        </div>
    );
}

export default function WeddingCountDown() {
    const weddingDate = new Date(2025, 11, 13, 0, 0, 0);

    const getTimeLeft = () => {
        const now = new Date();
        const diff = weddingDate - now;
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="text-right wedding-countdown">
            <img className="countdown" src="images/image_6.png" alt="countdown" />

            <div className="d-flex justify-right gap-4 wrap-countdown">
                <div className="flex-column align-center gap-4">
                    <FlipDigit value={timeLeft.days} />
                    <span>Ngày</span>
                </div>
                <div className="flex-column align-center gap-4">
                    <FlipDigit value={timeLeft.hours} />
                    <span>Giờ</span>
                </div>
                <div className="flex-column align-center gap-4">
                    <FlipDigit value={timeLeft.minutes} />
                    <span>Phút</span>
                </div>
                <div className="flex-column align-center gap-4">
                    <FlipDigit value={timeLeft.seconds} />
                    <span>Giây</span>
                </div>
            </div>
            <p className="fs-9 fw-bold playfair color-primary">Until we officially become Mr. & Mrs.</p>
        </section>
    );
}
