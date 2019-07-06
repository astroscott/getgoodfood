import React from 'react';
import './Container.css';
import { Form } from '../Form/Form';
import { RestaurantLister } from '../RestaurantLister/RestaurantLister'
import { GetRestaurants } from '../GetRestaurants/GetRestaurants'


export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const foodType = document.getElementsByClassName('textBox')[0].value;
        const location = document.getElementsByClassName('textBox')[1].value;
        GetRestaurants.search(foodType, location)
        .then( (restaurants) => {
            this.setState({restaurants: restaurants});
            }
        );
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Get Good Food</h1>
                    <Form handleClick={this.handleClick}/>
                    <p>Returns the top three restaurants in a given city.</p>
                </div>
                <RestaurantLister restaurants={this.state.restaurants} />
            </div>
        );
    }
}
