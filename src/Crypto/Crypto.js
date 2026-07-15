import { useEffect, useState } from "react";
import "./Crypto.css";

const Crypto = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );

        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="panel-main">
        <div className="newsContainer">
        {coins.map((coin) => (
            <div className="" key={coin.id}>
            <h3>{coin.symbol.toUpperCase()}</h3>
            <h3>${coin.current_price}</h3>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Crypto;