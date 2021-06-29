// implement AddMovie component here
import React from 'react';
import Input from './components-items/Input';
import TextArea from './components-items/TextArea';
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
        <Input
          inputLabel="Título"
          inputDataTestId="title-input"
          inputLabelId="title-input-label"
          inputType="text"
          inputValue={ title }
          onChangeInput={ this.handleChange }
          name="title"
        />
        <Input
          inputLabel="Subtítulo"
          inputDataTestId="subtitle-input"
          inputLabelId="subtitle-input-label"
          inputType="text"
          inputValue={ subtitle }
          onChangeInput={ this.handleChange }
          name="subtitle"
        />
        <Input
          inputLabel="Imagem"
          inputDataTestId="image-input"
          inputLabelId="image-input-label"
          inputType="text"
          inputValue={ imagePath }
          onChangeInput={ this.handleChange }
          name="imagePath"
        />
        <TextArea
          inputLabel="Sinopse"
          inputDataTestId="storyline-input"
          inputLabelId="storyline-input-label"
          inputValue={ storyline }
          onChangeInput={ this.handleChange }
          name="storyline"
        />
      </form>
    );
  }
}

export default AddMovie;
