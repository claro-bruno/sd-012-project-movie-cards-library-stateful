import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import AreaInput from './AreaInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';

import '../styles/addmovie.css';

const inputs = [
  {
    text: 'Título ',
    name: 'title',
    testid: 'title',
    value: 'title',
  },
  {
    text: 'Subtítulo ',
    name: 'subtitle',
    testid: 'subtitle',
    value: 'subtitle',
  },
  {
    text: 'Imagem (URL)',
    name: 'imagePath',
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
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onClick() {
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
      <form data-testid="add-movie-form" className="add-movie">
        <h2>Adicionar filme</h2>
        { inputs.map(({ text, name, testid, value }) => {
          const { state } = this;
          return (
            (<TextInput
              text={ text }
              name={ name }
              testid={ testid }
              value={ state[value] }
              key={ name }
              onChange={ this.handleChange }
            />));
        })}

        <AreaInput
          text="Sinopse "
          name="storyline"
          testid="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <NumberInput
          text="Avaliação "
          name="rating"
          testid="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <SelectInput
          text="Gênero "
          name="genre"
          testid="genre"
          value={ genre }
          onChange={ this.handleChange }
          options={ options }
        />
        <button type="button" data-testid="send-button" onClick={ this.onClick }>
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
