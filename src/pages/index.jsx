import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Poker } from '../pages/poker';
import { GameRoom } from '../pages/gameRoom';

export function Pages() {
  return (
    <Switch>
      <Route path={'/poker'} component={Poker} />
      <Route path={'/game'} component={GameRoom} />

      <Redirect to={'/poker'} />
    </Switch>
  );
}
