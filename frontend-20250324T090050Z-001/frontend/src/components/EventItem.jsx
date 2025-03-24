//EventItem Component
import React from 'react'

function EventItem({name, date, location}) {
  return (
    <div>
        <p>{name}</p>
        <p>{date}</p>
        <p>{location}</p>

    </div>
  )
}
export default EventItem
