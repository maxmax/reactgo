import React from 'react';
import Page from '../pages/Page';
import AppContainer from '../containers/App';
import Navigation from '../containers/Navigation';
import { title, meta, link } from './assets';

const App = props => (
  <Page title={title} meta={meta} link={link}>
    <Navigation />
    <AppContainer {...props} />
  </Page>
);

export default App;
