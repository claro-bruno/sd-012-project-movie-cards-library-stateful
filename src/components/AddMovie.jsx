// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

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
    this.handleReset = this.handleReset.bind(this);
    this.geraInput = this.geraInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleReset(event) {
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

  geraInput(objeto) {
    const { type, id, labelName, name, value } = objeto;
    return (
      <Input
        inputType={ type }
        id={ id }
        inputLabelName={ labelName }
        inputName={ name }
        inputValue={ value }
        handleChange={ this.handleChange }
      />
    );
  }

  render() {
    const { geraInput, handleReset, handleChange } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {geraInput({ type: 'text',
          id: 'title',
          labelName: 'Título',
          name: 'title',
          value: title })}
        {geraInput({ type: 'text',
          id: 'subtitle',
          labelName: 'Subtítulo',
          name: 'subtitle',
          value: subtitle })}
        {geraInput({ type: 'text',
          id: 'image',
          labelName: 'Imagem',
          name: 'imagePath',
          value: imagePath })}
        {geraInput({ type: 'textarea',
          id: 'storyline',
          labelName: 'Sinopse',
          name: 'storyline',
          value: storyline })}
        {geraInput({ type: 'number',
          id: 'rating',
          labelName: 'Avaliação',
          name: 'rating',
          value: rating })}
        <Select value={ genre } handleChange={ handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleReset }
        >
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
