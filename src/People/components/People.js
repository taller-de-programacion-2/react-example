import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithLoading from '../../Loading';
import { getPeople } from '../../Store/actions';
import './People.css';
import PeopleItem from './PeopleItem';

class People extends Component {

  state = {
    people: [],
  };

  async componentDidMount() {
    // const res = await instance.get('/people');
    // const people = res.data.results;
    // this.setState({ people });
    this.props.getPeople();
  }

  render() {
    const { people } = this.props;
    return (
      <div>
        {
          people.map(p => (
            <PeopleItem key={p.name} people={p} />
          ))
        }
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople())
  };
};

export default WithLoading(connect(mapStateToProps, mapDispatchToProps)(People));
