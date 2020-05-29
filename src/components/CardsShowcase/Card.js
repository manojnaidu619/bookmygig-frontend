import React, {useState} from 'react'

const dateFormatter = (date) => {
    const newDate = new Date(date.toString())
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate)
    return `${month}-${day}`
}

const Card = (props) => {
    const link = `/gig/${props.user_id}`

    const [userName, setUserName] = useState()

    return (
        <div className="card" style={styles.cardStyle} onClick={() => console.log(props.user_id)}>
            <div className="card-body">
                <h5 className="card-title">{props.gigTitle}</h5>
                <small>{props.category}</small>
                <p className="card-text">Host : {props.name}</p>
                <h4>$ {props.price}</h4>
                <h6>{dateFormatter(props.date)} at {props.time}</h6>
                <br/>
                <button type="button" style={{width: '100%'}} class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                    Buy Access
                </button>
            </div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Pay for {props.gigTitle}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" required placeholder="Enter your name" onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <a
                                href={link}
                                className="btn btn-success"
                                style={{ display: 'block' }}
                                onClick={() => localStorage.setItem('userName', userName)}>Save and Pay ${props.price}
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