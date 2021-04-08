import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailsHeader from './EventDetailsHeader';
import EventDetailsInfo from './EventDetailsInfo';
import EventDetailsChat from './EventDetailsChat';
import EventDetailsSidebar from './EventDetailsSidebar';
import { useSelector } from 'react-redux';

function EventDetailsPage({ match }) {
  const event = useSelector((state) =>
    state.event.events.find((evt) => evt.id === match.params.id)
  );
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EventDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSidebar attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
  );
}

export default EventDetailsPage;
