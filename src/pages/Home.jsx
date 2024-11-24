import MainHeader from "../components/common/MainHeader";
import ComBanner from "../components/common/ComBanner";

import bg_banner_01 from "../assets/img/banner/bg_banner_01.jpg";
import infoImg from "../assets/img/common/info_02.png";

import "./Home.css";
import ComInfoItem from "../components/common/ComInfoItem";

const Home = () => {
  return (
    <div className="Home">
      {/* Banner */}
      <ComBanner
        title="테크멘토"
        subtitle="Discover amazing features and content."
        backgroundImage={bg_banner_01}
      />

      {/* Content */}
      <div className="content_container">
        <section className="info_wrapper">
          <ComInfoItem
            text={"정보01"}
            img={infoImg}
            onClick={() => console.log(11)}
          />
          <ComInfoItem />
          <ComInfoItem />
        </section>
        <section>section2</section>
        <section>section3</section>
      </div>

      {/* Footer */}
      <div className="footer_wrapper">
        <div>footer</div>
      </div>
    </div>
  );
};

export default Home;
