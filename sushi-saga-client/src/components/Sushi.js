import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushiCard)}>
           {/* when the card is clicked, call the eatSushi function and pass in the given sushi*/}
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten.includes(props.sushiCard) ? null : <img src={props.sushiCard.img_url} width="100%" />
          /* if the given sushi is within the eaten array, don't do anything. If it isn't, show the sushi image */
        }
      </div>
      <h4 className="sushi-details"> 
      {/* props.namedComponent from Sushi.js - console.log(props.sushiCard)*/}
  
        {props.sushiCard.name} - ${props.sushiCard.price}
      </h4>
    </div>
  )
}

export default Sushi