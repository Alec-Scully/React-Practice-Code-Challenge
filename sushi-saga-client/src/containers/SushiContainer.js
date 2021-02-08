import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi' //import name is like an arg to define later

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(
          (sushi)=> <Sushi eaten={props.eaten} eatSushi={props.eatSushi} sushiCard={sushi}/> //sushi= is the name of the prop
          //for every sushi, pass in the eaten array, eatSushi function, and the sushi itself
        )}
        <MoreButton sliceSushi={props.sliceSushi} />  
      </div>
    </Fragment>
  )
}

export default SushiContainer