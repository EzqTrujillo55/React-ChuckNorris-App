import React, { useEffect, useState } from 'react';
import FormJoke from '../Components/FormJoke';
import Joke from '../Components/Joke';
import { getRandomJoke } from '../Services/fetch';
import { Center} from "@chakra-ui/react"
const JokesPage = () => {
    const [joke, setJoke] = useState([]);
    useEffect(()=> {
        init();    
    }, [])

    const init = async () => {
        const response = await getRandomJoke(); 
        setJoke(response);
        console.log(response); 
    }
    return(
        <>
        <Center style={{fontSize:"2em"}}>Chuck Norris Jokes App</Center>
        <FormJoke  setJoke={setJoke}/>
        {joke!=[] &&
        
            joke.result ?  
            (
                joke.result.map((elemento)=> (
                    <Joke joke={elemento} />
                ))
            ):
            (
                <Joke joke={joke}/>
            )                       
        }   
       
        </>
    )
}

export default JokesPage; 