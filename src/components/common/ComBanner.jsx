import "./ComBanner.css";

const ComBanner = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="ComBanner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
        {buttonText && (
          <button className="banner-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ComBanner;
