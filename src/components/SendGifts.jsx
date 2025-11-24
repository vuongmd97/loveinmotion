export default function SendGifts() {
    return (
        <section className="gifts flex-column align-center">
            <h1 className="header-label">Gửi Quà Đến Dâu Rể</h1>
            <p className="txt text-center">
                Chúng mình rất mong được lưu giữ những khoảnh khắc đẹp cùng bạn, vì vậy hãy đến sớm một chút nhé. Sự
                hiện diện và lời chúc phúc của bạn sẽ là niềm vui lớn trong ngày trọng đại này.
            </p>
            <div className="avatar">
                <img className="img" src="album/VuongTran_7433.JPG" alt="img" />
            </div>
            <div className="qr-code flexcenter gap-8">
                <div className="qr">
                    <img src="images/qrbank.jpg" alt="img" className="img" />
                </div>
                <div className="info flex-column gap-2 align-center flex-1">
                    <p className="txt">CTK: Bảo Trân</p>
                    <p className="txt">STK: 1037803780</p>
                    <p className="txt">Vietcombank</p>
                </div>
            </div>
        </section>
    );
}
