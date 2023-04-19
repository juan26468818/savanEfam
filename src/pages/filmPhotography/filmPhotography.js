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
                    <p>Photography has always held a special place in my heart. My father gifted me my first camera when I was just a child of twelve. But, alas, I didn't pursue it for long, and the camera lay forgotten in a drawer for years.</p>
                    <p>It wasn't until I purchased my first film camera, a Minolta X700, that my life as a photographer truly began. I bought it for my first photography class at Broward College, Florida, and from the moment I held it in my hands, I fell in love immediately.</p>
                    <p>The process of capturing images on film and developing them in a darkroom held a certain allure, an intimacy that is missing in the digital age. As I learned more about photography through the class, I discovered that it is more than just a matter of clicking a button. It is about understanding the nuances of light and composition, honing your observational skills, and mastering the art of printing.</p>
                    <p>I urge anyone who delves into the world of film photography to immerse themselves in the entire process. Learn how to develop and print in a photo lab and experience the wonder of this mysterious adventure firsthand. The joy of seeing an image slowly come to life in the darkroom is something that cannot be replicated by the instant gratification of the digital age.</p>
                </div>
            <div className="film-container" >
                <Photos images={filmImages}/>
            </div>
            <ImageSlider images={filmImages} isActive={true}/>
            
            <Footer />
        </div>
    )
}

export default FilmPhotography;