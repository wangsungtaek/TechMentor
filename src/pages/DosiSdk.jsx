import { useState } from "react";
import apiRequest from "../api/apiRequest";

import ContractCard from "../components/dosi/contractCard";

import mockImg1 from "../assets/img/nft/nft_img_01.png";
import mockImg2 from "../assets/img/nft/nft_img_02.png";

import "./DosiSdk.css";
import TokenTypeCard from "../components/dosi/TokenTypeCard";

const mockContractList = [
  {
    id: 1,
    contectId: "af32sd",
    name: "시티즌",
    img: mockImg1,
  },
  {
    id: 2,
    contectId: "1af43aa",
    name: "열렙전사",
    img: mockImg2,
  },
  {
    id: 3,
    contectId: "1af43aa",
    name: "열렙전사",
    img: mockImg2,
  },
  {
    id: 4,
    contectId: "1af43aa",
    name: "열렙전사",
    img: mockImg2,
  },
  {
    id: 5,
    contectId: "1af43aa",
    name: "열렙전사",
    img: mockImg2,
  },
  {
    id: 6,
    contectId: "1af43aa",
    name: "열렙전사",
    img: mockImg2,
  },
  {
    id: 7,
    contectId: "1af43aa",
    name: "열렙전사",
  },
  {
    id: 8,
    contectId: "1af43aa",
    name: "열렙전사",
  },
];

const mockTokenTypeList = [
  {
    tokenType: "10000001",
    tokenName: "토큰1",
    tokenMeta: "{메타데이터}",
    img: mockImg1,
  },
  {
    tokenType: "10000002",
    tokenName: "토큰2",
    tokenMeta: "{메타데이터2}",
    img: mockImg2,
  },
  {
    tokenType: "10000003",
    tokenName: "토큰3",
    tokenMeta: "{메타데이터3}",
    img: mockImg2,
  },
  {
    tokenType: "10000004",
    tokenName: "토큰4",
    tokenMeta: "{메타데이터4}",
  },
  {
    tokenType: "10000005",
    tokenName: "토큰5",
    tokenMeta: "{메타데이터5}",
  },
  {
    tokenType: "10000006",
    tokenName: "토큰6",
    tokenMeta: "{메타데이터6}",
    img: mockImg1,
  },
];

// const testAPI = async () => {
//   try {
//     const data = await apiRequest("GET", "/time");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// testAPI();

const DosiSdk = () => {
  const [selectContract, setSelectContract] = useState("0");

  return (
    <div className="DosiSdk">
      {/* CONTECT ID */}
      <section className="contract_info">
        <h2 className="contract_title">컨트랙트 아이디</h2>
        <span className="contect_id_en">CONTECT ID</span>

        <ul className="contect_id_list">
          {mockContractList.map((item) => {
            return (
              <li key={item.id} className="contract_id">
                <ContractCard
                  {...item}
                  selectContract={selectContract}
                  onClick={() => setSelectContract(item.id)}
                />
              </li>
            );
          })}
        </ul>
      </section>

      {/* Token Type */}
      {Number(selectContract) > 0 ? (
        <section className="token_type_info">
          <h2 className="token_type_title">토큰 타입</h2>
          <span className="token_type_en">TOKEN TYPE</span>

          <ul className="token_type_list">
            {mockTokenTypeList.map((item) => {
              return (
                <li key={item.tokenType} className="token_type">
                  <TokenTypeCard {...item} />
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default DosiSdk;
