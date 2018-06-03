const React = require('react');

const reactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('App'));
