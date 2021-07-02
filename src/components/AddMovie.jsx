// implement AddMovie component here
import React from 'react';
// import PropType from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // transformando handleChange em uma generica para
  // atribuir valores, conforte aula de revisão 12.3 dada
  // pelo Henrique Jensen
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            labelDataTestId="title-input-label"
            inputDataTestId="title-input-label"
            label="Título"
            name="title"
            type="text"
            value={ title }
            handleChange={ this.handleChange }
          />
          <Input
            labelDataTestId="subtitle-input-label"
            inputDataTestId="subtitle-input-label"
            label="Subtítulo"
            name="subtitle"
            type="text"
            value={ subtitle }
            handleChange={ this.handleChange }
          />
          <Input
            labelDataTestId="image-input-label"
            inputDataTestId="image-input-label"
            type="text"
            label="Imagem"
            name="imagePath"
            value={ imagePath }
            handleChange={ this.handleChange }
          />
        </form>

      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropType.func.isRequired,
// };

export default AddMovie;
