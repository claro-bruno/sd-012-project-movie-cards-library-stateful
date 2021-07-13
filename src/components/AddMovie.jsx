import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './addMovie/Title';
import Subtitle from './addMovie/Subtitle';
import ImagePath from './addMovie/ImagePath';
import TextArea from './addMovie/TextArea';
import Number from './addMovie/Number';
import Select from './addMovie/Select';
import Button from './addMovie/Button';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form
        handleChange={ this.handleChange }
        data-testid="add-movie-form"
      >
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <TextArea value={ storyline } handleChange={ this.handleChange } />
        <Number value={ rating } handleChange={ this.handleChange } />
        <Select value={ genre } handleChange={ this.handleChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
