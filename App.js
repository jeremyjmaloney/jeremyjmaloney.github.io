import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      console.log('hello')
      <div style={{ height: '200vh' }}>
        <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
