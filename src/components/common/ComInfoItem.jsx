import "./ComInfoItem.css";
import defaultImg from "../../assets/img/common/info_01.png";

const ComInfoItem = ({ text, img, onClick }) => {
  return (
    <div
      className={`ComInfoItem ${onClick ? "ComInfoItme_BUTTON" : ""}`}
      onClick={onClick}
    >
      <img className="comInfoItem_img" src={img ? img : defaultImg} />
      <h1 className="comInfoItem_text">{text}</h1>
    </div>
  );
};

export default ComInfoItem;
