// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './moviespecs/Title';
import Subtitle from './moviespecs/Subtitle';
import Image from './moviespecs/Image';
import Synopsis from './moviespecs/Synopsis';
import Appraisal from './moviespecs/Appraisal';
import Genre from './moviespecs/Genre';
import Button from './moviespecs/Button';

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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: name === 'rating' ? Number(value) : value,
    });
  }

  handleClick = () => {
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
    const { subtitle,
      title, imagePath,
      storyline, rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Image
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <Synopsis
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Appraisal
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
        />
        <Button
          name="button"
          labelButton="Adicionar filme"
          handleClick={ this.handleClick }
        />
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
