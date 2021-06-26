import React, { useState} from 'react'
import '../Styles/style.css';
import { Card, Button } from 'react-bootstrap';

export default function Home() {
    const [item, setItem] = useState();
    
    return (
        <div className='container home'>
              <div className='container py-4'>
                <Card>
                <Card.Header><h3><b>To-do App</b></h3></Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <div className='searchBarDiv'>
                    <input className='searchBar'></input>
                    <Button variant="primary">Add</Button>
                    </div>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
