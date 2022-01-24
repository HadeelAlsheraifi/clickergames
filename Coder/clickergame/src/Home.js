import React, { useState } from "react";

const Home = () => {
  const [clicks, setClicks] = useState(0);
  const [coin, addCoin] = useState(1);
  const [upgrades, addUpgrades] = useState([]);

  const clicksCounter = () => {
    setClicks(clicks + coin);
    makeUpgrade();
  };

  const makeUpgrade = () => {
    if (clicks > 15) {
      addUpgrades([...upgrades, 1.5]);
    }
  };

  const useUpgrade = (upgradeValue, index) => {
    addCoin(coin * upgradeValue);
    let upgardeTemp = [...upgrades];
    upgardeTemp.splice(index, 1);
    addUpgrades(upgardeTemp);
  };

  const upgradeButtons = upgrades.map((upgradeValue, index) => (
    <button
      key={index}
      className="Button"
      // onClick={() => {
      //   useUpgrade(upgradeValue, index);
      // }}
    >
      Upgrade x {upgradeValue}
    </button>
  ));
  return (
    <div className="Add">
      <h1>ClickerGame for OCDs</h1>
      <h4>Gain! As much as you press</h4>
      <h4>Your Score {clicks}</h4>

      <button className="Button" onClick={clicksCounter}>
        {" "}
        Add {coin}
      </button>
      {upgradeButtons}
    </div>
  );
};

export default Home;
