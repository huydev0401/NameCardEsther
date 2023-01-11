import { useState } from "react";

/* eslint-disable react/jsx-no-target-blank */
function App() {
  const [showLink1, setShowLink1] = useState(true);
  const [showLink2, setShowLink2] = useState(false);
  const [showLink3, setShowLink3] = useState(false);

  const activeLink1 = () => {
    setShowLink1(true);
    setShowLink2(false);
    setShowLink3(false);
  };
  const activeLink2 = () => {
    setShowLink1(false);
    setShowLink2(true);
    setShowLink3(false);
  };
  const activeLink3 = () => {
    setShowLink1(false);
    setShowLink2(false);
    setShowLink3(true);
  };

  return (
    <>
      <div className="card" data-state="#about">
        <div className="card-header">
          <div className="card-cover"></div>
          <img className="card-avatar" src="/Esther.png" alt="avatar" />
          <h1 className="card-fullname">Lê Thụy Thục Đoan</h1>
          <h2 className="card-jobtitle">Co-founder</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">
                Whatever tattooed stumptown art party sriracha gentrify hashtag
                intelligentsia readymade schlitz brooklyn disrupt.
              </p>
            </div>
            <div className="card-social">
              <a
                href="fb://profile/https://www.facebook.com/thuc.doan.5/"
                target="_blank"
              >
                <img src="/icons/facebook.png" alt="" />
              </a>
              <a href="http://zalo.me/0778206885" target="_blank">
                <img src="/icons/zalo.png" alt="" />
              </a>
              <a href="viber://add?number=84778206885">
                <img src="/icons/viber.png" alt="" />
              </a>
              <a href="mailto:media@wowmultimedia.vn">
                <img src="/icons/mail.png" alt="" />
              </a>
            </div>
          </div>
          <div className="card-buttons">
            <button
              onClick={() => activeLink1(true)}
              data-section="#about"
              className={`${showLink1 ? "is-active" : ""}`}
            >
              ABOUT
            </button>
            <a
              onClick={() => activeLink2(true)}
              className={`${showLink2 ? "is-active" : ""}`}
              href="https://intro-wow.vercel.app/"
              target="_blank"
              data-section="#experience"
            >
              SERVICES
            </a>
            <a
              onClick={() => activeLink3(true)}
              className={`${showLink3 ? "is-active" : ""}`}
              href="https://drive.google.com/file/d/1iv9sKRmnusIq1KBt_9wuzFA-m2mdeQOA/view"
              target="_blank"
              data-section="#contact"
            >
              BROCHURE
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <a
          className="btn-download"
          href="/files/le-thuy-thuc-doan.vcf"
          download
        >
          Lưu danh bạ
        </a>
      </div>
    </>
  );
}

export default App;
