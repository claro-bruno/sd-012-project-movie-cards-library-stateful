import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './AddMovie/InputTitle';
import InputSubtitle from './AddMovie/InputSubtitle';
import InputStoryline from './AddMovie/InputStoryline';
import InputImg from './AddMovie/InputImg';
import InputRating from './AddMovie/InputRating';
import SelectGenre from './AddMovie/SelectGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <InputTitle
          handleChange={ this.handleChange }
          value={ title }
        />
        <InputSubtitle
          handleChange={ this.handleChange }
          value={ subtitle }
        />
        <InputImg
          handleChange={ this.handleChange }
          value={ imagePath }
        />
        <InputStoryline
          handleChange={ this.handleChange }
          value={ storyline }
        />
        <InputRating
          handleChange={ this.handleChange }
          value={ rating }
        />
        <SelectGenre
          handleChange={ this.handleChange }
          value={ genre }
        />
        <button
          type="submit"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
