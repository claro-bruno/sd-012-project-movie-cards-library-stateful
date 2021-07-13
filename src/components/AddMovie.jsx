// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import StringInput from './StringInput';
import TxtAreaInput from './TxtAreaInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';

const inputObject = [
  {
    name: 'title',
    text: 'Título',
    testid: 'title',
    value: 'title',
  },
  {
    name: 'subtitle',
    text: 'Subtítulo',
    testid: 'subtitle',
    value: 'subtitle',
  },
  {
    name: 'imagePath',
    text: 'Imagem',
    testid: 'image',
    value: 'imagePath',
  },
];

const options = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
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

  onClick(event) {
    event.preventDefault();
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
    const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { inputObject.map(({ name, text, testid, value }) => {
          const { state } = this;
          return (
            <StringInput
              text={ text }
              testid={ testid }
              key={ name }
              name={ name }
              value={ state[value] }
              onChange={ this.handleChange }
            />
          );
        }) }
        <TxtAreaInput
          value={ storyline }
          onChange={ this.handleChange }
        />
        <NumberInput
          value={ rating }
          onChange={ this.handleChange }
        />
        <SelectInput
          value={ genre }
          onChange={ this.handleChange }
          options={ options }
        />
        <button type="submit" data-testid="send-button" onClick={ this.onClick }>
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
