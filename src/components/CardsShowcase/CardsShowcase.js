import React, { useEffect, useState } from 'react'
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
                time={gig.time}
                category={gig.category}
                price={gig.price}
                user_id={gig.user_id}
                key={gig.user_id}
            />
        })   
    }

    return (
        <div className="container cards-showcase" style={styles.cardsShowcase}>
            {cards}
        </div>
    )
}

const styles = {
    cardsShowcase: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '40px'
    }
}

export default CardsShowcase