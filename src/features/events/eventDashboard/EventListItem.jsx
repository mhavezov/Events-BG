import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';

import EventListAttendee from './EventListAttendee';

function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size='tiny'
              circular
              src={event.hostPhotoURL}
            />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>
                Hosted by {event.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name='clock' /> {event.date}
        <Icon name='marker' style={{ marginLeft: '1em' }} />{' '}
        {event.venue}
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee
              key={attendee.id}
              attendee={attendee}
            />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        {event.description}
        <Button color='teal' floated='right' content='view' />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
