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
        <Input id="add-title" textLabel="Título : " name="title" value={ title } />
        <button type="submit" onClick={ onClick }>Adicionar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
