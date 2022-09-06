import React, {useState, useEffect} from 'react'

export default function FetchNombre({nombre}) {
  return (
    <div>
        {JSON.stringify(nombre)}
        <br/>
    </div>
  )
}
