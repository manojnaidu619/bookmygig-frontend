import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gig = (props) => {
    const [gigData, setGigData] = useState()
    let data = null

    const gigId = parseInt(props.match.params.id)
    const getUrl = `http://localhost:5000/get-gig/${gigId}`

    const vidText = () => {
        var streamDiv = document.querySelector("#videoElement")
        var vidH = streamDiv.clientHeight
        var vidW = streamDiv.clientWidth
        if(vidH === 150 || vidW === 300){
          document.querySelector('.live-stream-div')    
        }
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            window["loadVideo"](gigId)
            vidText()
            axios.get(getUrl).then(response => setGigData(response.data))
        })
    }, [])

    if (gigData) {
        data =
            <div>
                <h1>{gigData.gig_title}</h1>
                <h6>By <strong>{gigData.name}</strong></h6>
            </div>
    }

    return (
        <div className="container" style={{marginTop: 25}}>
            {data}
        </div>
    )
}

export default Gig

// 300x150

// 1152x720