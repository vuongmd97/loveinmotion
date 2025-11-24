import Masonry from 'react-masonry-css';
import ModalImage from './ModalImage';
import wedd1 from '../assets/album/VuongTran_8014.JPG';
import wedd3 from '../assets/album/VuongTran_8046.JPG';
import wedd4 from '../assets/album/VuongTran_8074.JPG';
import wedd5 from '../assets/album/VuongTran_7700.JPG';
import wedd6 from '../assets/album/VuongTran_7715.JPG';
import wedd8 from '../assets/album/VuongTran_7758.JPG';

const images = [wedd1, wedd3, wedd4, wedd5, wedd6, wedd8];

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
