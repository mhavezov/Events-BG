import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import EventDetailsPage from '../../features/events/eventDetails/EventDetailsPage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route
                exact
                path='/events'
                component={EventDashboard}
              />
              <Route
                path='/events/:id'
                component={EventDetailsPage}
              />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
