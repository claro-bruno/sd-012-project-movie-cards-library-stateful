import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Genre from './Genre';
import AddRating from './AddRating';

/**
 * Consultei o repositório do Wendell Costa para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/174/commits/44b731c7cb8c4d936475d54de1125e003e202a80
 */

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleClick() {
    const { onClick } = this.props;
    const { movie } = this.state;
    console.log('teste');
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
      storyline: '',
    });
    onClick(movie);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ handleChange } />
        <Subtitle value={ subtitle } handleChange={ handleChange } />
        <ImagePath value={ imagePath } handleChange={ handleChange } />
        <Storyline value={ storyline } handleChange={ handleChange } />
        <AddRating rating={ rating } handleChange={ handleChange } />
        <Genre value={ genre } handleChange={ handleChange } />
        <ButtonAdd handleClick={ handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
