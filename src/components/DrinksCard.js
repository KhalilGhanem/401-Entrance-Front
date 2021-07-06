import React, { Component } from 'react';
import {Card ,CardColumns ,Button} from 'react-bootstrap';

class DrinksCard extends Component {
    render() {
        return (
            <CardColumns>
                {this.props.allData.map((item,idx)=>{
                    return(
                        <div key={idx}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                                <Button variant="primary" onClick={()=>this.props.addToFav(item)} >Add to favorite list</Button>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })}
                
                
            </CardColumns>
        );
    }
}

export default DrinksCard;

              