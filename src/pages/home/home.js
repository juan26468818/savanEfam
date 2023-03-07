import "./home.css";
import Header from "../../components/header/header";
import Photos from "../../components/photos/photos";


const Home = ()=>{
    return(
        <div>
            <Header />
            <div className="home__body">
                <Photos class="FilmHome" />
                <div className="home__about-me-description">
                    <h2>Film Photography</h2>
                    <p>Even though since I was a little kid I’ve had a fascination for photography, and always possessed cameras, I consider my life as a photographer started when I bought my first film camera (Minolta X700) I had to buy it because I enrolled in my very first photography class. 
                    <br /> <br /> 
                    I fell in love immediately. Not only taking the photograph but the whole process that this analogic process entails. Revealing your film and going to the darkroom to print the photograph makes it intimate in a way. 
                    <br /> <br /> 
                    I highly recommend that if you are going to do film photography, make sure to be present in every part of the process, learn how to develop, and how to print in the photo lab. It makes the process almost intimate.</p>
                </div>
                    <hr />
                <Photos class="DigitalHome" />
                <div className="home__about-me-description">
                    <h2>Digital Photography</h2>
                    <p> </p>
                </div>
                <hr />
                <section className="home__about-me">
                    <Photos class="AboutMe" />
                    <div className="home__about-me-description">
                        <h2>Who am I?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus tortor ac nibh mollis placerat. 
                            Sed ullamcorper ut ex non vehicula. Etiam nec lectus dolor. Suspendisse facilisis non odio id rhoncus. 
                            Sed elementum convallis felis, sed finibus elit viverra at. Curabitur laoreet, ligula ut malesuada imperdiet, 
                            neque orci mattis odio, vitae faucibus lectus neque non lectus. Nullam lacinia pretium pellentesque.</p>
                    </div>
                </section>
            </div>
            
        </div>
    )
}



export default Home;