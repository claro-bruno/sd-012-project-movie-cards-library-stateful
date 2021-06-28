import React from 'react';
import PropTypes from 'prop-types';
import AddForm from './myComponents/AddForm';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    const { state } = this;
    return (
      <AddForm
        onClick={ onClick }
        state={ state }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
      />
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
