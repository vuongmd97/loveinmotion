export default function WeddingVenueMap() {
    const mapUrl =
        'https://www.google.com/maps/place/Ti%E1%BB%87m+h%E1%BB%9Bt+t%C3%B3c+Ng%E1%BB%8Dc+Thanh/@10.4122679,106.3050216,17z/data=!3m1!4b1!4m6!3m5!1s0x310abbf3d7214085:0x24ef10f820bdbc6a!8m2!3d10.4122679!4d106.3050216!16s%2Fg%2F11k3nmn36t!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D';

    const embedUrl =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.994269873655!2d106.3050216!3d10.4122679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310abbf3d7214085%3A0x24ef10f820bdbc6a!2zVGnhu4dtIGjDtG90IHRvw6tjIE5nw6ljIFRoYW5o!5e0!3m2!1sen!2s!4v1690000000000';

    return (
        <div
            style={{
                marginTop: '10px',
                width: '100%',
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 6px 24px rgba(0,0,0,0.08)'
            }}
        >
            <iframe
                title="Tiệm hớt tóc Ngọc Thanh"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={embedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'absolute',
                    right: 8,
                    bottom: 8,
                    background: 'white',
                    padding: '6px 10px',
                    borderRadius: 6,
                    fontSize: 12,
                    textDecoration: 'none',
                    color: '#1a73e8',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                }}
            >
                Mở Google Maps
            </a>
        </div>
    );
}
