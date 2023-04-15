import { useState } from 'react';
import "./photoModal.css";

const PhotoModal = (props) =>{

    const [currentIndex, setCurrentIndex] = useState(props.imageID);
    const [modal, setModal] = useState(props.cName);
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      };
    
      const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
      };
    const handleClick = () =>{
      // modal === "" ? setModal("d-none") : setModal("")
      setCurrentIndex(props.imageID)
    }
    
      return (
        <div className={modal + " image-slider-modal "}>
          <div className="image-slider-modal-overlay" onClick={handleClick} />
          <div className="image-slider-modal-content">
            <button className="image-slider-modal-prev" onClick={prevImage}>
              &#8249;
            </button>
            <img src={props.images[currentIndex]} alt={`Image ${currentIndex}`}  className={" photo__modal"}/>
            <button className="image-slider-modal-next" onClick={nextImage}>
              &#8250;
            </button>
          </div>
        </div>
      );
}



export default PhotoModal;
