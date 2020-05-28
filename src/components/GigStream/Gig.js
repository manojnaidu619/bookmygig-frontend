import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'


const Gig = (props) => {
    const [gigData, setGigData] = useState()
    let streamUrl = null

    const gigId = parseInt(props.match.params.id)
    const getUrl = `http://localhost:5000/get-gig/${gigId}`

    useEffect(() => {
        window["loadVideo"](gigId)
        axios.get(getUrl).then(response => setGigData(response.data))
    }, [])

    if (gigData) {
        streamUrl = `http://localhost:8000/live/${gigId}.flv`
        console.log(streamUrl)
    }

    return (
        <div>
            <h1>Hello from Gig</h1>
            {JSON.stringify(gigData)}
        </div>
    )
}

export default Gig