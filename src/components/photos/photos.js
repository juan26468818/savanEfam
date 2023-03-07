import "./photos.css"




const Photos = (props) =>{
    return(
        <div className="photo__container "> 
            <div className={props.class + " photo"}></div>
        </div>
    )
}



export default Photos;