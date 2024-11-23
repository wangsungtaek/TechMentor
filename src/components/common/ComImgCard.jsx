import "./ComImgCard.css";
import defaultIcon from "../../assets/img/common/icon_t.png";
import defaultImg from "../../assets/img/nft/nft_img_01.png";

const ComImgCard = ({ title, content, icon, img }) => {
  return (
    <div className="ComImgCard">
      <div className="title_wrapper">
        <img className="title_icon" src={icon ? icon : defaultIcon} />
        <h3 className="title_name">{title ? title : "Token Type"}</h3>
      </div>
      <p className="card_content">{content ? content : "content"}</p>
      <img className="card_img" src={img ? img : defaultImg} />
    </div>
  );
};

export default ComImgCard;
