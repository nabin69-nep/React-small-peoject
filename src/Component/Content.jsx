const Content=(props)=>{
    return(
        <div className="flex">
            <div className="img">
                <img src={`./Images/${props.image}`} alt="" className="image" />
            </div>
            <div className="infos">
            <p className="info">
            <i class="fa-solid fa-location-dot"></i><span>{props.country}</span>
            <a href="#">View on Google Maps</a>
            </p>
            <h1>{props.name}</h1>
            <p className="date">{`${props.startDate} ${props.startMonth}, 2021 - ${props.endDate} ${props.endMonth},2021`}</p>
            <p className="para">{props.info}</p>
            </div>
        </div>
    )
}
export default Content;