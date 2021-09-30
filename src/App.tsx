import React, { Component } from 'react';
import Month from './Month';

interface Props {

}

interface State {

}

class App extends Component <Props, State> {

  state = {
      events: {
        1: {deadline: "2021-08-05", todo: "test1"},
        2: {deadline: "2021-08-01", todo: "test2"},
        3: {deadline: "2021-08-12", todo: "test3"},
        4: {deadline: "2021-09-07", todo: "test1"},
        5: {deadline: "2021-09-07", todo: "test2"},
        6: {deadline: "2021-09-10", todo: "test3"},
        7: {deadline: "2021-09-10", todo: "test4"},
        8: {deadline: "2021-09-20", todo: "test5"},
        9: {deadline: "2021-09-02", todo: "test6", done: true},
    } 
  }

  render() {
 
    return (
      <div>
        <h1>TS Kodstuga</h1>
        <Month events={this.state.events} showMonth={"2021-09"} />
      </div>
    );
  }
}

export default App;