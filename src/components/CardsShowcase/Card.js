import React from 'react'

const Card = (props) => {
    const link = `/gig/${props.user_id}`
    return (
        <div className="card" style={styles.cardStyle} onClick={() => console.log(props.user_id)}>
            <div className="card-body">
                <h5 className="card-title">{props.gigTitle}</h5>
                <small>{props.category}</small>
                <p className="card-text">Host : {props.name}</p>
                <h4>$ {props.price}</h4>
                <p>On: {props.date}, {props.time}</p>
                <a href={link} className="btn btn-success">View</a>
            </div>
        </div>
    )
}

const styles = {
    cardStyle: {
        width: '18rem',
        margin: '30px 0px'
    }
}

export default Card