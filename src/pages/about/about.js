import Header from "../../components/header/header"
import Photos from "../../components/photos/photos"
import Footer from "../../components/footer/footer"
import ImageSlider from "../../components/imagesSlider/imagesSlider"
import "./about.css"
import about1 from "../../assets/imgs/AboutMe.webp"
import about2 from "../../assets/imgs/Digital/Digital11.webp"
import about3 from "../../assets/imgs/Digital/Digital12.webp"

const About = () =>{
    let aboutImages = [about1, about2, about3]

    return(
        <div className="about-container">
            <Header/>
            <div className="home__about-me-description" >
                <h2>About Savan Efam</h2>
                <p>
                Savan Efam, a name reversed, a journey in motion. Born and raised in Caracas, Venezuela, I sought to expand my horizons and ventured to Houston to immerse myself in the English language. Though brief, those four months paved the way for a greater destiny. </p>
                <p>Undeterred by life's challenges, I pursued my education at the Catholic University Andres Bello, yet fate had other plans. The call to leave my beloved country rang strong, and I found myself in Florida, chasing after my lost dreams.</p>
                <p>As fate would have it, a spark was lit during my time at Broward College - the passion for capturing moments through the lens of a camera. My artistic eye and keen attention to detail have led me to pursue photography professionally, as I continue to blaze a trail in the world of communications.</p>
                <p>Now, while attending Florida International University, my vision for the future remains bright. With each day, I hone my skills and deepens my knowledge of the communications world, forging ahead towards my aspirations and fulfilling my dreams.
                </p>
            </div>
            <Photos class="AboutMe" title="Savan Efam"/>
            <ImageSlider images={aboutImages} isActive={true}/>
            <Footer />
            
        </div>
    )
}

export default About