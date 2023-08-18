import {
  SiExpress,
  SiGnubash,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVisualstudiocode,
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
            <FaHtml5 />
            <p>HTML</p>
          </li>
          <li>
            <FaCss3Alt />
            <p>CSS</p>
          </li>
          <li>
            <SiJavascript />
            <p>JavaScript</p>
          </li>
          <li>
            <FaGitAlt />
            <p>GIT</p>
          </li>

          <li>
            <SiTailwindcss />
            <p>Tailwind</p>
          </li>
          <li>
            <FaNpm />
            <p>NPM</p>
          </li>
          <li>
            <SiWebpack />
            <p>Webpack</p>
          </li>
          <li>
            <FaReact />
            <p>React</p>
          </li>
        </ul>
      </div>
      <div className="skills__backend">
        <p className="skills__stack--title">Backend</p>

        <ul className="skills__list">
          <li>
            <FaLinux />
            <p>Linux</p>
          </li>
          <li>
            <SiNextdotjs />
            <p>Next</p>
          </li>
          <li>
            <FaNodeJs />
            <p>Node</p>
          </li>
          <li>
            <SiExpress />
            <p>Express</p>
          </li>
          <li>
            <SiMongodb />
            <p>Mongo db</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tools;
