import React, { useState } from "react";

const History = () => {
  const [amount, setAmount] = useState(243);
  return (
    <div className="detailHistory">
      <div className="transactionId">0x001231a45cd65</div>
      <div className="type">Claim</div>
      <div className="date">15-02-2023</div>
      <div className="amount">
        {amount > 0 ? (
          <div className="plus"> +{amount} ALN</div>
        ) : (
          <div className="minus"> {amount} ALN</div>
        )}
      </div>
    </div>
  );
};

export default History;
