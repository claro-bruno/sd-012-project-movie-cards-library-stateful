import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: "",
      // rating: 0,
      // genre: "action",
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            id="title-input"
            onChange={ this.textInputHandler }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            id="subtitle-input"
            onChange={ this.textInputHandler }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="img-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            id="img-input"
            onChange={ this.textInputHandler }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
