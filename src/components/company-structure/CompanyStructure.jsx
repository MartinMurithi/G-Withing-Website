import React from "react";
import "./CompanyStructure.css";

function CompanyStructure() {
  return (
    <div className="companyStructure">
      <h3 className="companyStructureTitle">Company Structure</h3>
      <p className="companyStructureDescription">
        Our company's structure is meticulously crafted to ensure efficiency and
        excellence in every aspect of our operations. At its core, our Managing
        Director leads the charge, setting strategic goals and steering our path
        to success. Working in harmony, our Directors of Operations and
        Administration oversee key functions, facilitating seamless coordination
        and optimal performance. Under their guidance, our Senior Contracts
        Relations Manager and Head of Environment uphold client satisfaction and
        environmental stewardship, respectively. Supported by our Human Resource
        Manager, they ensure our workforce remains skilled and motivated. Nested
        within this framework, our Account-Relationship Managers, overseen by
        the Senior Contracts Relations Manager, cultivate strong client
        partnerships, driving our commitment to exceptional service. The graph
        below simplifies this hierarchy, showcasing the clear lines of authority
        and the collaborative spirit that drives our company forward.
      </p>
      <figure>
        <img
          src="/assets/company-structure.png"
          alt="Company Structure"
          width="90%"
          loading="lazy"
          className="companyStructureImg"
        />
        <figcaption>Company Structure</figcaption>
      </figure>
    </div>
  );
}

export default CompanyStructure;
