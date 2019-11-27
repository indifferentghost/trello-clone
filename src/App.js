import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Kanban } from '@/Kanban/Kanban';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Kanban />
        </Route>
        <Route path="/*">
          <div>404</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
