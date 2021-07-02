import React from 'react';
import PropTypes from 'prop-types';
import Input from './InputFormAddMovie';
import Select from './SelectFormAddMovie';
import Button from './ButtonFormAddMovie';

class Form extends React.Component {
//   constructor() {
//     super();

  //      this.state = {
  //       abc: "",
  //     };
  //   }

  render() {
    const { title, subtitle, imagePath, storyline,
      rating, genre, handler, hc = handler, handleButton } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input name="title" spanText="Título" value={ title } handler={ hc } />
        <Input name="subtitle" spanText="Subtítulo" value={ subtitle } handler={ hc } />
        <Input name="image" spanText="Imagem" value={ imagePath } handler={ hc } />
        <Input name="storyline" spanText="Sinopse" value={ storyline } handler={ hc } />
        <Input name="rating" spanText="Avaliação" value={ rating } handler={ hc } />
        <Select name="genre" spanText="Gênero" value={ genre } handler={ hc } />
        <Button onClick={ handleButton } />
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  hc: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default Form;
