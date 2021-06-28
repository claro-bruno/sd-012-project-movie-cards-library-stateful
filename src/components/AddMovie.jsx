import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './generics/Input';
// import Select from './generics/Select';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    //   subtitle: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    const { onClick } = this.props;

    const {
      title,
    //   subtitle,
    //   imagePath,
    //   storyline,
    //   rating,
    //   genre,
    } = this.state;
    return (
      <form className="form-addMovie" data-testid="add-movie-form">
        <Input
          id="add-title"
          dataTestidLabel="title-input-label"
          dataTestidInput="title-input"
          textLabel="Título"
          onChange={ this.handleChange }
          name="title"
          value={ title }
        />
        <button type="submit" onClick={ onClick }>Adicionar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
