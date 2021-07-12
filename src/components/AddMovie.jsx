import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './addMovie/Title';
import Subtitle from './addMovie/Subtitle';
import ImagePath from './addMovie/ImagePath';
import TextArea from './addMovie/TextArea';

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
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
      <form
        handleChange={ this.handleChange }
        data-testid="add-movie-form"
      >
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <TextArea value={ storyline } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default AddMovie;
