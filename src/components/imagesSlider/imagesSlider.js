import {useState } from "react";
import "./imagesSlider.css";
import PhotoModal from "../photoModal/photoModal";

const ImageSlider = (props) => {
  const [modal, setModal] = useState("d-none");
  const [imageID, setImageID] = useState(0);

  const handleClick = (e) => {
    modal === "d-none" ? setModal("") : setModal("d-none");
    setImageID(parseInt(e.target.id));
  };
  const handleClick2 = () => {
    if(modal === "") setModal("d-none")
  };

  return (
    <div className="all-image-container">
        
      <div className="imagesSlider__container">
        {props.images.map((image, index) => {
          return (<img
              id={index}
              src={image}
              alt={props.alt}
              className={`slider__all-images ${props.class}`}
              onClick={handleClick}
            />
          );
        })}
        {props.isActive &&
            <p className={modal +" closeModal"}  onClick={handleClick2}>X</p>}

      </div>
      {modal !== "d-none" && props.isActive && (
        <PhotoModal images={props.images} cName={modal} imageID={imageID} />
      )}
    </div>
  );
};

export default ImageSlider;
