import React, { useState } from 'react'
import CardModal from './CardModal'

const dateFormatter = (date) => {
    const newDate = new Date(date.toString())
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate)
    return `${month} ${day}`
}

const Card = (props) => {

    const [uid, setUid] = useState(null)

    let streamLink = null

    console.log(uid)

    if(uid) streamLink = `/gig/${uid}`

    return (
        <div className="card" style={styles.cardStyle}>
            <div className="card-body">
                <h2 className="card-title">{props.gigTitle}</h2>
                <p>category - {props.category}</p>
                <p className="card-text">Host : {props.name}</p>
                <p>{props.gig_description}</p>
                <h4>$ {props.price}</h4>
                <h6>{dateFormatter(props.date)} ({props.timeFrom} - {props.timeTo} IST)</h6>
                <br/>
                <button type="button"
                    style={{ width: '100%' }}
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setUid(props.user_id)}
                    data-target="#exampleModalCenter">
                    Buy Access
                </button>
            </div>
            <CardModal gigTitle={props.gigTitle} price={props.price} link={`/gig/${uid}`}/>
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