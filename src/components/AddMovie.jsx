import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Forms/Inputs';
import Select from './Forms/Select';
import Textarea from './Forms/Textarea';
import Button from './Forms/Button';

class AddMovie extends Component {
  constructor() {
    super();
    this.submitOnClick = this.submitOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleTitle() {
    const { title } = this.state;
    return (
      <div>
        <Input
          inputLabel="Título"
          inputType="text"
          inputName="title"
          inputValue={ title }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  handleSubtitle() {
    const { subtitle } = this.state;
    return (
      <div>
        <Input
          inputLabel="Subtítulo"
          inputType="text"
          inputName="subtitle"
          inputValue={ subtitle }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  handleImagePath() {
    const { imagePath } = this.state;
    return (
      <div>
        <Input
          inputLabel="Imagem"
          inputType="text"
          inputName="image"
          inputValue={ imagePath }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  handleRating() {
    const { rating } = this.state;
    return (
      <div>
        <Input
          inputLabel="Avaliação"
          inputType="number"
          inputName="rating"
          inputValue={ rating }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  handleTextArea() {
    const { storyline } = this.state;
    return (
      <div>
        <Textarea
          inputLabel="Sinopse"
          inputName="story"
          inputValue={ storyline }
          onChangeText={ this.handleChange }
        />
      </div>
    );
  }

  handleSelect() {
    const { genre } = this.state;
    return (
      <div>
        <Select
          inputLabel="Gênero"
          inputsValue={ genre }
          onChangeSelect={ this.handleChange }
        />
      </div>
    );
  }

  buttonForm() {
    return (
      <Button
        buttonName="Adicionar filme"
        onClickButton={ this.submitOnClick }
      />
    );
  }

  submitOnClick() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.handleTitle()}
        {this.handleSubtitle()}
        {this.handleImagePath()}
        {this.handleRating()}
        {this.handleTextArea()}
        {this.handleSelect()}
        {this.buttonForm()}
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.exact({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
