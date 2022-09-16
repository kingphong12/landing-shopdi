/** @format */

import "./scss/app.scss";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import BannerApp from "./images/banner/banner_app.png";
import ValueImg from "./images/benefit/value_img.png";
import Value from "./images/benefit/value.png";
import Profit from "./images/benefit/profit_img.png";
import Reward from "./images/benefit/reward_img.png";
import Bullet from "./images/benefit/bullet.png";
function App() {
  const [open, setOpen] = useState(false);
  const handleSibar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log("open", open);
  }, [open]);

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="header_top">
            <div className="container">
              <div className="info">
                <div className="help">
                  <p className="info_text">Hỗ trợ</p>
                  <span></span>
                  <p className="info_text">
                    Hotline: <strong>1900 6789</strong>
                  </p>
                </div>
                <div className="dowload dowload_desktop">
                  <p className="info_text">Download App</p>
                  <img src="./image/header/apple_desktop.svg" alt="app_apple" />
                  <img
                    src="./image/header/android_desktop.svg"
                    alt="app_android"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header_container">
              <div className="header_logo hidden">
                <img src="./image/Logo.png" alt="logo" />
              </div>

              <div className={open ? "sibar translate" : "sibar"}>
                <div className="sibar_menu">
                  <div className="header_sibar">
                    <div className="header_logo">
                      <img src="./image/Logo.png" alt="logo" />
                    </div>

                    <div className="nav-icon" onClick={handleSibar}>
                      <AiOutlineClose className="icon" />
                    </div>
                  </div>
                  <ul className="menu">
                    <li className="menu_item active">
                      <a href="/#" className="menu_item-link active_link ">
                        Trang chủ
                      </a>
                    </li>
                    <li className="menu_item">
                      <a href="/#" className="menu_item-link">
                        Lợi ích
                      </a>
                    </li>
                    <li className="menu_item">
                      <a href="/#" className="menu_item-link">
                        Chính sách
                      </a>
                    </li>
                    <li className="menu_item">
                      <a href="/#" className="menu_item-link">
                        Đăng ký
                      </a>
                    </li>
                    <li className="menu_item">
                      <a href="/#" className="menu_item-link">
                        Chương trình
                      </a>
                    </li>
                    <li className="menu_item">
                      <a href="/#" className="menu_item-link">
                        Q&A
                      </a>
                    </li>
                    <li className="menu_item">
                      <a href="/#" className="menu_item-link">
                        Tải xuống
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="info hidden">
                  <div className="dowload dowload_mobile">
                    <p className="info_text">Download App</p>
                    <img
                      src="./image/header/apple.svg"
                      alt="app_apple"
                      className="app_mobile"
                    />
                    <img
                      src="./image/header/android.svg"
                      alt="app_android"
                      className="app_mobile"
                    />
                  </div>
                  <div className="help">
                    <p className="info_text">Hỗ trợ</p>
                    <span></span>
                    <p className="info_text">
                      Hotline: <strong>1900 6789</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="nav-icon" onClick={handleSibar}>
                <RiMenu3Fill className="icon" />
              </div>
            </div>
          </div>
        </div>
        <main>
          <section className="banner">
            {/* <img src={BG} alt="banner_image" className="banner_image" /> */}
            <div className="container">
              <div className="banner_container">
                <div className="banner_content">
                  <h2 className="banner_content-title">Shopdi Connect</h2>
                  <h3 className="banner_content-subtitle">
                    Lợi nhuận khủng không giới hạn!{" "}
                  </h3>
                  <p className="banner_content-text">
                    Nhận ngay lợi nhuận lên tới 25% không giới hạn khi giới
                    thiệu thành công người dùng click xem giá bí mật và giá giảm
                    không giới hạn tại Shopdi. Giới thiệu càng nhiều, thu nhập
                    càng khủng
                  </p>

                  <button className="btn">
                    TRỞ THÀNH SHOPDI CONNECTOR NGAY!
                  </button>
                </div>

                <div className="banner_app">
                  <img src={BannerApp} alt="banner_app" className="app_image" />
                </div>
              </div>
            </div>
          </section>

          <section className="benefit">
            <div className="container">
              <div className="benefit_container">
                <h2 className="benefit_title">Lợi ích</h2>
                <h3 className="benefit_subtitle">
                  Tại sao bạn nên trở thành một
                </h3>
                <p className="benefit_name">Shopdi Connector</p>
                <div className="benefit_box flex_reverse">
                  <div className="benefit_box-content">
                    <p className="content_title">
                      Giá trị thực cho cộng đồng của bạn
                    </p>
                    <p className="content_sub">
                      Shopdi là nền tảng Thương mại Điện tử Thế hệ Mới dành
                      riêng cho sản phẩm cao cấp và sản phẩm phiên bản giới hạn.
                      Thông qua cơ chế giá bí mật, giá bán của các sản phẩm trên
                      Shopdi được quyết định bởi số lượng người quan tâm. Các
                      sản phẩm được bán trên nền tảng thương mại điện tử Shopdi
                      là hàng sản xuất chính hãng.
                    </p>
                  </div>

                  <img src={Value} alt="" className="value_img" />
                </div>

                <div className="benefit_box flex_row-reverse ">
                  <div className="benefit_box-content">
                    <p className="content_title">Lợi nhuận hấp dẫn</p>
                    <p className="content_sub">
                      Nhận ngay lợi nhuận không giới hạn khi giới thiệu thành
                      công người dùng click xem giá bí mật và giá giảm không
                      giới hạn tại Shopdi. Giới thiệu càng nhiều, thu nhập càng
                      khủng.
                    </p>
                  </div>

                  <img
                    src={Profit}
                    alt=""
                    className="profit_img profit_scale"
                  />
                </div>

                <div className="benefit_box  flex_reverse">
                  <div className="benefit_box-content">
                    <p className="content_title">Nhiều phần thưởng hơn</p>
                    <div className="content_item">
                      <img src={Bullet} alt="" className="bullet_img" />
                      <p className="content_sub">
                        Nhận giải thưởng lên đến 30 triệu đồng mỗi tháng khi
                        tham gia vào các chương trình đường đua F1
                      </p>
                    </div>

                    <div className="content_item">
                      <img src={Bullet} alt="" className="bullet_img" />
                      <p className="content_sub">
                        Tham gia các sự kiện độc quyền dành cho các Shopdi
                        Connectors với nhiều phần quà hấp dẫn.
                      </p>
                    </div>
                  </div>

                  <img src={Reward} alt="" className="reward_img" />
                </div>
              </div>
            </div>
          </section>

          <section className="policy">
            <div className="container">
              <div className="policy_container">
                <div className="policy_heading">
                  <h2 className="policy_titile">Chính sách</h2>
                  <h3 className="policy_sub">Chính sách Shopdi Connector</h3>
                </div>
                <div className="policy_content">
                  <p className="policy_text">
                    Tỷ lệ hoa hồng lên đến 25%. Không giới hạn mức thu nhập bạn
                    có thể kiếm được
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
