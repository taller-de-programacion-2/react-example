import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../Store/actions';
import People from '../components/People';

class PeopleContainer extends Component {

  async componentDidMount() {
    this.props.getPeople();
  }

  render() {
    const { people } = this.props;
    return <People people={people} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
