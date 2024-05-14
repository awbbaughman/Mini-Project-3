import React, { useState, useEffect, useContext } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import HeroCards from './heroCardsOfficial';


const Abilities = () => {
  const [cooldown, setCooldown] = useState(0);
  const [cooldownIntervalId, setCooldownIntervalId] = useState(false);
  const [abilities, setAbilities] = useState([]);

  return (
    <div id="hero-abilities-container">
      <Row xs={1} sm={1} md={2} lg={3} xl={5} className="g-4">
          {abilities.map((ability) => (
            <Col key={ability.name}>
              <Card
              className="text-white position-relative border border-warning"
              style={{ width: '160px', cursor: 'pointer' }}
            >
              <Card.Img
                className="hover-zoom bg-light"
                src={ability.icon}
                alt={ability.description}
                style={{ height: '120px', objectFit: 'cover' }}
              />
              <Card.Body className="border border-warning bg-light bg-gradient text-dark">
        <Card.Title className="text-uppercase fw-bold fs-10 mb-0 text-dark" style={{ fontStyle: 'italic' }}>
                    {ability.name}</Card.Title>
                    <Card.Text className="fw-bold fs-6">
                    Description: {ability.description}
                  </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          ))}
      </Row>

    </div>
  );
}

export default Abilities;

/* 

The ultimate purpose of this component is to pull up a specific hero's abilities once clicking on their portrait
in the HeroCards list. I attempted to create new cards based on the unique hero abilities as detailed in the API
as fetched in the HeroCards component. 

Then, upon clicking a card (with an icon and description), it should trigger a cooldown timer in the form of a
circle, which you can not click to activate again until the timer is expired.

Obviously this still needs a lot of work, but that is what I was going for!

*/