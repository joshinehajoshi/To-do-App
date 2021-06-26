import React, { useState} from 'react'
import '../Styles/style.css';
import { Card, Button } from 'react-bootstrap';

export default function Home() {
    const [item, setItem] = useState('');
    const [itemarr, setItemArr] = useState([]);

    const addItemsHandler = () => {
        if(!item){

        }else{
            setItemArr([...itemarr, item]);
            setItem();
        }
    
    }
    const deleteHandler = (id) => {
        const newItem = itemarr.filter((items, index) => {
            return id !== index;
        }
            )
            setItemArr(newItem);
    }

    const removeHandler = () => {
        setItem('');
        setItemArr([]);
    }
    
    return (
        <div className='container home'>
              <div className='container py-4'>
                <Card>
                <Card.Header><h2><b>To-do App</b></h2></Card.Header>
                <Card.Body>
                    <Card.Title><h3><b>Add Items</b></h3></Card.Title>
                    <div className='searchBarDiv'>
                    <input className='searchBar' value={item} onChange={(e) => setItem(e.target.value)}></input>
                    <Button variant="dark" onClick={() => addItemsHandler()}>Add</Button>
                    </div>
                    {
                        itemarr.map((items, index) => {
                            return(
                                <div className='searchBarDiv'>
                                <h3 className='Items' key={index}>{items}</h3>
                                <Button variant="dark" onClick={() => deleteHandler(index)}>Remove</Button>
                                </div>
                            )
                        })
                    }
                    <div  className='searchBarDiv'>
                        <Button variant='warning' onClick={() => removeHandler()}>Remove all items</Button>
                    </div>
                 
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
