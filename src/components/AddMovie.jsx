import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

//requisitos feito com ajuda do Wadson Almeida!//
  handleChange(event) {
    this.setState = ({ 
      subtitle: event.target.value, 
      title: event.target.value, 
      imagePath: event.target.value, 
      storyline: event.target.value, 
      rating: event.target.value, 
      genre: event.target.value, 
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          typeInput="text"
          textLabel="Título"
          valueInput={ title }
          onChangeInput={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.exact({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
