import Header from "../../components/header/header"
import Photos from "../../components/photos/photos"
import Footer from "../../components/footer/footer"
import "./about.css"

const About = () =>{
    return(
        <div className="about-container">
            <Header/>
            <div className="home__about-me-description" >
                <h2>About Me</h2>
                <p>
                    My real name is Mafe Navas and I was born in Caracas, Venezuela. Although I have lived in Lecherias (Venezuela), Texas (US), and Florida (US). My mother language is Spanish and I’m fluent in English, however, I’ve always wanted to learn more. I tried Japanese (when I had time) and somehow, I was nailing it. I stopped because time gets short when you get older. I hope I can resume it someday. 
                </p>
            </div>
            <Photos class="AboutMe" title="Savan Efam"/>
            <Footer />
            
        </div>
    )
}

export default About