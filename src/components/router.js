import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useAccount } from "wagmi";
import Landing from "./landing/index";
import Dashboard from "./dashboard/index";

export default function RouterComponent() {
  const { address, isConnected } = useAccount();
  console.log(window.location.hash);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Dashboard address={address} isConnected={isConnected}/>} />
        </Routes>
      </Router>
  );
}
