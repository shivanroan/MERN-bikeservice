import React from 'react';
import {Card} from 'react-bootstrap'


//I used bootstrap to complete this page 
const Cardmagic=()=>{
    return(
        <Card>
        <Card.Header>Our Care is not only for your bike</Card.Header>
        <Card.Body>
        <blockquote className="blockquote mb-0">
         <p>
        {' '}
        We collect your address so that we can come and pick up your vehicle, 
        after the service is completed we can come and drop it... As we all go through
        the pandemic togther .. let us help you with the pick and drop service for
        free of cost{' '}
      </p>
      <footer className="blockquote-footer">
        Zhivan <cite title="Source Title"></cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    )
}

export default Cardmagic

