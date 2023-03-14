import React from "react";
import "../styles/dashboard.css";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BsSticky } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="sidenav">
          <div className="icon-wrapper">
            <VscGitPullRequestGoToChanges className="sidenav-icon tooltip" />
            <span className="tooltiptext">Send KYC request</span>
          </div>
          <div className="icon-wrapper">
            <BsSticky className="sidenav-icon tooltip" />
            <span className="tooltiptext">Pendings</span>
          </div>
          <div className="icon-wrapper">
            <AiOutlineUnorderedList className="sidenav-icon tooltip" />
            <span className="tooltiptext">Available KYC</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
