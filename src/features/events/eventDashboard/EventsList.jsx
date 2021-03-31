import React from 'react';
import EventListItem from './EventListItem';

function EventsList({ events }) {
  return (
    <>
      {events.map((item) => (
        <EventListItem key={item.id} event={item} />
      ))}
    </>
  );
}

export default EventsList;
