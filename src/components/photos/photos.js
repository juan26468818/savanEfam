import "./photos.css"




const Photos = (props) =>{
    return(
        <div className="photo__container "> 
        <div className={props.class + " photo"}></div>
            <div className="photo__container "> 
                <h2 className="photo__title">{props.title}</h2>
                <p className="photo__description">{props.description}</p>
            </div>
        </div>
    )
}



export default Photos;