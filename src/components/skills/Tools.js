import "./tools.css";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiWebpack,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";

function Tools() {
  return (
    <div className="skills__stacks">
      <div className="skills__frontend">
        <p className="skills__stack--title">Frontend</p>
        <ul className="skills__list">
          <li>
            <FaHtml5 id="html" className="tool_svg" />
            <p>HTML</p>
          </li>
          <li>
            <FaCss3Alt id="css" className="tool_svg" />
            <p>CSS</p>
          </li>
          <li>
            <SiJavascript id="js" className="tool_svg" />
            <p>JavaScript</p>
          </li>
          <li>
            <FaGitAlt id="git" className="tool_svg" />
            <p>GIT</p>
          </li>

          <li>
            <SiTailwindcss id="twd" className="tool_svg" />
            <p>Tailwind</p>
          </li>
          <li>
            <FaNpm id="npm" className="tool_svg" />
            <p>NPM</p>
          </li>
          <li>
            <SiWebpack id="wpk" className="tool_svg" />
            <p>Webpack</p>
          </li>
          <li>
            <FaReact id="react" className="tool_svg" />
            <p>React</p>
          </li>
        </ul>
      </div>
      <div className="skills__backend">
        <p className="skills__stack--title">Backend</p>

        <ul className="skills__list">
          <li>
            <FaLinux id="linux" className="tool_svg" />
            <p>Linux</p>
          </li>
          <li>
            <SiNextdotjs id="next" className="tool_svg" />
            <p>Next</p>
          </li>
          <li>
            <FaNodeJs id="node" className="tool_svg" />
            <p>Node</p>
          </li>
          <li>
            <SiExpress id="exps" className="tool_svg" />
            <p>Express</p>
          </li>
          <li>
            <SiMongodb id="mongo" className="tool_svg" />
            <p>Mongo db</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tools;
