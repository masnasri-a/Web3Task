import React, { useState } from "react";
import { FiCheck, FiMoreVertical } from "react-icons/fi";
import ModalPick from "./modalPick";

const Card = (props: any) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(['a','b','c','d','e'])
  return (
    <div className="cardContainer">
        {
            data.map((detail, index)=>{
                return <div key={index} className="card">
                {show ? <ModalPick open={setShow} /> : <></>}
                <div className="cardHeader">
                  <span>This is just a sample title for nothing </span>
                  <div className="more">
                    <FiMoreVertical />
                  </div>
                </div>
                <div className="cardDesc">
                  <span>
                    Selanjutnya, .card mengatur gaya tampilan kartu dengan lebar 25%
                    pada tampilan desktop dan 33.33% pada tampilan layar yang lebih
                    kecil menggunakan media query @media. Dalam contoh di atas,
                  </span>
                </div>
                <div className="cardFooter">
                  <div className="side">
                    <div className="coin">20</div>
                    <div className="deadline">
                      <span>Tue, 16 May 2023</span>
                    </div>
                  </div>
                  <div className="pick" onClick={() => setShow(true)}>
                    <FiCheck />
                  </div>
                </div>
              </div>
            })
        }
      
    </div>
  );
};

export default Card;
