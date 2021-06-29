import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectGender from './SelectGender';
import Textarea from './Textarea';
import Button from './Button';

class AddMovieForm2 extends Component {
  render() {
    const { state, handleChange, onClickButton } = this.props;
    const { storyline, rating, genre } = state;

    return (
      <div>
        <Textarea
          textareaLabel="Sinopse"
          textareaLabelTestId="storyline-input-label"
          textareaValue={ storyline }
          onChangeTextarea={ handleChange }
          textareaId="add-storyline"
          textareaTestId="storyline-input"
          textareaName="storyline"
        />
        <Input
          inputType="number"
          inputLabel="Avaliação"
          inputLabelTestId="rating-input-label"
          inputValue={ rating }
          onChangeInput={ handleChange }
          inputId="add-rating"
          inputTestId="rating-input"
          inputName="rating"
        />
        <SelectGender
          selectName="genre"
          onChangeSelect={ handleChange }
          selectId="add-genre"
          selectTestId="genre-input"
          selectLabel="Gênero"
          selectLabelTestId="genre-input-label"
          selectValue={ genre }
        />
        <Button
          buttonText="Adicionar filme"
          onClickButton={ onClickButton }
          buttonTestId="send-button"
        />
      </div>
    );
  }
}

AddMovieForm2.propTypes = {
  state: PropTypes.shape({
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default AddMovieForm2;
