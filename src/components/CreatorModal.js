import React, {useState, useEffect} from 'react'

const CreatorModal = (props) => {

    const [formData, setFormData] = useState({})
    const [form, setForm] = useState(true)

    useEffect(() => {
        const todaysDate = new Date().toISOString().split("T")[0]
        const dateField = document.querySelector("#date")
        if (dateField) dateField.min = todaysDate 
    }, [])

    const ModalHandler = (e) => {
        e.preventDefault()
        const userID = Date.now()
        const newFormData = {
            ...formData,
            user_id: userID
        }
        setFormData(newFormData)
        props.submitHandler(newFormData)
        setForm(false)
    }

    let data = null

    if (form) {
        data = 
        <form onSubmit={ModalHandler} autocomplete="off">
        <div className="form-group">
            <label htmlFor="name">Creator Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required/>
        </div>
        <div className="form-group">
            <label htmlFor="title">Gig Title</label>
            <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Title"
                onChange={(e) => setFormData({ ...formData, gig_title: e.target.value })}
                required/>
        </div>
        <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
                className="form-control"
                id="category"
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
                <option>Comedy</option>
                <option>Play</option>
                <option>Dance</option>
                <option>Fitness</option>
                <option>Music</option>
                <option>Workshops</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="price">Price(in USD)</label>
            <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter Price"
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required/>
        </div>
        <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
                className="form-control"
                type="date"
                id="date"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required/>
        </div>
        <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
                className="form-control"
                type="time"
                id="time"
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required/>
                
        </div>
            <button type="submit" className="btn btn-success">Pay $99 and Submit</button>
            &nbsp; &nbsp; &nbsp;
        </form>
    } else if (!form && props.reqStatus) {
        data = 
        <div>
            <h2>Thanks for registering as a Creator!, here are your credentials... </h2>
            <h3>OBS service : <strong>Custom</strong></h3>
            <h3>OBS server : <strong>rtmp://localhost/live</strong></h3>
            <h3>OBS streaming id : <strong>{JSON.stringify(formData["user_id"])}</strong></h3>
        </div>
    }
    else {
        data =
            <div>
                <h1>Loading...</h1>
            </div>
    }

    return (
        <div className="creator-modal" style={styles}>
            {data}
            <br />
            <button
                className="btn btn-secondary"
                onClick={() => props.modal(false)}>
                Cancel
            </button>
        </div>
    )
}

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    backgroundColor: '#fff',
    width: '80%',
    height: '600px'
}

export default CreatorModal