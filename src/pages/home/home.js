import "./home.css";
import Header from "../../components/header/header";
import Photos from "../../components/photos/photos";
import Footer from "../../components/footer/footer";
import GAuth from "../../GAuth/gAuth";


const Home = ()=>{
    return(
        <div>
            <Header />
            <div className="home__body">
                <Photos class="Andres_2" title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat metus sed est mollis, ut ultricies leo condimentum. Mauris sollicitudin massa a ligula tristique sollicitudin sit amet et enim. Nunc viverra, diam maximus rutrum varius, risus nulla efficitur neque, ac malesuada lorem ipsum eget urna. Duis lectus libero, tempus non tempor at, placerat a neque. Donec in fermentum urna. Quisque purus erat, pharetra consectetur elementum ut, convallis eu nulla. Nam laoreet aliquet feugiat. Sed mollis viverra massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut faucibus congue tempor."/>
                <Photos class="Window_2" title="Lorem Ipsun" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat metus sed est mollis, ut ultricies leo condimentum. Mauris sollicitudin massa a ligula tristique sollicitudin sit amet et enim. Nunc viverra, diam maximus rutrum varius, risus nulla efficitur neque, ac malesuada lorem ipsum eget urna. Duis lectus libero, tempus non tempor at, placerat a neque. Donec in fermentum urna. Quisque purus erat, pharetra consectetur elementum ut, convallis eu nulla. Nam laoreet aliquet feugiat. Sed mollis viverra massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut faucibus congue tempor."/>
                <Photos class="Food" title="Lorem Ipsun" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat metus sed est mollis, ut ultricies leo condimentum. Mauris sollicitudin massa a ligula tristique sollicitudin sit amet et enim. Nunc viverra, diam maximus rutrum varius, risus nulla efficitur neque, ac malesuada lorem ipsum eget urna. Duis lectus libero, tempus non tempor at, placerat a neque. Donec in fermentum urna. Quisque purus erat, pharetra consectetur elementum ut, convallis eu nulla. Nam laoreet aliquet feugiat. Sed mollis viverra massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut faucibus congue tempor."/>
            </div>
            <Footer />
            
        </div>
    )
}



export default Home;