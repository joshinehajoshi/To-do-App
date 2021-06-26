import React from 'react'
import '../Styles/style.css';
import { Card, Button } from 'react-bootstrap';

export default function About() {
    return (
        <div>
            <div className='container py-4'>
                <Card>
                <Card.Header><h2><b>About Us Card</b></h2></Card.Header>
                <Card.Body>
                    <Card.Title><h1><b>Happy Coding!!!</b></h1></Card.Title>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
