import React from "react";

const Footer = () => {
    return (
        <>
            <div id="footer-top">
                <div className="container">
                    <div className="row">
                        <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                            <h2><a href="#"><img src="images/logo-footer.png" /></a></h2>
                        </div>
                        <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Địa chỉ</h3>
                            <p>B8A Võ Văn Dũng - Hoàng Cầu Đống Đa - Hà Nội</p>
                            <p>Số 25 Ngõ 178/71 - Tây Sơn Đống Đa - Hà Nội</p>
                        </div>
                        <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Dịch vụ</h3>
                            <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
                            <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
                        </div>
                        <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Hotline</h3>
                            <p>Phone Sale: (+84) 0976657485</p>
                            <p>Email: phuongcangm@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*	Footer	*/}
            <div id="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                        </div>
                    </div>
                </div>
            </div>
            {/*	End Footer	*/}
        </>
    )
}
export default Footer;