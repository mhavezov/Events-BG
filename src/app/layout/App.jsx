import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import EventDetailsPage from '../../features/events/eventDetails/EventDetailsPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/Sandbox/Sandbox';

function App() {
const {key} = useLocation()

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
              <Route path='/sandbox' component={Sandbox} />
              <Route
                path='/events/:id'
                component={EventDetailsPage}
              />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm} key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
