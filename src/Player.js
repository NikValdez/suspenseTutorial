import React from 'react'
import { fetchData } from './Api'

const resource = fetchData()

export default function Player() {
  const player = resource.player.read()
  return (
    <div>
      <h3>
        Name: {player.first_name} {player.last_name}
      </h3>
      <p>
        Height: {player.height_feet}' {player.height_inches}
      </p>
      <p>Weight: {player.weight_pounds}</p>
    </div>
  )
}
