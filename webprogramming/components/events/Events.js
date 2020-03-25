import React, { Component } from 'react'
import PropTypes from 'prop-types';
import EventItem from './EventItem';

export class Events extends Component {
    render() {
        
        return (
            this.props.events.map((event) => (
                <EventItem key={event.id} event={event}/>
           )));
    }
}

// PropTypes
Events.propTypes = {
    events: PropTypes.array.isRequired,
}

export default Events
