import React, { useState } from 'react'

const dateFormatter = (date) => {
    const newDate = new Date(date.toString())
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate)
    return `${month} ${day}`
}

const Card = (props) => {

    const [uid, setUid] = useState(null)

    console.log(props)
    
    return (
        <div className="card" style={styles.cardStyle}>
            <div className="card-body">
                <h2 className="card-title">{props.gigTitle}</h2>
                <p>Category : {props.category || 'Comedy'}</p>
                <p className="card-text">Host : {props.name}</p>
                <p>{props.gig_description}</p>
                <h4>$ {props.price}</h4>
                <h6>{dateFormatter(props.date)} ({props.timeFrom} - {props.timeTo} IST)</h6>
                <br/>
                <a  type="button"
                    style={{ width: '100%' }}
                    className="btn btn-success"
                    href={`/gig/${props.user_id}`}
                    >
                    Buy Access
                </a>
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