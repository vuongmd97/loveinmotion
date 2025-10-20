import Masonry from 'react-masonry-css';
import ModalImage from './ModalImage';

const images = [
    'https://placehold.co/300x400',
    'https://placehold.co/500x400',
    'https://placehold.co/300x400',
    'https://placehold.co/600x400',
    'https://placehold.co/300x400',
    'https://placehold.co/300x200',
    'https://placehold.co/300x400',
    'https://placehold.co/300x200',
    'https://placehold.co/300x300'
];

export default function MasonryGallery() {
    const breakpointColumnsObj = {
        default: 3
    };

    return (
        <div className="gallery-wrapper">
            <p className="header-label fs-20 fw-bold text-center">Ảnh Cưới</p>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid mt-2"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((src, i) => (
                    <ModalImage key={i} src={src} classname="gallery-item" />
                ))}
            </Masonry>
        </div>
    );
}
