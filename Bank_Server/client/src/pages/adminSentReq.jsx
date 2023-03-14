import React from "react";
import "../styles/adminSentReq.css";

function AdminSentReq() {
  return (
    <>
      <div className="admin-sent-req-container">
        <div className="admin-sent-req-container-left">
          <div className="heading">Send notification for <span className="kyc-highlighted-text">KYC</span></div>
          <div className="sub-heading">Enter the details of customer</div>
          <form className="sent-kyc-req-to-customer">
            <input className="input-box" type="text" name="" id="" placeholder="Customer name" />
            <input className="input-box" type="email" name="" id="" placeholder="Customer email" />
            <input className="input-box" type="number" name="" id="" placeholder="Customer number" />
            <button className="send-button">Send</button>
        </form>

        </div>

        <div className="admin-sent-req-container-right">
          <div className="admin-sent-req-container-right-canvas">

          </div>
        </div>
        
      </div>
    </>
  );
}

export default AdminSentReq;
