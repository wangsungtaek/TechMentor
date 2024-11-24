import "./TokenTypeCard.css";
import defaultImg from "../../assets/img/default.png";

const TokenTypeCard = ({
  tokenType,
  tokenName,
  tokenMeta,
  selectTokenType,
  img,
  onClick,
}) => {
  return (
    <div className="TokenTypeCard" onClick={onClick}>
      <div className="token_type_img_wrapper">
        <img className="token_type_img" src={img ? img : defaultImg} />
        <h3 className="token_type">{tokenType ? tokenType : "00000000"}</h3>
      </div>

      <div className="token_type_info_wrapper">
        <div className="token_type_name">
          {tokenName ? tokenName : "namenamenamename"}
        </div>
        <div className="token_type_meta">
          {tokenMeta
            ? tokenMeta
            : "metametametametametametametametametametametametametametametametametametametametameta"}
        </div>
      </div>
    </div>
  );
};

export default TokenTypeCard;
