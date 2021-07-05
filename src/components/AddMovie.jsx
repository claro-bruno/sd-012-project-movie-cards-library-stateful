import React from 'react';

import StringInput from './StringInput';
import TxtAreaInput from './TxtAreaInput';
import NumberInput from './NumberInput';

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

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
    const { storyline, rating } = this.state;
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
      </form>
    );
  }
}

export default AddMovie;
