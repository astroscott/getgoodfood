import React from 'react';
import './RestaurantLister.css';
import { Restaurant } from '../Restaurant/Restaurant';

export class RestaurantLister extends React.Component {
    render() {
        return (
            <div id="restaurantContainer">
                {this.props.restaurants.slice(0,3).map( (restaurant) => {
                   return <Restaurant restaurant={restaurant} />
                })}
            </div>
        );
    }
}