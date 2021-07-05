import React from 'react';
import PropTypes from 'prop-types';
import InputRender from './InputRender';
import TextArea from './TextArea';
import SelectMovie from './SelectMovie';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  btnFunc = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.onSubmitForm }>
        <InputRender
          name="title"
          nome="Título"
          initValue={ title }
          onChange={ this.handleChange }
          type="text"
          nameState="title"
        />
        <InputRender
          name="subtitle"
          nome="Subtítulo"
          initValue={ subtitle }
          onChange={ this.handleChange }
          type="text"
          nameState="subtitle"
        />
        <InputRender
          name="image"
          nome="Imagem"
          initValue={ imagePath }
          onChange={ this.handleChange }
          type="text"
          nameState="imagePath"
        />
        <TextArea initValue={ storyline } onChange={ this.handleChange } />
        <InputRender
          name="rating"
          nome="Avaliação"
          initValue={ rating }
          onChange={ this.handleChange }
          type="number"
          nameState="rating"
        />
        <SelectMovie initValue={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.btnFunc }
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
