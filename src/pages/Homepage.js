import React, { Fragment } from "react";
import "../Style/homepage.css";
import logocard from "../image/logocard.png";
import Footer from "./Footer";
import Mailing from "./mailing";
import Navbar from "./Navbar";
import Card from "../component/Card.js";
import buypack from "../image/buypack.png";
import challenges from "../image/challenges.png";
import redeempromo from "../image/redeempromo.png";
const Homepage = () => {
    return(
        <Fragment>
            <Navbar />
            <div className="hero-section">
        <div className="hero-cardimg">
      <img src={logocard} className="logo-card"/>
      </div>
      <h1 className="hero-heading">Supergoal Series NFT Collection</h1>
      </div>
            <div className="card-section">
            <Card cardimg={buypack} title="Buy Packs" description="Complete your collection of Officially licensed digital collectibles."/>
            <Card cardimg={challenges} title="Challenges" description="Participate in challenges to earn unique rewards. "/>
            <Card cardimg={redeempromo} title="Redeem Promo" description="Click here to receive your free SuperGoal Promo Pack"/>
    </div>
            <Mailing />
            <Footer />
        </Fragment>
    )
}
export default Homepage;