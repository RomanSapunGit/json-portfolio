import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import { useAppStyles, useJsonStyles } from './styles';
import { BackToTopButton, NavBar } from './components';
import { Home, Projects, Personal } from './pages';

const App: React.FC = () => {
  const classes = useAppStyles();
  const jsonClasses = useJsonStyles();

  return (
    <>
      <NavBar />
      <Container className={classes.root}>
        <Typography className={jsonClasses.root} variant="h5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Personal} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Typography>
      </Container>
      <BackToTopButton />
    </>
  );
};

export default App;
