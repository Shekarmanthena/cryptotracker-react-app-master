export default function Coins({name,image,current,high,low,change}){
    return(
        <div className="coin-container">
        <div className="title">
            <img src={image} alt="coin" />
            <h4>{name}</h4>
        </div>
        <div className="details">
            <div>
                <h4>Current Price</h4>
                <h5>Rs:{current}</h5>
            </div>
            <div>
            <h4>High in 24h</h4>
                <h5>Rs:{high}</h5>
            </div>
            <div>
            <h4>Low in 24h</h4>
                <h5>Rs:{low}</h5>
            </div>
            <div>
            <h4>Change</h4>
            {change>0 ? <h5 className="green">{change}</h5> : <h5 className="red">{change}</h5> }    
            </div>

        </div>

    </div>
    )
}