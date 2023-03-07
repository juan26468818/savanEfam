import "./filmPhotography.css"
import Photos from "../../components/photos/photos";
import Header from "../../components/header/header";

const FilmPhotography = () =>{
    return(
        <div >
            <Header />
            <div className="film-container">
                <Photos class="Film1"/>
                <hr />
                
                <Photos class="Film3"/>
                <hr />

                <Photos class="Film5"/>
                <hr />

                <Photos class="Film8"/>
                {/* <hr />

                <Photos class="Film5"/>
                <hr />

                <Photos class="Film6"/>
                <hr />

                <Photos class="Film8"/>
                <hr />
                <Photos class="Film7"/> */}

            </div>
            

        </div>
    )
}

export default FilmPhotography;