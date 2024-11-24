import "./ContractCard.css";
import defaultImg from "../../assets/img/default.png";

const ContractCard = ({
  id,
  contractId,
  name,
  img,
  selectContract,
  onClick,
}) => {
  console.log(selectContract);
  return (
    <div className="ContractCard" onClick={onClick}>
      <div className="contract_img_wrapper">
        <img className="contrat_img" src={img ? img : defaultImg} />
        <div className="img_inner_nm">{name ? name : "img_name"}</div>
      </div>
      <div className="contract_info_wrapper">
        <div className={`contract_id ${id === selectContract ? "ACTIVE" : ""}`}>
          {contractId ? contractId : "CONTECT ID"}
        </div>
        <div className="contract_nm">{name ? name : "name"}</div>
      </div>
    </div>
  );
};

export default ContractCard;
