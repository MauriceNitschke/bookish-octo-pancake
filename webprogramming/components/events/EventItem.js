import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class EventItem extends Component {
    render() {

        const { id, title, date, descr } = this.props.event;

        return (
            
            <div style={eventstyle}>
                {/* Trennlinie */}
                <div class="event">
                    <div style={{marginTop: '20px'}}>
                        {/* Bild */}
                    </div>
                    <div class="inhalt">
                        <h3 style={{margin: '10px 0px 10px 0px'}}>{title}</h3>
                        <p style={{
                            marginBottom: '10px',
                            color: 'rgba(216, 15, 15, 0.6)',}}
                            >{date}</p>
                        <p class="eventText">{descr}</p>
                    </div>
                    <div style={{marginLeft: '5px',}}>
                        {/*TODO: Funktionalität adden, dass der Button auch auf die Subseite routet */}
                        <button class="eventButton">mehr</button>
                    </div>
                </div>
            </div>
        
        )
    }
}

//Styling
const eventstyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '2px #bbb solid',
}

// PropTypes
EventItem.propTypes = {
    event: PropTypes.object.isRequired,
}

export default EventItem
