export default function FamilyInfo() {
    const groomsFamily = {
        groom: 'Mai Duy Vương',
        father: 'Mai Xuân Hoàng',
        mother: 'Trần Thị Hằng',
        address: 'address'
    };

    const theBridesFamily = {
        bride: 'Trần Ngọc Bảo Trân',
        father: 'father',
        mother: 'mother',
        address: 'address'
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
                    <p className="address">{groomsFamily.address}</p>
                </section>
            </div>
            <p className="title-lg text-center">Trân Trọng Báo Tin Lễ Thành Hôn Của</p>

            <div className="text-center">
                <p className="headline">{groomsFamily.groom}</p>
                <span className="headline">&</span>
                <p className="headline">{theBridesFamily.bride}</p>
            </div>

            <div className="box-img"></div>

            <div className="text-center">
                <h1 className="title-lg fs-15">Trân Trọng Kính Mời</h1>
                <p className="title-md">Bạn và người thương</p>
            </div>
        </>
    );
}
