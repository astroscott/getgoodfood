import React from 'react';
import './Restaurant.css';

export class Restaurant extends React.Component {
    render() {
        return (
            <div id="restaurant">
                <img src={this.props.restaurant.image_url} />
                <p><span id="restaurantTitle">{this.props.restaurant.name}</span></p>
                <p>Rating: {this.props.restaurant.rating}, <a href={this.props.restaurant.url}>Website</a></p>
                <p>Address: {this.props.restaurant.location.address1}, {this.props.restaurant.location.zip_code}</p>
            </div>
        );
    }
}