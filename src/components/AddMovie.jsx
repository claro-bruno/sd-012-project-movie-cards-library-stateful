import React from 'react';
import PropTypes from 'prop-types';
import FormBody from './Form';

const state = {
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

    this.state = state;

    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(state);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <FormBody onChange={ this.handleClick } state={ this.state } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            onClick(state);
            this.resetState();
          } }
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
