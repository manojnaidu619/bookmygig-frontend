import React, {useState} from 'react'

const dateFormatter = (date) => {
    const newDate = new Date(date.toString())
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate)
    return `${month} ${day}`
}

const Card = (props) => {
    const link = `/gig/${props.user_id}`

    const [userName, setUserName] = useState(null)

    const setName = () => {
        localStorage.setItem('userName', userName)
        if (localStorage.getItem("userName") === 'null') {
            localStorage.setItem('userName', 'User')
        }
    }

    return (
        <div className="card" style={styles.cardStyle} onClick={() => console.log(props.user_id)}>
            <div className="card-body">
                <h2 className="card-title">{props.gigTitle}</h2>
                <p>category - {props.category}</p>
                <p className="card-text">Host : {props.name}</p>
                <p>{props.gig_description}</p>
                <h4>$ {props.price}</h4>
                <h6>{dateFormatter(props.date)} ({props.timeFrom} - {props.timeTo} IST)</h6>
                <br/>
                <button type="button" style={{width: '100%'}} className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                    Buy Access
                </button>
            </div>
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Pay for {props.gigTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" required placeholder="Enter your name" onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <a
                                href={link}
                                className="btn btn-success"
                                style={{ display: 'block' }}
                                onClick={setName}>Save and Pay ${props.price}
                            </a>
                    </div>
                    </div>
                </div>
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