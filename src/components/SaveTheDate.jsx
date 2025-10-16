import { DayPicker } from 'react-day-picker';
import { vi } from 'date-fns/locale';
import 'react-day-picker/style.css';
import { HeartGreen } from '../assets/svg/HeartGreen';

export default function SaveTheDate() {
    const weddingDate = new Date(2025, 11, 13);
    const weddingMonth = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 1);

    const formatters = {
        formatWeekdayName: (day) => {
            const dow = day.getDay();
            return dow === 0 ? 'CN' : `T${dow + 1}`;
        }
    };

    return (
        <section className="w-350 flex-column gap-6">
            <div className="flex-column text-center gap-10">
                <p className="fs-15 playfair color-primary">Save The Date</p>
                <p className="text-capitalize playfair color-primary fs-10">
                    {`${weddingDate.toLocaleDateString('vi-VN', { month: 'long' })}/${weddingDate.getFullYear()}`}
                </p>
            </div>
            <DayPicker
                className="daypicker"
                mode="single"
                selected={weddingDate}
                month={weddingMonth}
                components={{
                    CaptionLabel: () => null,
                    Nav: () => null
                }}
                disabled={[{ before: weddingDate }, { after: weddingDate }]}
                onSelect={() => {}}
                weekStartsOn={1}
                showOutsideDays={false}
                modifiersClassNames={{
                    selected: 'wedding-selected'
                }}
                locale={vi}
                formatters={formatters}
            />
        </section>
    );
}
