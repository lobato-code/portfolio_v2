import './tools.css';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostcss,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaNpm,
  FaReact,
} from 'react-icons/fa';

function Tools() {
  return (
    <div className='skills__stacks'>
      <div className='skills__frontend'>
        <ul className='skills__list'>
          <li>
            <FaHtml5 id='html' className='tool_svg' />
            <p className='tool__name'>HTML</p>
          </li>
          <li>
            <FaCss3Alt id='css' className='tool_svg' />
            <p className='tool__name'>CSS</p>
          </li>
          <li>
            <SiJavascript id='js' className='tool_svg' />
            <p className='tool__name'>JavaScript</p>
          </li>
          <li>
            <FaGitAlt id='git' className='tool_svg' />
            <p className='tool__name'>GIT</p>
          </li>

          <li>
            <SiTailwindcss id='twd' className='tool_svg' />
            <p className='tool__name'>Tailwind</p>
          </li>
          <li>
            <FaNpm id='npm' className='tool_svg' />
            <p className='tool__name'>NPM</p>
          </li>
          <li>
            <SiWebpack id='wpk' className='tool_svg' />
            <p className='tool__name'>Webpack</p>
          </li>
          <li>
            <FaReact id='react' className='tool_svg' />
            <p className='tool__name'>React</p>
          </li>

          <li>
            <FaLinux id='linux' className='tool_svg' />
            <p className='tool__name'>Linux</p>
          </li>
          <li>
            <SiNextdotjs id='next' className='tool_svg' />
            <p className='tool__name'>Next</p>
          </li>
          <li>
            <FaNodeJs id='node' className='tool_svg' />
            <p className='tool__name'>Node</p>
          </li>
          <li>
            <SiExpress id='exps' className='tool_svg' />
            <p className='tool__name'>Express</p>
          </li>
          <li>
            <SiMongodb id='mongo' className='tool_svg' />
            <p className='tool__name'>Mongo DB</p>
          </li>
          <li>
            <SiTypescript id='typescript' className='tool_svg' />
            <p className='tool__name'>Typescript</p>
          </li>
          <li>
            <SiPostgresql id='postgres' className='tool_svg' />
            <p className='tool__name'>Postgres</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tools;
