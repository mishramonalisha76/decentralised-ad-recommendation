import { useState, useEffect } from "react";
// import { initiliaseUserContract } from "../../ether";
import ConnectButtonComp from "../connectButton/index";
import UserDashboard from "./user";
import ProviderDashboard from "./provider";
import SupplierDashboard from "./supplier";
import { useProvider } from "wagmi";
import "./dashboard.css";
import user from "../../contracts/DeAdsUser";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

const USERADD = "0x93C0545ef91dAEe2469c27f3311f91b768f5B871";

export default function Dashboard(props) {

  const [contentIndex, setContentIndex] = useState(0);
 
  return (
    <>
      <ConnectButtonComp />
      <div className="div-column dashboard-div">
        <div className="div-row dashboard-tab-div">
          <button
            className="dashboard-tab-div-button"
            onClick={() => setContentIndex(0)}
          >
            User
          </button>
          <button
            className="dashboard-tab-div-button"
            onClick={() => setContentIndex(1)}
          >
            Ad Provider
          </button>
          <button
            className="dashboard-tab-div-button"
            onClick={() => setContentIndex(2)}
          >
            Ad Supplier
          </button>
        </div>
        <hr />
        {props.isConnected ? (
          <>
            {contentIndex === 0 && <UserDashboard />}
            {contentIndex === 1 && <ProviderDashboard />}
            {contentIndex === 2 && <SupplierDashboard />}
          </>
        ) : (
          <h1>Please Connect Wallet</h1>
        )}
      </div>
    </>
  );
}
