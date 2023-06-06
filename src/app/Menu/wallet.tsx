import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import History from "@/components/history";

const Wallet = () => {
  const [balance, setBalance] = useState(869);
  const [used, setUsed] = useState<number>(0);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
  };

  const getDates = (): string[] => {
    const dates: string[] = [];
    const currentDate = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      const formattedDate = date.toISOString().split("T")[0];
      dates.push(formattedDate);
    }
    return dates;
  };
  const labels = getDates();

  const data = {
    labels,
    datasets: [
      {
        label: "Time range",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#9e83ea",
      },
    ],
  };
  return (
    <div className="walletMenu">
      <div className="headWallet">
        <div className="chartWallet">
          <div className="precentage">
            <span>Precentage</span>
            <Line options={options} data={data} />
          </div>
          <div className="history">
            History
            <div className="listHistory">
            <History />
            <History />
            <History />
            <History />
            <History />
            <History />
            <History />
            </div>
          </div>
        </div>
        <div className="cardWallet">
          <div className="wall">
            <div className="credit">
              <span>Total Balance</span>
              <div className="total">
                <p>{balance} ALN</p>
              </div>
            </div>
            <div className="bottomSide">{balance}.000 Rupiah</div>
          </div>
          <div className="exchange">
            <div className="head">
              <span>Exchange</span>
              <span>1 ALN = Rp 1000</span>
            </div>
            <div className="main">
              <div className="w100 center">
                <input
                  type="number"
                  min={0}
                  defaultValue={0}
                  max={balance}
                  onChange={(e) => setUsed(parseInt(e.target.value))}
                />
              </div>
              <div className="w100 center">
                <input type="number" value={used * 1000} />
              </div>
            </div>
            <div className="center">
              <button className="exchangeButton">Exchange</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
