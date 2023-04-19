import "./photos.css"




const Photos = (props) =>{
    return(
        <div className="photo__container "> 
            {props.images.map(image =>{
                return(
                    <div className="photo_specific_container">
                    <img src={image} alt={"image" + image} class="image__photo_component"></img>
                    <div className={"photo"}>{props.title || ""}</div>
                </div>
                )
            })}
        </div>
    )
}



export default Photos;