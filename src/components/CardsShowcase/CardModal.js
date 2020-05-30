import React, {useState} from 'react'

const CardModal = (props) => {

    const [userName, setUserName] = useState(null)

    const setName = () => {
        localStorage.setItem('userName', userName)
        if (localStorage.getItem("userName") === 'null') {
            localStorage.setItem('userName', 'User')
        }
    }

    return (
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
                                href={props.link}
                                className="btn btn-success"
                                style={{ display: 'block' }}
                                onClick={setName}>Save and Pay ${props.price}
                            </a>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default CardModal