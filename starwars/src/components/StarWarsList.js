import React, { useState, useEffect } from "react";
import axios from "axios";	
import PersonCard from "./StarWarsCard";	
import { Container, Row } from "reactstrap";	

export default function CardList () {
    
    const [people, setPeople] = useState([])
    

    useEffect(() => {
        axios
    
        .get("https://swapi.co/api/people/")
        .then(res=> {
          setPeople(res.data.results)
          console.log(res.data.results);
        })
      }, []);
      
      return (
      <Container>
          <Row>
            {people.map(data => {
                return (
                    <PersonCard
                    key={data.name}
                    name={data.name}
                    gender={data.gender}
                    height={data.height}
                    hair={data.hair_color}
                    eyes={data.eye_color}
                    />	                           
                );
            })}
          </Row>
      </Container>
      )
}