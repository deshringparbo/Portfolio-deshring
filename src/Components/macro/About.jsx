
import HeaderTitle from "../../elements/HeaderTitle";
import AboutCard from "../micro/AboutComponents/AboutCard";
import TerminalCard from "../micro/AboutComponents/TerminalCard";

const About = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-br from-gray-800 to-gray-700 md:px-20 lg:px-52 text-white"
    >
      {/* header name */}
      <HeaderTitle name="About me" />
      <div className="md:flex md:gap-4">
        {/* profile side */}
        <AboutCard />
        {/* terminal card */}
        <TerminalCard />
      </div>
    </section>
  );
};

export default About;
