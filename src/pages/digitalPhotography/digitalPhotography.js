import "./digitalPhotography.css"
import Photos from "../../components/photos/photos"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import PhotoModal from "../../components/photoModal/photoModal"

import digital1 from "../../assets/imgs/Digital/Digital1.webp"
import digital2 from "../../assets/imgs/Digital/Digital2.webp"
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
import digital17 from "../../assets/imgs/Digital/Digital17.webp"
import digital18 from "../../assets/imgs/Digital/Digital18.webp"
import digital19 from "../../assets/imgs/Digital/Digital19.webp"
import digital20 from "../../assets/imgs/Digital/Digital20.webp"
import ImageSlider from "../../components/imagesSlider/imagesSlider"




const DigitalPhotography = () =>{
    const digitalImages = [digital1, digital2, digital3, digital4, digital5, 
        digital6,digital7,digital8,digital9,digital10,digital11,digital12, digital13, digital14, digital15, digital16,
        digital17, digital18, digital19, digital20
    
    ]
    return(
        <div className="all__photography-container">
            <Header /><div className="home__about-me-description" >
                <h2>Digital Photography</h2>
                <p>To be completely honest, I prefer film photography. However, the spectacular perks of digital are undeniable. That’s why I shoot mostly digital (even though I intend to use more film in the future). The experimenting range and quickness of results that digital photography provides are what make it so essential in the life of a photographer. </p>
            </div>
            <div className="film-container">
            <hr className="slider-separation"/>
                
                

                 {/* <Photos class="Digital1"/>
                <hr />
                
                <Photos class="Digital2"/>
                <hr />

                <Photos class="Digital3"/>
                <hr />

                <Photos class="Digital4"/>
                <hr />

                <Photos class="Digital5"/>
                <hr />

                <Photos class="Digital6"/>
                <hr />

                <Photos class="Digital7"/>
                <hr />

                <Photos class="Digital8"/>
                <hr />
                <Photos class="Digital9"/>
                <hr />
                <Photos class="Digital10"/>
                <hr />
                <Photos class="Digital11"/>
                <hr />
                <Photos class="Digital12"/>  */}
            </div>
            <ImageSlider images={digitalImages} isActive={true}/>
            {/* <PhotoModal images={digitalImages}/> */}
            <Footer />
        </div>
    )
}


export default DigitalPhotography