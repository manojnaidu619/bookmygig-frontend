import React from 'react'

const dateFormatter = (date) => {
    const newDate = new Date('2010-08-05')
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate)
    return `${month}-${day}`
}

const Card = (props) => {
    const link = `/gig/${props.user_id}`
    return (
        <div className="card" style={styles.cardStyle} onClick={() => console.log(props.user_id)}>
            <div className="card-body">
                <h5 className="card-title">{props.gigTitle}</h5>
                <small>{props.category}</small>
                <p className="card-text">Host : {props.name}</p>
                <h4>$ {props.price}</h4>
                <h6>{dateFormatter(props.date)} at {props.time}</h6>
                <br/>
                <a href={link} className="btn btn-success" style={{display: 'block'}}>Buy Tickets</a>
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