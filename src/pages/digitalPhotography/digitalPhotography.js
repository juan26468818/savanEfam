import "./digitalPhotography.css"
import Photos from "../../components/photos/photos"
import Header from "../../components/header/header"

const DigitalPhotography = () =>{
    return(
        <div>
            <Header /><div className="home__about-me-description" >
            <h2>Digital Photography</h2>
            <p>To be completely honest, I prefer film photography. However, the spectacular perks of digital are undeniable. That’s why I shoot mostly digital (even though I intend to use more film in the future). The experimenting range and quickness of results that digital photography provides are what make it so essential in the life of a photographer. </p>
            </div>
            <div className="film-container">
                <Photos class="Digital1"/>
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
                <Photos class="Digital12"/>
            </div>
        </div>
    )
}


export default DigitalPhotography