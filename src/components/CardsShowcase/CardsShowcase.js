import React, { useEffect, useState} from 'react'
import Card from './Card'
import axios from 'axios'

const CardsShowcase = () => {

    const [gigs, setGigs] = useState()
    let cards = null

    useEffect(() => {
        axios.get("http://localhost:5000/").then(response => setGigs(response.data)) 
    }, [])
      

    if (gigs){
        cards = gigs.map((gig) => {
            return <Card
                gigTitle={gig.gig_title}
                name={gig.name}
                date={gig.date}
                timeFrom={gig.timeFrom}
                timeTo={gig.timeTo}
                category={gig.category}
                price={gig.price}
                user_id={gig.user_id}
                gig_description={gig.gig_description}
                key={gig.user_id}
            />
        })   
    }

    return (
        <div className="container cards-showcase" style={styles.cardsShowcase}>
        <h2 style={{ color: "#fff", fontStyle: "italic" }}>Platform for creators to present their <strike>content</strike> talent online</h2>
            {cards}
        </div>
    )
}

const styles = {
    cardsShowcase: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '40px'
    }
}

export default CardsShowcase