import { getSnsImg } from "../../util/get-sns-img";
import "./SnsItem.css";

const SnsItem = ({ name }) => {
  return (
    <div className="SnsItem">
      <img className="sns_img" src={getSnsImg(name)} />
      <div className="sns_name">{name}</div>
    </div>
  );
};

export default SnsItem;
