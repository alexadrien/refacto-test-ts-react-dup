// This file has to be left untouched

import React, { Component } from 'react';
import DomainFilter, { FilterValue, defaultFilterValue } from './components/DomainFilter';


type State = {
  filterValue: FilterValue;
}
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { filterValue: defaultFilterValue };
  }
  
  render() {
    return (
      <div className="App">
        <DomainFilter
          value={this.state.filterValue}
          onValueChange={(v: FilterValue) => this.setState({ filterValue: v })}
        />
      </div>
    );
  }
}

export default App;
