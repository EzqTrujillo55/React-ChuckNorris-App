import React, {useEffect, useState} from 'react';
import {Box} from "@chakra-ui/react"
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
  } from "@chakra-ui/react";
const Joke = (props) => {
    return(
        
       
            <Stat>
            <StatNumber><img src={props.joke?.icon_url}/></StatNumber>
            <StatLabel>{props.joke?.value}</StatLabel>
            </Stat>               
         
    )
}

export default Joke; 