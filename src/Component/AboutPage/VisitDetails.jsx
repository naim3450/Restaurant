import React from "react";
import TitleDes from "../../Common/TitleDes";
import img from "../../assets/visit.png";

const VisitDetails = () => {
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={img} alt="" className="w-[550px]" />
          </div>
          <div>
            <TitleDes p1={true} p2={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitDetails;
