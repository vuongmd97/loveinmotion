import ModalImage from './ModalImage';
import WeddingVenueMap from './WeddingVenueMap';
import { useSearchParams } from 'react-router-dom';

export default function FamilyInfo() {
    const [searchParams] = useSearchParams();
    const getName = searchParams.get('to') ?? '';
    const getRelationship = searchParams.get('type') ?? 'Bạn';

    const groomsFamily = {
        groom: 'Mai Duy Vương',
        father: 'Mai Xuân Hoàng',
        mother: 'Trần Thị Hằng',
        address: 'Số 242, Ấp 9, Xã An Long, TP Hồ Chí Minh'
    };

    const theBridesFamily = {
        bride: 'Trần Ngọc Bảo Trân',
        father: 'Trần Ngọc Thanh',
        mother: 'Lê Cẩm Trang',
        address: 'Ấp Khu Phố, xã Long Hưng, tỉnh Đồng Tháp',
        ceremonyTime: '11h'
    };

    return (
        <>
            <div className="wrap-info">
                <section className="info">
                    <p className="label">Nhà Trai</p>
                    <p className="name">Ông {groomsFamily.father}</p>
                    <p className="name">Bà {groomsFamily.mother}</p>
                    <p className="address">{groomsFamily.address}</p>
                </section>

                <section className="info">
                    <p className="label">Nhà Gái</p>
                    <p className="name">Ông {theBridesFamily.father}</p>
                    <p className="name">Bà {theBridesFamily.mother}</p>
                    <p className="address">{theBridesFamily.address}</p>
                </section>
            </div>
            <p className="title-lg text-center">Trân Trọng Báo Tin Lễ Thành Hôn Của</p>

            <div className="text-center">
                <p className="headline">{groomsFamily.groom}</p>
                <span className="headline">&</span>
                <p className="headline">{theBridesFamily.bride}</p>
            </div>

            <div className="box-img">
                <ModalImage className="img" src="album/VT2535_06.jpg" />
            </div>

            <div className="text-center">
                <h1 className="title-lg fs-15">Trân Trọng Kính Mời</h1>
                <p className="title-md">
                    {getRelationship} {getName} và người thương
                </p>
            </div>

            <div className="gallery">
                <figure className="card">
                    <ModalImage className="img" src="album/VuongTran_7531.JPG" />
                </figure>
                <figure className="card --center">
                    <ModalImage className="img" src="album/bia.JPG" />
                </figure>
                <figure className="card">
                    <ModalImage className="img" src="album/VuongTran_7592.JPG" />
                </figure>
            </div>

            <section className="party-info">
                <p className="title">Tiệc Mừng Lễ Thành Hôn</p>
                <p className="txt">Vào Lúc {theBridesFamily.ceremonyTime}</p>

                <div className="custom-time">
                    <div className="flex-column flex-1">
                        <div className="line"></div>
                        <div className="time fs-8">THỨ BẢY</div>
                        <div className="line"></div>
                    </div>
                    <div className="time">13</div>
                    <div className="flex-column flex-1">
                        <div className="line"></div>
                        <div className="time fs-8">12-2025</div>
                        <div className="line"></div>
                    </div>
                </div>

                <p className="txt sub">(Tức ngày 24 tháng 10 năm Ất Tỵ)</p>

                <p className="fs-9 text-uppercase mt-5">Địa điểm tổ chức</p>
                <p className="title mt-1">Tư Gia Nhà Gái</p>
                <p className="txt sub">{theBridesFamily.address}</p>

                <WeddingVenueMap />
            </section>
        </>
    );
}
