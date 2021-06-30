import React from 'react';
//import { useState } from 'react';
import BMI from './BMI';
import BMR from './BMR';
import { Tabs,Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function TabComp() {
    return (
        <>
            <Tabs defaultActiveKey="second">
                <Tab eventKey="second" title="BMI"><BMI/></Tab>
                <Tab eventKey="third" title="BMR"><BMR/></Tab>
            </Tabs>
        </>
    )
}
