import React, { Fragment } from 'react';
import "../Style/mailing.css";


const Mailing = () => {
  return (
    <Fragment>
    <div className="mailing-section">
        <h5 className="m-heading">Stay in the loop</h5>
<p className="f_para">Join our mailing list to stay updated on the latest NFT Drops, 
Features and Games from OWENS</p>
<div className="email">
  <input placeholder="Enter your email here..." type="text"  className="enter-email"/>
  <button className="sub-btn">Submit</button>
</div>
    </div>
    </Fragment>
  )
}

export default Mailing;