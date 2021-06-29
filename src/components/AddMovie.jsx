// implement AddMovie component here
import React from 'react';
import Input from './components-items/Input';
import TextArea from './components-items/TextArea';
import TitleSubImage from './components-items/TitleSubImage';
import SelectForm from './components-items/SelectForm';
// import PropTypes from 'prop-types';

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
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleSubImage
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <TextArea
          inputLabel="Sinopse"
          inputDataTestId="storyline-input"
          inputLabelId="storyline-input-label"
          inputValue={ storyline }
          onChangeInput={ this.handleChange }
          name="storyline"
        />
        <Input
          inputLabel="Avaliação"
          inputDataTestId="rating-input"
          inputLabelId="rating-input-label"
          inputType="number"
          inputValue={ rating }
          onChangeInput={ this.handleChange }
          name="rating"
        />
        <SelectForm
          inputLabel="Gênero"
          inputDataTestId="genre-input"
          inputLabelId="genre-input-label"
          inputValue={ genre }
          onChangeSelect={ this.handleChange }
          name="genre"
        />
      </form>
    );
  }
}

export default AddMovie;
