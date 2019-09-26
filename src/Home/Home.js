import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import logo from './logo.svg';

class Home extends Component {

  state = {
    name: '',
    loading: false,
  }

  onChange = event => {
    this.setState({ name: event.target.value });
  }

  onEnterClicked = () => {
    const { name } = this.state;
    localStorage.setItem('User', name);
    this.props.history.push('/enter');
  }

  render() {

    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="enter-form">
            <p>What's your name?</p>
            <input onChange={this.onChange} className="name-field" type="text" />
            {name.length === 0 ? <span className="error-msg">Please enter your name</span> : null}
            <button onClick={this.onEnterClicked} disabled={name.length === 0} className="enter-btn">Enter</button>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Home);
