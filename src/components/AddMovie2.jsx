import React from 'react';
import PropType from 'prop-types';
import InputMovie from './InputMovie';
import TextArea from './TextArea';
import Select from './Select';

class AddMovie2 extends React.Component {
  render() {
    const {
      state,
      handlechange,
    } = this.props;
    const { storyline, rating, genre } = state;

    return (
      <section>
        <InputMovie
          label="Avaliação"
          inputName="rating"
          inputType="number"
          inputValue={ rating }
          onChangeInput={ handlechange }
          inputID="rating-input"
        />
        <Select
          label="Gênero"
          inputName="genre"
          inputValue={ genre }
          onChangeInput={ handlechange }
          inputID="genre-input"
        />
        <TextArea
          label="Sinopse"
          inputName="storyline"
          inputValue={ storyline }
          onChangeInput={ handlechange }
          inputID="storyline-input"
        />
      </section>
    );
  }
}

AddMovie2.propTypes = {
  state: PropType.shape({
    storyline: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    genre: PropType.string.isRequired,
  }).isRequired,
  handlechange: PropType.func.isRequired,
};

export default AddMovie2;
