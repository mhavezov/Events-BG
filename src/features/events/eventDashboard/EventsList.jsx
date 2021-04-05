import React from 'react';
import EventListItem from './EventListItem';

function EventsList({ events, selectEvent, deleteEvent }) {
  return (
    <>
      {events.map((item) => (
        <EventListItem
          key={item.id}
          event={item}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}

export default EventsList;
