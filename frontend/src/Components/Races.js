import React from 'react'
import races from './Data'
import {Card, Button} from 'react-bootstrap'
import {Switch, Route} from 'react-router-dom'

const titlesAndShortDesc = races.map((race) =>
  <li className="Race" key={race.ID.toString()}>
      <Card bg="secondary" text="white" style={{ width: '100%'}}>
      <Card.Body>
        <Card.Title>{race.Name}</Card.Title>
        <Card.Text>
          {race.ShortDescription}
        </Card.Text>
        <Button variant="info" href={'Race/'+ race.ID}>More Info</Button>
      </Card.Body>
    </Card>
  </li>
);

export default function Home(){
    return (
    <div className="grid-center">
        <h3 className="home-title race-title">RACES</h3>
        <ul className="no-bullets">{titlesAndShortDesc}</ul>
        <Switch>
          <Route path="/:id" />
        </Switch>
    </div>
    );
}


