import { Link } from "react-router-dom";
import { arrow } from "../assets/icons/";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Rohan</span>👋
      <br /> A Web Developer from Nepal
    </h1>
  ),
  2: (
    <InfoBox
      text="Crafting full-stack web applications with a focus on responsive design, efficient functionality, and a commitment to growing as a versatile developer in every layer of the stack."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Want to see the projects i created along the way?"
      link="/projects"
      btnText="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};

export default HomeInfo;
