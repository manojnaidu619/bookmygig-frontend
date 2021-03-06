import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import ChatBox from './ChatBox'


const Gig = (props) => {
    const [gigData, setGigData] = useState()
    const gigId = parseInt(props.match.params.id)
    const getUrl = `http://localhost:5000/get-gig/${gigId}`
    let data = null

    console.log(gigData)

    const vidText = () => {
        var streamDiv = document.querySelector("#videoElement")
        var vidH = streamDiv.clientHeight
        var vidW = streamDiv.clientWidth
        if(vidH === 150 || vidW === 300){
          document.querySelector('.live-stream-div')    
        }
    }

    if (gigData) {
        document.querySelector('meta[name="monetization"]').setAttribute("content", gigData.paymentPointer || '$coil.xrptipbot.com/this_goes_to_creator');
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            window["loadVideo"](gigId)
            vidText()
            axios.get(getUrl).then(response => {
                setGigData(response.data)
            })
        })
    }, [])

    if (gigData) {
        data =
            <Fragment>
                <div style={{color: "#fff"}}>
                    <div className="alert alert-success" role="alert" style={{textAlign: 'center'}}>
                        Welcome <strong>{localStorage.getItem("userName")}</strong>, checking for monetization...
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <br/>
                    <h1>{gigData.gig_title}</h1>
                    <h6>By <strong>{gigData.name}</strong></h6>
            </div>
                <ChatBox room={gigId} />
            </Fragment>
        
    }

    return (
        <div className="container" style={{marginTop: 25}}>
            {data}
        </div>
    )
}


export default Gig