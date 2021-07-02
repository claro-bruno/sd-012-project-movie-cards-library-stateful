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
      storyline: '',
      rating: 0,
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

  // renderInput(label, name, type, value, handleChange) {
  //   return (
  //     <Input
  //       labelDataTestId={ `${name}-input-label` }
  //       inputDataTestId={ `${name}-input` }
  //       label={ label }
  //       name={ name }
  //       type={ type }
  //       value={ value }
  //       handleChange={ handleChange }
  //     />
  //   );
  // }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            label="Título"
            name="title"
            type="text"
            value={ title }
            handleChange={ this.handleChange }
          />
          <Input
            label="Subtítulo"
            name="subtitle"
            type="text"
            value={ subtitle }
            handleChange={ this.handleChange }
          />
          <Input
            type="text"
            label="Imagem"
            name="imagePath"
            value={ imagePath }
            handleChange={ this.handleChange }
          />
          <Input
            type="textarea"
            label="Sinopse"
            name="storyline"
            value={ storyline }
            handleChange={ this.handleChange }
          />
          <Input
            type="number"
            label="Avaliação"
            name="rating"
            value={ rating }
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
