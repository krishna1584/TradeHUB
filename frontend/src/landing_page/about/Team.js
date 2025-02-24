import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center fw-bold" style={{ color: "#4361ee" }}>Leadership</h1>
      </div>
      <div className="row p-5" style={{ fontSize: "1.2em" }}>
        <div className="col-md-6 p-5 text-center">
          <img src="media/images/alex_morgan.jpg" className="rounded-circle shadow" style={{ width: "50%" }} alt="Alex Morgan" />
          <h4 className="mt-5 fw-bold">Alex Morgan</h4>
          <h6 className="text-primary">Founder & Chief Executive Officer</h6>
        </div>
        <div className="col-md-6 p-5" style={{ fontSize: "1em" }}>
          <p>Alex founded TradeHub in 2015 after experiencing firsthand the challenges facing retail investors. With a background in fintech and over 15 years of trading experience, he's transformed TradeHub into a revolutionary platform for modern investors.</p>
          <p>He serves on multiple advisory committees for financial regulatory bodies and regularly contributes to policy discussions on market accessibility and transparency.</p>
          <p>When not revolutionizing trading, Alex is an avid mountain biker and chess enthusiast.</p>
          <p>
            Connect with Alex on{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#f72585" }}>
              Our Blog
            </Link>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none", color: "#f72585" }}>
              Investor Forum
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none", color: "#f72585" }}>
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;