import React from 'react';
import PropTypes from 'prop-types';
import AddMovie1 from './AddMovie1';
import AddMovie2 from './AddMovie2';

class AddMovie extends React.Component {
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
    this.clickAddMovie = this.clickAddMovie.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  clickAddMovie() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    onClick({
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    });
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
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovie1
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          change={ this.handleChange }
          storyline={ storyline }
        />
        <AddMovie2
          change={ this.handleChange }
          rating={ rating }
          genre={ genre }
          click={ this.clickAddMovie }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
