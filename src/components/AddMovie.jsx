// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import ImagePath from './ImagePath';
import Storyline from './Storyline';


class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        <Input
          type="text"
          title="Título"
          name="title"
          value={ title }
          func={ this.handleChange }
        />
        <Input
          type="text"
          title="Subtítulo"
          name="subtitle"
          value={ subtitle }
          func={ this.handleChange }
        />
        <ImagePath
          value={ imagePath }
          func={ this.handleChange }
        />
        <Storyline
          value={ storyline }
          func={ this.handleChange }
        />
        <Input
          type="number"
          title="Avaliação"
          name="rating"
          value={ rating }
          func={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
