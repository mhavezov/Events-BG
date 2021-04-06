import React, { useState } from 'react';
import { sampleData } from '../../../app/api/sampleData';

import { Grid } from 'semantic-ui-react';
import EventList from './EventsList';

function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents(
  //     events.map((evt) =>
  //       evt.id === updatedEvent.id ? updatedEvent : evt
  //     )
  //   );
  //   selectEvent(null);
  // };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h3>Event Filters</h3>
      </Grid.Column>
    </Grid>
  );
}

export default EventDashboard;
