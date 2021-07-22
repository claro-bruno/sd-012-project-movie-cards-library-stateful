import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import Rating2 from './Rating2';
import Genero from './Genero';
import Button from './Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.OnClick = this.OnClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  OnClick() {
    const { onClick } = this.props;
    const { movie } = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(movie);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, OnClick } = this;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="addTitle">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="Subtítulo"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="ImagemPath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="Imagem"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <TextArea handleChange={ handleChange } storyline={ storyline } />
        <Rating2 handleChange={ handleChange } rating={ rating } />
        <Genero handleChange={ handleChange } genre={ genre } />
        <Button onClick={ OnClick } />
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
