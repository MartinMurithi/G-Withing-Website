import React from 'react';
import "./OurClients.css";

function OurClients() {
  return (
    <div className='client-section'>
        <h4 className="ourClientsTitle">Our Clients</h4>
        <div className="clientsList">
            <img src="/assets/haven-consultant.png" alt="Haven Consultant" />
            <img src="/assets/ideon.png" alt="Ideon" />
            <img src="/assets/onset-group.png" alt="Onset Group" />
            <img src="/assets/jic.png" alt="JIC" />
        </div>
    </div>
  )
}

export default OurClients