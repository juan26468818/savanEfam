import "./digitalPhotography.css"
import Photos from "../../components/photos/photos"
import Header from "../../components/header/header"

const DigitalPhotography = () =>{
    return(
        <div>
            <Header />
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