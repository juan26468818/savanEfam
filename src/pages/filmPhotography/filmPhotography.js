import "./filmPhotography.css"
import Photos from "../../components/photos/photos";
import Header from "../../components/header/header";

const FilmPhotography = () =>{
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
            <div className="film-container" >
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

            </div>
            

        </div>
    )
}

export default FilmPhotography;