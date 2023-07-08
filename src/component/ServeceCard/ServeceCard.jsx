import './ServeceCard.css'



const ServeceCard = (props) => {

    return(
        <div className={props.gclassName }>
            <p className='service-header'>{props.header}</p>
            <img src={props.sourc} alt={props.alternative} className='servece-img' />
            <button className='servece-card-btn'>اطلب الان</button>
        </div>
    )


};


export default ServeceCard;