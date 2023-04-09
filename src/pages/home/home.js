import "./home.css";
import Header from "../../components/header/header";
import Photos from "../../components/photos/photos";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/imagesSlider/imagesSlider";
import Mosaic from "../../components/mosaic/mosaic";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import digital3 from "../../assets/imgs/Digital/Digital3.webp"
import digital4 from "../../assets/imgs/Digital/Digital4.webp"
import digital5 from "../../assets/imgs/Digital/Digital5.webp"
import digital6 from "../../assets/imgs/Digital/Digital6.webp"
import digital7 from "../../assets/imgs/Digital/Digital7.webp"
import digital8 from "../../assets/imgs/Digital/Digital8.webp"
import digital9 from "../../assets/imgs/Digital/Digital9.webp"
import digital10 from "../../assets/imgs/Digital/Digital10.webp"
import digital11 from "../../assets/imgs/Digital/Digital11.webp"
import digital12 from "../../assets/imgs/Digital/Digital12.webp"
import digital13 from "../../assets/imgs/Digital/Digital13.webp"
import digital14 from "../../assets/imgs/Digital/Digital14.webp"
import digital15 from "../../assets/imgs/Digital/Digital15.webp"
import digital16 from "../../assets/imgs/Digital/Digital16.webp"
import digital18 from "../../assets/imgs/Digital/Digital18.webp"
import digital19 from "../../assets/imgs/Digital/Digital19.webp"
import digital20 from "../../assets/imgs/Digital/Digital20.webp"

import film1 from "../../assets/imgs/Film/film1.webp"
import film2 from "../../assets/imgs/Film/film2.webp"
import film4 from "../../assets/imgs/Film/film4.webp"
import film5 from "../../assets/imgs/Film/film5.webp"
import film6 from "../../assets/imgs/Film/film6.webp"
import film7 from "../../assets/imgs/Film/film7.webp"
import film10 from "../../assets/imgs/Film/film10.webp"
import film11 from "../../assets/imgs/Film/film11.webp"

const Home = ()=>{
    const digitalImages = [digital7, digital15, digital3, film1, film2, film5]
    const sliderImages = [film2,digital9,digital10,digital11,
        digital12,  film6, film7, film10, 
        film11,film4 , digital3,
         film5, digital4, 
        digital5, digital6, digital7,digital8,
        digital13,digital14,digital15,digital16,
        digital18,digital19,digital20]

    return(
        <div>
            <Header />
            <div className="home__body">
                <div className="dnd">
                    <div className="dnd__container">
                        <DndProvider backend={HTML5Backend}>
                            <Mosaic images={digitalImages}/>
                        </DndProvider>
                    </div>
                </div>
                <hr className="slider-separation"/>
                <div className="main__slider-container">
                    <ImageSlider images={sliderImages} alt="prueba" />
                </div>
                {/* <div className="main__slider-container">
                    <h2>Film Photography</h2>
                    <ImageSlider images={sliderImages} alt="prueba" />
                </div> */}

                
                <div className="m-view">
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
            
        </div>
    )
}



export default Home;