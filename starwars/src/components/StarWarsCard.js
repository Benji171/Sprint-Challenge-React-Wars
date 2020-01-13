import React from "react";
import {CardTitle, CardText, CardImg, Container,} from "reactstrap";


const PersonCard = props => {

    return (
        <Container className="card">
            <CardTitle className="title">{props.name}</CardTitle>
            <CardImg></CardImg>
            <CardText>Gender : {props.gender} | Height : {props.height} | Hair : {props.hair} | Eyes : {props.eyes}</CardText>
        </Container>
    )
}

export default PersonCard;