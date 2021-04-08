import React from 'react';
import EventListItem from './EventListItem';

function EventsList({ events }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
}

export default EventsList;
