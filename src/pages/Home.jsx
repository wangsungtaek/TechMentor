import MainHeader from "../components/common/MainHeader";
import ComBanner from "../components/common/ComBanner";

const Home = () => {
  return (
    <div className="Home">
      {/* Header */}
      <MainHeader />

      {/* Banner */}
      <ComBanner
        title="테크멘토"
        subtitle="Discover amazing features and content."
      />

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
