import React from 'react'
import '../Styles/style.css';
import { Card, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <div className='container py-4'>
                <Card>
                <Card.Header>Contact Us Card</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
