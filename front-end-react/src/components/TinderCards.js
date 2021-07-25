import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import axios from "../client/Axios"
import "./TinderCards.css"

const TinderCards = () => {
    const [people, setpeople] = useState([]);

    useEffect(() => {
        console.log("Fetching..");
        async function fetchCards() {
            const req = await axios.get('/card');
            setpeople(req.data);
            console.log("Data Retrieved");
            console.log(req.data[0]);
        }
        fetchCards();
    }, [])

    const swipe = (direction, name) => {
        console.log("removing: " + name)
        // setLastDirection
    }

    const outOfFrame = (name) => {
        console.log("left the screen: " + name)
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swipe(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.imgURL})` }}
                                className="card">
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
