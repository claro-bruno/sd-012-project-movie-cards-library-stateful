import React, { Component } from 'react';
import Input from './Input';
import MovieInfos from './MovieInfos';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;

    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <MovieInfos
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          onChange={ this.handleChange }
        />

        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          dataTestId="rating-input"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
