import "./photos.css"




const Photos = (props) =>{
    return(
        <div className="photo__container "> 
            <div className={props.class + " photo"}>{props.title || ""}</div>
        </div>
    )
}



export default Photos;