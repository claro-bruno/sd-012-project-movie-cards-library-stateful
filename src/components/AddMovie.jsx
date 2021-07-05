import React from 'react';

import StringInput from './StringInput';
import TxtAreaInput from './TxtAreaInput';

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
    const { storyline } = this.state;
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
      </form>
    );
  }
}

export default AddMovie;
