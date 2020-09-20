import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

const App = (props: {name: string}) => {
  console.log({name: props.name});
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  );
};

export default App;
