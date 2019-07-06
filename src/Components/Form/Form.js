import React from 'react';
import './Form.css';

export class Form extends React.Component {

    render() {
        return (
            <form id="mainForm">
                <input className="textBox" id="genre" name="genre" type="text" placeholder="Food Type" autoComplete="off" />
                <input className="textBox" id="location" name="location" type="text" placeholder="Location" autoComplete="off" />
                <input id="submitButton" type="submit" value="Let's Eat!" onClick={this.props.handleClick} />
            </form>
        );
    }
}
