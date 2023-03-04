import "./photos.css"




const Photos = (props) =>{
    return(
        <div className="photo__container">
            <img src={props.src} className="photo" alt="Foto de Andres"></img>
            <h2 className="photo__title">{props.title}</h2>
            <p className="photo__description">{props.description}</p>
        </div>
    )
}



export default Photos;