import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export default function About() {
    return (
        <div>
            <Jumbotron className="texr-center">
                <h5>Developed by: Lakshit karsoliya</h5>
                <p><Nav.Link href="https://github.com/Lakshit-Karsoliya">github</Nav.Link></p>
            </Jumbotron>
        </div>
    )
}
