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

import digital22 from "../../assets/imgs/Digital/Digital22.webp"
import digital23 from "../../assets/imgs/Digital/Digital23.webp"
import digital24 from "../../assets/imgs/Digital/Digital24.webp"
import digital25 from "../../assets/imgs/Digital/Digital25.webp"
import digital26 from "../../assets/imgs/Digital/Digital26.webp"
import digital27 from "../../assets/imgs/Digital/Digital27.webp"

import ImageSlider from "../../components/imagesSlider/imagesSlider"




const DigitalPhotography = () =>{
    const digitalImages = [digital1, digital2, digital3, digital4, digital5, 
        digital6,digital7,digital8,digital9,digital10,digital11,digital12, digital13, digital14, digital15, digital16,
        digital17, digital18, digital19, digital20, digital22, digital23, digital24, digital25, digital26, digital27
    
    ]
    return(
        <div className="all__photography-container">
            <Header /><div className="home__about-me-description" >
                <h2>Digital Photography</h2>
                <p>After my initial foray into the world of film photography, I decided to explore the colorful possibilities of digital imaging. I began with a Canon T7, which became my trusted companion for my second photography class. The immediacy of digital photography fascinated me, and it allowed me to enhance the skills I learned during my film experience.</p>
                <p>Working with color added a new layer of complexity to my craft, but it also expanded my creative vision. I found myself noticing how color could alter perspective, and how subtle shifts in hue or saturation could evoke a range of emotions.</p>
                <p>Though I still cherish my film camera, I find myself reaching for my digital one more often these days. Its quick results and affordability make it a practical choice, especially during uninspired moments. With the click of a button, I can instantly see my vision take shape, and that, too, is a thing of beauty.</p>
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