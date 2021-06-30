import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputStoryline from './InputStoryline';
import InputImg from './InputImg';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';

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
          labelButton="Adicionar filme"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
