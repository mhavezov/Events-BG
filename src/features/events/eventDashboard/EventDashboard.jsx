import React, { useState } from 'react';
import { sampleData } from '../../../app/api/sampleData';

import { Grid } from 'semantic-ui-react';
import EventList from './EventsList';
import EventForm from '../eventForm/EventForm';

function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen ? <EventForm setFormOpen={setFormOpen} /> : null}
      </Grid.Column>
    </Grid>
  );
}

export default EventDashboard;
