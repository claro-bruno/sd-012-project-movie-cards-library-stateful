import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

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

  handleChange({ target }) { // exemplo dado no vídeo do Course
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
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
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          inputLabel="Título"
          inputType="text"
          inputName="searchText"
          dataTestIdLabel="title-input-label"
          dataTestId="title-input"
          inputValue={ this.title }
          onChangeInput={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.shape({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
