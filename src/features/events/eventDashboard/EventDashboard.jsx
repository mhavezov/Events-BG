import React, { useState } from 'react';
import { sampleData } from '../../../app/api/sampleData';

import { Grid } from 'semantic-ui-react';
import EventList from './EventsList';
import EventForm from '../eventForm/EventForm';

function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(
      events.map((evt) =>
        evt.id === updatedEvent.id ? updatedEvent : evt
      )
    );
    selectEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen ? (
          <EventForm
            setFormOpen={setFormOpen}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        ) : null}
      </Grid.Column>
    </Grid>
  );
}

export default EventDashboard;
