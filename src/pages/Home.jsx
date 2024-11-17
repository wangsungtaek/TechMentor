import MainHeader from "../components/common/MainHeader";

const Home = () => {
  return (
    <div className="Home">
      {/* Header */}
      <MainHeader />

      {/* Banner */}
      <div className="banner_wrapper">
        <div>배너 이미지</div>
      </div>

      {/* Content */}
      <div className="content_wrapper">
        <section>section1</section>
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
