import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import { getCategories, searchByCategory, searchByText } from '../Services/fetch';
import { Select } from "@chakra-ui/react"

const FormJoke = (props) => {
    const [text, setText] = useState('');
    const [mode, setMode] = useState(true); 
    const [categories, setCategories] = useState([]);
    
    const search = async () => {
        let response;
        if (mode){
            response = await searchByText(text); 
        }else{
            response = await searchByCategory(text);
        }
        props.setJoke(response); 
        console.log(response); 
    }

    useEffect(()=> {
        init(); 
    }, [])

    const init = async () =>{
        const response = await getCategories(); 
        console.log(response);
        setCategories(response);
        
    }

    
    return(
        <>
        {mode? 
            (<Input m={4} onChange={ (e) => setText(e.target.value)} placeholder="Words to query"/>):
            (
                <Select m={4} onChange={(e)=> setText(e.target.value)} placeholder="Select option">
                {    
                 categories.map(element => (
                    <option value={element}>{element}</option>
                    )) 
                }    
                </Select>
            )
        }
        <Button m={2} colorScheme="blue" onClick={search}>Search</Button>
        <Button m={2} onClick={()=> setMode(!mode)}>Search by {!mode? ('Text'): ('Category')}</Button>
        </>
    );
}

export default FormJoke; 