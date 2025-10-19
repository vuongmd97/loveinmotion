import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: 'https://placehold.co/800x600?text=Ảnh+1',
        thumbnail: 'https://placehold.co/100x75?text=1'
    },
    {
        original: 'https://placehold.co/800x600?text=Ảnh+2',
        thumbnail: 'https://placehold.co/100x75?text=2'
    },
    {
        original: 'https://placehold.co/800x600?text=Ảnh+3',
        thumbnail: 'https://placehold.co/100x75?text=3'
    },
    {
        original: 'https://placehold.co/800x600?text=Ảnh+4',
        thumbnail: 'https://placehold.co/100x75?text=4'
    },
    {
        original: 'https://placehold.co/800x600?text=Ảnh+5',
        thumbnail: 'https://placehold.co/100x75?text=5'
    }
];

export default function WeddingAlbum() {
    return (
        <div>
            <p className="header-label fs-20 fw-bold text-center">Ảnh Cưới</p>
            <ImageGallery
                items={images}
                showPlayButton={true}
                showFullscreenButton={false}
                showThumbnails={true}
                slideInterval={3000}
                autoPlay={true}
                // mobile
                swipingTransitionDuration={300}
                slideDuration={450}
                swipeThreshold={30}
            />
        </div>
    );
}
