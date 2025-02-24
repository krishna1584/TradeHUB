import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-4 mt-5">
        <h1 className="text-center fw-bold" style={{ color: "#4361ee" }}>
          Revolutionizing trading with cutting-edge technology. <br /> Experience the future of investing today.
        </h1>
      </div>
      
      <div className="row py-5 mt-4 border-top lh-lg" style={{ fontSize: "1.2em" }}>
        <div className="col-md-6 p-4 p-md-5">
          <p>Founded on a vision to transform the financial landscape, TradeHub began its journey in 2015 with a mission to democratize investing. We combined "Trade" with "Hub" to represent our core philosophy: a central platform where trading becomes accessible for everyone.</p>
          <p>Today, our innovative technology and transparent pricing have established us as a leading trading platform in the country.</p>
          <p>With a community of over 5 million active investors, our robust trading ecosystem processes thousands of transactions daily, representing a significant portion of retail trading volume nationwide.</p>
        </div>
        <div className="col-md-6 p-4 p-md-5">
          <p>Beyond trading, we're committed to financial literacy through our comprehensive learning resources, webinars, and investment workshops designed for traders at every level.</p>
          <p>
            <a href="#" target="_blank" style={{ textDecoration: "none", color: "#f72585" }}>
              InnovateX
            </a>
            , our technology incubator, supports promising fintech startups that are reshaping the future of financial markets through technological innovation.
          </p>
          <p>We continuously evolve to meet investor needs in a dynamic market environment. Follow our updates on our blog or check out recent media coverage to stay connected with our latest innovations.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;