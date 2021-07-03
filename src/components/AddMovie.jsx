import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    const INITIAL_STATE = {
      subtitle: '',
      title: '',
      imagemPath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <h1>meuForm</h1>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
