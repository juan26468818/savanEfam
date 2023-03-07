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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus tortor ac nibh mollis placerat. 
                        Sed ullamcorper ut ex non vehicula. Etiam nec lectus dolor. Suspendisse facilisis non odio id rhoncus. 
                        Sed elementum convallis felis, sed finibus elit viverra at. </p>
                </div>
                    <hr />
                <Photos class="DigitalHome" />
                <div className="home__about-me-description">
                    <h2>Digital Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus tortor ac nibh mollis placerat. 
                    Sed ullamcorper ut ex non vehicula. Etiam nec lectus dolor. Suspendisse facilisis non odio id rhoncus. 
                    Sed elementum convallis felis, sed finibus elit viverra at. </p>
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