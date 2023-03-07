import "./home.css";
import Header from "../../components/header/header";
import Photos from "../../components/photos/photos";
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
        <div>
            <Header />
            <div className="home__body">
                <Link to="/FilmPhotography/#film-photography"><Photos class="FilmHome" title="Film Photography"/></Link>
                    <hr />
                <Link to="DigitalPhotography"><Photos class="DigitalHome" title="Digital Photography"/> </Link>
                <div className="home__about-me-description">
                </div>
                <hr />
                <section className="home__about-me">
                    <Link to="About"><Photos class="AboutMe" title="About Me"/></Link>
                    <div className="home__about-me-description">
                  </div>
                </section>
            </div>
            
        </div>
    )
}



export default Home;