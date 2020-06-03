import React, {useState, useEffect} from 'react'

const CardModal = () => { 

    const [userName, setUserName] = useState(null)

    const setName = () => {
        localStorage.setItem('userName', userName)
        if (localStorage.getItem("userName") === 'null') {
            localStorage.setItem('userName', 'User')
        }
        document.querySelector('#modal-after-text').textContent = 'Username saved successfully!'
        setTimeout(() => {
            document.querySelector('#close-sign').click()
        }, 900);
    }

    useEffect(() => {
        let btn = document.querySelector('#get-user-name-btn')
        localStorage.setItem('userName', 'User')
        setTimeout(() => {
            if (localStorage.getItem("userName") === 'User') btn.click()
        }, 3000);
    }, [])

    return (
        <div>
            <button type="button" style={{display: 'none'}} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="get-user-name-btn"></button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Enter your firstname to continue</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" id="close-sign">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => setUserName(e.target.value)} required />
                            <br />
                            <h5 id="modal-after-text" style={{color: 'green', textAlign: 'center'}}></h5>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={setName}>Save changes</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardModal