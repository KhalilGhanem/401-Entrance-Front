import React, { Component } from 'react';
import axios from 'axios';
import DrinksCard from './DrinksCard';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            allData:[],
        }
    }
    componentDidMount =() =>{
        const url=`${process.env.REACT_APP_SERVER}/getAll`;
        axios.get(url).then((result)=>{
            console.log(result.data.drinks);
            this.setState({
                allData:result.data.drinks,
            })
        })
    }

    addToFav=(item) =>{
        const obj ={
            strDrink:item.strDrink,
            strDrinkThumb:item.strDrinkThumb,
        }
        // console.log(obj);
        let url=`${process.env.REACT_APP_SERVER}/addToFav`;
        axios.post(url,obj);

    }
    render() {
        return (
            <div>
               <DrinksCard allData={this.state.allData} addToFav={this.addToFav}/> 
            </div>
        );
    }
}

export default Main;
