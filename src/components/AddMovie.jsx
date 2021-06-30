import React from 'react';
import PropTypes from 'prop-types';
import InputsAddMovie from './InputsAddMovie';

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
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputsAddMovie
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <label htmlFor="input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        { onclick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
