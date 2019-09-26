import React, { Component } from 'react';
import Card from '../../Card/Card';
import './PeopleItem.css';

export class PeopleItem extends Component {

  state = {
    expanded: false,
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  renderNotExpandedContent = () => {
    const { people: { name } } = this.props;
    return (
      <div className="not-expanded" onClick={this.toggleExpanded}>
        <Card title={name} icon={<i className="fas fa-jedi"></i>} />
      </div>
    );
  }

  renderExpandedContent = () => {
    const { 
      people: {
        name, height, mass, hair_color, skin_color, eye_color, birth_year, gender 
      }
    } = this.props;
    return (
      <div className="expanded" onClick={this.toggleExpanded}>
        <Card title={name} icon={<i className="fas fa-jedi"></i>}>
          <span>Height: {height}</span>
          <span>Mass: {mass}</span>
          <span>Eye color: {eye_color}</span>
          <span>Hair color: {hair_color}</span>
          <span>Skin color: {skin_color}</span>
          <span>Birth Year: {birth_year}</span>
          <span>Gender: {gender}</span>
        </Card>
      </div>
    );
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="container">
        {
          !expanded ? this.renderNotExpandedContent() : this.renderExpandedContent()
        }
      </div>
    );
  }
}

export default PeopleItem;