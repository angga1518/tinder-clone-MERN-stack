import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"

const TinderCards = () => {
    const [people, setpeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://asset.kompas.com/crops/Nzd8Wg_VyGH8dM9CI4J1fqIupco=/0x0:3159x2106/750x500/data/photo/2021/05/02/608eb6854cbba.jpg"
        }
    ])

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
                                style={{ backgroundImage: `url(${person.url})` }}
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
