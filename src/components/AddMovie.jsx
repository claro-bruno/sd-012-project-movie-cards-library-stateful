import React from 'react';
import PropTypes from 'prop-types';

import AddMoviePart1 from './AddMoviePart1';
import AddMoviePart2 from './AddMoviePart2';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMoviePart1
          handleChange={ this.handleChange }
          state={ this.state }
        />
        <AddMoviePart2
          handleChange={ this.handleChange }
          state={ this.state }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
