import PropTypes from 'prop-types';

import React from 'react';
import Title from '../componentsAddMovie/Title';
import SubTitle from '../componentsAddMovie/SubTitle';
import Image from '../componentsAddMovie/Image';
import TextArea from '../componentsAddMovie/TextArea';
import Rating from '../componentsAddMovie/Avaliacao';
import Genre from '../componentsAddMovie/Genre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.StateOfAddMovies = this.StateOfAddMovies.bind(this);
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  StateOfAddMovies() {
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
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <SubTitle value={ subtitle } handleChange={ this.handleChange } />
        <Image value={ imagePath } handleChange={ this.handleChange } />
        <TextArea value={ storyline } handleChange={ this.handleChange } />
        <Rating value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => { this.StateOfAddMovies(); onClick(); } }
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
