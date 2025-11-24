import Masonry from 'react-masonry-css';
import ModalImage from './ModalImage';

const images = [
    'album/VuongTran_8014.JPG',
    'album/VuongTran_8046.JPG',
    'album/VuongTran_8074.JPG',
    'album/VuongTran_7700.JPG',
    'album/VuongTran_7715.JPG',
    'album/VuongTran_7758.JPG'
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
                    <ModalImage key={i} src={src} className="gallery-item" />
                ))}
            </Masonry>
        </div>
    );
}
