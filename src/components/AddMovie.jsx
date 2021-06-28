import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.setState = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    // const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          dataTestidLabel="title-input-label"
          htmlFor="text-addmovie"
          labelText="Título"
          id="text-addmovie"
          type="text"
          name="title"
          dataTestidInput="title-input"
          // value={ title }
        />
        <Input
          type="text"
          labelText="Subtítulo"
          dataTestidLabel="subtitle-input-label"
          // value={ subtitle }
          dataTestidInput="subtitle-input"
          // change={ this.handleChange }
          name="subtitle"
        />
        <Input
          type="text"
          labelText="Imagem"
          dataTestidLabel="image-input-label"
          // value={ imagePath }
          dataTestidInput="image-input"
          // change={ this.handleChange }
          name="imagePath"
        />
        <label
          data-testid="storyline-input-label"
          htmlFor="textarea-addmovie"
        >
          Sinopse
          <textarea
            id="textarea-addmovie"
            // value={ storyline }
            data-testid="storyline-input"
            // onChange={ this.handleChange }
            name="storyline"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
