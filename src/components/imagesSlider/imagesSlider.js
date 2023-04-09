
import "./imagesSlider.css"

const ImageSlider = (props) => {
    return(
        <div className="imagesSlider__container">
            {props.images.map(image =>{
                return(
                    <img src={image} alt={props.alt} className="slider__all-images" />
                )
            })}
        </div>
    )
};

export default ImageSlider;
