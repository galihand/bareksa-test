import React from 'react'

const Status = props => {
  let backgroundColor
  switch (props.variant) {
    case 'completed':
      backgroundColor = '#789764'
      break;
    case 'canceled':
      backgroundColor = '#D66D4B'
      break
    case 'pending':
      backgroundColor = '#E59849'
      break
    default:
      backgroundColor = '#ffffff'
      break;
  }

  return (
    <div className='status' style={{ backgroundColor }}>
      {props.title}
    </div>
  )
}

export default Status