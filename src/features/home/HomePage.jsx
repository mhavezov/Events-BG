import React from 'react';
import {
  Container,
  Image,
  Segment,
  Header,
  Button,
  Icon,
} from 'semantic-ui-react';

function HomePage({ history }) {
  return (
    <Segment
      inverted
      textAlign='center'
      vetical='true'
      className='masthead'
    >
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
          Events-BG
        </Header>
        <Button
          onClick={() => history.push('/events')}
          size='huge'
          inverted
        >
          Get Started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}

export default HomePage;
