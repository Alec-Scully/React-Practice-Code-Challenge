import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.budget /* Give me how much money I have left */ } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eaten)}
            {/* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */} 
        </div>
      </div>
    </Fragment>
  )
}

export default Table