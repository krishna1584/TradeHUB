import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="img-fluid mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className="p-2 btn btn-primary fs-5 mx-auto" style={{ width: "100%", maxWidth: "300px" }}>
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Hero;
