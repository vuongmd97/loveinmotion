import { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import ModalImage from 'react-modal-image';

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

    useEffect(() => {
        const handleModalClick = (e) => {
            const modalContainer = document.querySelector('.__react_modal_image__modal_container');

            if (modalContainer && e.target === modalContainer) {
                const parentDiv = modalContainer.parentElement;
                if (parentDiv) {
                    parentDiv.remove();
                }
            }
        };

        document.addEventListener('click', handleModalClick);
        document.addEventListener('touchend', handleModalClick);

        return () => {
            document.removeEventListener('click', handleModalClick);
            document.removeEventListener('touchend', handleModalClick);
        };
    }, []);

    return (
        <div className="gallery-wrapper">
            <p className="header-label fs-20 fw-bold text-center">Ảnh Cưới</p>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid mt-2"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((src, i) => (
                    <ModalImage key={i} small={src} large={src} alt={`img-${i}`} className="gallery-item" />
                ))}
            </Masonry>
        </div>
    );
}
