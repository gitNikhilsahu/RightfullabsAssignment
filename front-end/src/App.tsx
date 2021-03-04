import React from 'react'
import { Provider } from 'react-redux';
import reduxStore from 'src/store/reduxStore';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import { DropDownList, PostData, Crud } from 'src/containers';
import { Breadcrumbs } from 'src/components';

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Router>

        <Container maxWidth="lg">
          <Breadcrumbs />

          <Switch>
            <Route exact path="/">
              <DropDownList />
            </Route>
            <Route exact path="/post-data">
              <PostData />
            </Route>
            <Route exact path="/crud">
              <Crud />
            </Route>
          </Switch>

        </Container>
        
      </Router>
    </Provider>
  )
}

export default App
