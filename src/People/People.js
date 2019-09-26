import axios from 'axios';
import React, { Component } from 'react';
import WithLoading from '../Loading';
import './People.css';
import PeopleItem from './PeopleItem';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },

});

class People extends Component {

  state = {
    people: [],
  };

  async componentDidMount() {
    const res = await instance.get('/people');
    const people = res.data.results;
    this.setState({ people });
  }

  render() {
    const { people } = this.state; 
    return (
      <div>
        {
          people.map( p => (
            <PeopleItem key={p.name} people={p} />
          ))
        }
      </div>
    );
  }
}

export default WithLoading(People);
