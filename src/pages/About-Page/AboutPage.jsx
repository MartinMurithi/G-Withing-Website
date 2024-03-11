import React from "react";
import { FaCheck } from "react-icons/fa";
import NavBar from "../../components/Nav/NavBar";
import "./AboutPage.css";
import CompanyStructure from "../../components/company-structure/CompanyStructure";
import CodeOfConduct from "../../components/code of conduct/CodeOfConduct";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="aboutUsPage">
        <div className="aboutUsPageBcg">
          <p className="aboutUsPageTitle">About G-Withing Company Limited</p>
        </div>

        <div className="aboutUsPageText">
          <h4 className="aboutUsSectionIntro">
            We are a professional cleaning, fumigation and landscaping services
            company in Tanzania
          </h4>
          <p className="aboutUsDescription">
            We have an extensive experience in cleaning all types of buildings
            such as schools, offices, colleges, commercail buildings, industrial
            buildings, hotels, shopping malls, government offices, hospitals,
            banks and providing solid waste management and gardening services.
            We also perfom house-keeping activities in various private and and
            government settings. Other services provided by the company include
            gardening, fumigation, cleaning supplies, land scalping and office
            hygiene. All these services can be done both ways mean in offices as
            described in the paragrpah above and domestic.
          </p>
          <p className="aboutUsDescription">
            The company invites all kinds of customers ranging from corporate
            and individuals for their services at their residential premises.
            Our employees are skilled and experienced to provide the best
            services to our customers. G-Withing Company Limited shall undertake
            the intiative to expand its market, and the present business office
            is located in Dar er Salaam but our products and services are
            canelled all over Tanzania.
          </p>
          <p className="aboutUsDescription">
            Our company is very selective in employing new staff hence various
            training and employeeinduction is done to ensure all staff are
            competent to perform their best at work. Our staff has excellent
            track record and we keep reminding them through various trainings
            for customer care and coaching to ensure that they maximize their
            potential at wot=rk place as well as growth in their career ladder.
            The success of the company lies in its ability to train, retain and
            manage it's human resources to achieve the standards demanded by the
            customers we serve in Tnazania. Moreover, our management team is
            well skilled and experienced in running various projects including
            cleaning and gardening services.
          </p>

          <h4 className="missionTitle">OUR MISSION</h4>
          <ul className="missionList">
            <div className="missionItem">
              <FaCheck />
              <li className="mission">
                To provide cleaning that will strive to be the industry leaders
                in superior quality with innovative technulogy to meet the
                demands of our customers
              </li>
            </div>

            <div className="missionItem">
              <FaCheck />
              <li className="mission">
                To retain consistency in the provision of our high-quality
                cleaning with strong focus of our clients, while ensuring
                confidentiality and trust from all stake holders.
              </li>
            </div>

            <div className="missionItem">
              <FaCheck />
              <li className="mission">
                Cleaning is our core business, achieving the priority of
                customers will help us to survive in this fiercely competitve
                environment.
              </li>
            </div>

            <div className="missionItem">
              <FaCheck />
              <li className="mission">
                Allow customers to judge the quality of servies provided through
                feedback modles for our corporate and individual customers.
              </li>
            </div>

            <div className="missionItem">
              <FaCheck />
              <li className="mission">
                To achieve a reputation in the market place for outstanding
                delivery.
              </li>
            </div>

            <div className="missionItem">
              <FaCheck />
              <li className="mission">
                To encourage close and everlasting relationships with our
                customers thereby building their trust and confidence.
              </li>
            </div>
          </ul>

          <h4 className="visionTitle">OUR VISION</h4>
          <p className="vision">
            Through a committment to excellence and continual investment in our
            people, we seek to become the leading brand name within the cleaning
            industry nation wide.
          </p>
        </div>
      </div>
      {/* Company structure */}
      <CompanyStructure />

      {/* Code of conduct */}
      <CodeOfConduct />
    </div>
  );
}

export default AboutPage;
