import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Content from './Content';
import './Enter.css';

class Enter extends Component {

  state = {
    user: '',
    sections: [
      {
        name: 'people',
        icon: <i className="fab fa-jedi-order"></i>,
        link: '/people',
      }, {
        name: 'planets',
        icon: <i className="fas fa-globe-europe"></i>,
        link: '/planets',
      },
      {
        name: 'starships',
        icon: <i className="fas fa-space-shuttle"></i>,
        link: '/starships',
      }
    ]
  };

  onSectionClicked = name => {
    const section = this.state.sections.find(section => section.name === name);
    this.props.history.push(section.link);
  }
  componentDidMount() {
    const user = localStorage.getItem('User');
    this.setState({ user });
  }
  render() {
    const { user, sections } = this.state;
    return (
      <div>
        <header>
          <div className="title"><span>May the force be with you</span></div>
          <div className="user-container">
            {user}<i className="user-icon fas fa-user-astronaut"></i>
          </div>
        </header>
        <Content onSectionClicked={this.onSectionClicked} sections={sections} />
      </div>
    );
  }
}

export default withRouter(Enter);
