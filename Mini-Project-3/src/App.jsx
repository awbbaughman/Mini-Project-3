import React, { useState, useEffect, useRef } from 'react';
import HeroCards from './components/heroCardsOfficial';
import Abilities from './components/abilities';
import Header from './components/Header'
import { Card, Col, Row } from 'react-bootstrap';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Reminder: these selectedHero properties and handlers interact directly with Abilities component!
const App = () => {
  const [heroes, setHeroes] = useState([]); //state is an array 
  const [selectedHero, setSelectedHero] = useState({ 
      hero_key: 'ana', 
      name: 'Ana', 
      role: 'Support', 
      abilities: [],
      });

// here is what needs editing
    const handleHeroSelect = (hero) => {
      setSelectedHero(hero);
    
    };

    useEffect(() => {
      fetch('https://overfast-api.tekrop.fr/heroes')
        .then((response) => response.json())
        .then((data) => setHeroes(data))
        .catch((error) => console.error('Error fetching heroes:', error));
    }, []);

    

    return (
      <>

  <Header id="Header" />
  <br />
    <HeroCards heroes={heroes} onHeroSelect={handleHeroSelect} />


        <div id="practiceRange">
          {/*<Abilities abilities={abilities} />*/}
        </div>

        
      </>
    );
};

export default App;

/*

The intent of this page was to have the HeroCards in a grid at the top of the page, static and always able to be
interacted with. I struggled with trying to make it in the top 25% or so of the page, so experimented with 
adding them to a NavBar, which didn't come to fruition, but can be edited with more time.

Regardless, upon clicking a certain HeroCard, the hero and their Abilities
(with cards featuring ability icons, descriptions, and buttons to activate),
would appear in the center of the page, and the user would be able to interact with them.

^^ This was the biggest source of issue for me. So much so, that I threw the abilities.jsx and heroCardsUnofficial.jsx to the wayside--
you can tell with the latter that I even made it "unofficial" compared to an "official" version to submit for this assignemnt.
I simply could not get the Abilities component to trigger properly after clicking a specific hero portrait. I kept getting 
"X is undefined" errors, thought I addressed the error, then would get another similar "unreadable" or "undefined" error.
I know this is a major part of the project which I had to abandon to be able to turn in a workable product by the due date, but I absolutely
intend to keep troubleshooting it in hopes of being able to present the final product on Saturday.

In sum: I have the beginnings of a solid React app here: I have imported "child" component (heroCardsOfficial.jsx) into a 
"parent" component (App.jsx), fetched and presented specific API data, integrated and applied bootstrap style, and applied 
event handler functionality upon clicking a specific card.

The biggest area to improve upon (which I feel like I can figure out eventually, but might need help), is how to get that second piece
of the puzzle-- the Abilities component to work. I know this project could be better, and intend to keep troubleshooting it.


For the future: maybe sort or offer different sections for beginners, novices, intermediate,
advanced, etc.
AKA heroes for beginners, advanced, etc

Add some styling for H1-- could be its own stylized card


*/