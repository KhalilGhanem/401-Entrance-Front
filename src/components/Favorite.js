import axios from 'axios';
import React, { Component } from 'react';
import {Card ,CardColumns ,Button} from 'react-bootstrap';
import DrinksForm from './DrinksForm';


class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            favData:[],
            show:false,
            strDrink:'',
            strDrinkThumb:'',
            id:'',
        }
    }
    componentDidMount =() =>{
        const url=`${process.env.REACT_APP_SERVER}/getFav`;
        axios.get(url).then((result)=>{
            // console.log(result.data);
            this.setState({
                favData:result.data,
            })
        })
    }
    delete =(item) =>{
        let id=item._id;
        // console.log(id);
        const url=`${process.env.REACT_APP_SERVER}/delete?id=${id}`
        axios.delete(url).then((result)=>{
            // console.log(result.data);
            this.setState({
                favData:result.data,
            })
        })
    }

    showUpdateForm =(item) =>{
        console.log(item);
        this.setState({
            show:true,
            strDrink:item.strDrink,
            strDrinkThumb:item.strDrinkThumb,
            id:item._id,
        });
    }

    handleClose =() =>{
        this.setState({
            show:false,
        })
    }

    updateDrink =(event) =>{
        event.preventDefault();
        // console.log(event.target.name.value);
        const obj ={
            strDrink:event.target.name.value,
            strDrinkThumb:event.target.image.value,
            id:this.state.id,
        }
        // console.log(obj);
        let url=`${process.env.REACT_APP_SERVER}/updateDrink`;
        axios.put(url,obj).then((result)=>{
            // console.log("update--",result.data);
            this.setState({
                favData:result.data,
            })
        })
        
    }





    render() {
        return (
            <>
            <CardColumns>
            {this.state.favData.map((item,idx)=>{
                    return(
                        <div key={idx}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                                <Button variant="primary" onClick={()=>this.delete(item)} >Delete</Button>
                                <Button variant="primary" onClick={()=>this.showUpdateForm(item)} >Update</Button>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })}

            </CardColumns>
             <DrinksForm 
             show={this.state.show}
             handleClose={this.handleClose}
             strDrink={this.state.strDrink}
             strDrinkThumb={this.state.strDrinkThumb}
             updateDrink={this.updateDrink}
             />   
            </>
        );
    }
}

export default Favorite;
