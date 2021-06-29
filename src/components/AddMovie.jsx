import React from 'react';
import PropTypes from 'prop-types';
import InputRender from './InputRender';
import TextArea from './TextArea';
import SelectMovie from './SelectMovie';

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

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputRender
          name="title"
          nome="Título"
          initValue={ title }
          onChange={ this.handleChange }
          nameState="title"
          onClick={ onClick }
        />
        <InputRender
          name="subtitle"
          nome="Subtítulo"
          initValue={ subtitle }
          onChange={ this.handleChange }
          nameState="subtitle"
        />
        <InputRender
          name="image"
          nome="Imagem"
          initValue={ imagePath }
          onChange={ this.handleChange }
          nameState="imagePath"
        />
        <TextArea
          initValue={ storyline }
          onChange={ this.handleChange }
        />
        <InputRender
          name="rating"
          nome="Avaliação"
          initValue={ rating }
          onChange={ this.handleChange }
          type="number"
          nameState="rating"
        />
        <SelectMovie
          initValue={ genre }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
