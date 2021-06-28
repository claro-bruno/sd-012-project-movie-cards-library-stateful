import React from 'react';
// import FormAddMovie from './FormAddMovie';
import InputSimple from './InputSimple';
import InputTextArea from './InputTextArea';
import ImgInputAddMovie from './ImgInputAddMovie';
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
      // genre: "action",
    };
    this.handler = this.handler.bind(this);
  }

  handler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputSimple
          labelText="Título"
          name="title"
          value={ title }
          onChange={ this.handler }
        />
        <InputSimple
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handler }
        />
        <ImgInputAddMovie value={ imagePath } onChange={ this.handler } />
        <InputTextArea
          name="storyline"
          value={ storyline }
          onChange={ this.handler }
        />
        <InputSimple
          name="rating"
          type="number"
          value={ rating }
          labelText="Avaliação"
          onChange={ this.handler }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
