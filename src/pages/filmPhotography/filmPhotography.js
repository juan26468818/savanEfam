import "./filmPhotography.css"
import Photos from "../../components/photos/photos";
import Header from "../../components/header/header";
import ImageSlider from "../../components/imagesSlider/imagesSlider"
import Footer from "../../components/footer/footer";
import film1 from "../../assets/imgs/Film/film1.webp"
import film2 from "../../assets/imgs/Film/film2.webp"
import film3 from "../../assets/imgs/Film/film3.webp"
import film4 from "../../assets/imgs/Film/film4.webp"
import film5 from "../../assets/imgs/Film/film5.webp"
import film6 from "../../assets/imgs/Film/film6.webp"
import film7 from "../../assets/imgs/Film/film7.webp"
import film8 from "../../assets/imgs/Film/film8.webp"
import film9 from "../../assets/imgs/Film/film9.webp"
import film10 from "../../assets/imgs/Film/film10.webp"
import film11 from "../../assets/imgs/Film/film11.webp"
import film12 from "../../assets/imgs/Film/film12.webp"
import film13 from "../../assets/imgs/Film/film13.webp"
import film14 from "../../assets/imgs/Film/film14.webp"


const FilmPhotography = () =>{

    const filmImages = [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11, film12, film13, film14]

    return(
        <div id="film-photography">
            <Header />
            <div className="home__about-me-description" >
                    <h2>Film Photography</h2>
                    <p>Even though since I was a little kid I’ve had a fascination for photography, and always possessed cameras, I consider my life as a photographer started when I bought my first film camera (Minolta X700) I had to buy it because I enrolled in my very first photography class. 
                    <br /> <br /> 
                    I fell in love immediately. Not only taking the photograph but the whole process that this analogic process entails. Revealing your film and going to the darkroom to print the photograph makes it intimate in a way. 
                    <br /> <br /> 
                    I highly recommend that if you are going to do film photography, make sure to be present in every part of the process, learn how to develop, and how to print in the photo lab. It makes the process almost intimate.</p>
                </div>
            {/* <div className="film-container" >
                <Photos class="Film1"/>
                <hr />
                
                <Photos class="Film2"/>
                <hr />

                <Photos class="Film3"/>
                <hr />

                <Photos class="Film4"/>
                <hr />

                <Photos class="Film5"/>
                <hr />

                <Photos class="Film6"/>
                <hr />

                <Photos class="Film8"/>
                <hr />
                <Photos class="Film7"/>
            </div> */}
            <ImageSlider images={filmImages} isActive={true}/>
            
            <Footer />
        </div>
    )
}

export default FilmPhotography;