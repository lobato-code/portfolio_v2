import { BsArrowDown } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { SlMouse } from "react-icons/sl";
import Social from "./Social";
import "./home.css";
import ImageMe from "./Image";

function Home() {
  return (
    <section className="container home">
      <Social />
      <div className="home__body">
        <div className="home__description">
          <h1 className="home__title">Ariel Alejandro</h1>
          <p className="home__subtitle">
            ------- &nbsp; &nbsp;Fullstack developer
          </p>
          <p className="home__copy">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            necessitatibus reiciendis sed tenetur ex quibusdam veritatis
          </p>
          <button className="home__button button button--flex">
            Say hello! <TbSend />
          </button>
          <p className="home__cta flex">
            <SlMouse />
            Scroll down <BsArrowDown />
          </p>
        </div>
        <div className="home__image">
          <ImageMe />
        </div>
      </div>
    </section>
  );
}

export default Home;
