import React from 'react';

import { Segment, Header, Form, Button } from 'semantic-ui-react';

function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='event title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='city' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='venue' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='date' />
        </Form.Field>
        <Button
          type='submit'
          floated='right'
          positive
          content='Submit'
        />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
}

export default EventForm;
