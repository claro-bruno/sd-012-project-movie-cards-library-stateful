import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './MyComponents/LabelInput';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('alguma coisa');
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
    console.log(this.state);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelInput
          id="include-text"
          dataTestidLabel="title-input-label"
          textLabel="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          dataTestidInput="title-input"
        />
        <LabelInput
          id="input-subtitle"
          dataTestidLabel="subtitle-input-label"
          textLabel="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          dataTestidInput="subtitle-input"
        />
        <LabelInput
          id="add-image"
          dataTestidLabel="image-input-label"
          textLabel="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          dataTestidInput="image-input"
        />
        { onclick }
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
// Links
// Esse post me ajudou com a resolução do conteúdo
// https://pt.stackoverflow.com/questions/425673/pegar-valor-de-um-input-type-text-react
