import React from 'react'
import races from './Data'
import {useParams} from 'react-router-dom'
import {Image} from 'react-bootstrap'

const Child = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    return (
      <ul className="no-bullets race-picture-list">
      <h2 className="race-title">{races[id].Name.toUpperCase()}</h2>
      {races[id].Images.map((picture)=>{
          return <Image className="race-picture" src={require('../pictures/'+picture)} rounded />
      })}
      </ul>
    );
  }

export default function Race () {
    return(
        <div className="grid-full">
            <Child />
        </div>
    )
}
