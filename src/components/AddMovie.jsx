import React from 'react';
import InputText from './InputText';
import Textarea from './Textarea';
import InputNumber from './InputNumber';

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
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelDescription="Título"
          inputId="title-input"
          value={ title }
          onChange={ ({ target }) => this.setState({ title: target.value }) }
        />
        <InputText
          labelDescription="Subtítulo"
          inputId="subtitle-input"
          value={ subtitle }
          onChange={ ({ target }) => this.setState({ subtitle: target.value }) }
        />
        <InputText
          labelDescription="Imagem"
          inputId="image-input"
          value={ imagePath }
          onChange={ ({ target }) => this.setState({ subtitle: target.value }) }
        />
        <Textarea
          labelDescription="Sinopse"
          inputId="storyline-input"
          value={ storyline }
          onChange={ ({ target }) => this.setState({ storyline: target.value }) }
        />
        <InputNumber
          labelDescription="Avaliação"
          inputId="rating-input"
          value={ rating }
          onChange={ ({ target }) => this.setState({ rating: target.value }) }
        />
      </form>
    );
  }
}

export default AddMovie;
