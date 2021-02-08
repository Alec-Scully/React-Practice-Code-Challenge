import React from 'react'
// import Sushi from './Sushi'
// import SushiContainer from './SushiContainer'

const MoreButton = (props) => {
    return <button onClick={props.sliceSushi}> {/*sliceSushi function*/}
            More sushi!
          </button>
}

export default MoreButton