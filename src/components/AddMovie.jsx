import React from 'react';
import TextInput from './AddMovie-Inputs/TextInput';
import TextArea from './AddMovie-Inputs/TextArea';

class addMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePatch: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChanger = this.handleChanger.bind(this);
  }
  
  handleChanger({ target }) {
    const { name, value } = target;
    
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <TextInput
        valorInicial={ this.state.title }
        valorAlterado={ this.handleChanger }
        dataTestid="title-input"
        dataTestidLabel="title-input-label"
        labelTitle="Título"
        nome="title"
        tipo="text"
        />
        <TextInput
        valorInicial={ this.state.subtitle }
        valorAlterado={ this.handleChanger }
        dataTestid="subtitle-input"
        dataTestidLabel="subtitle-input-label"
        labelTitle="Subtítulo"
        nome="subtitle"
        tipo="text"
        />
        <TextInput
        valorInicial={ this.state.imagePatch }
        valorAlterado={ this.handleChanger }
        dataTestid="image-input"
        dataTestidLabel="image-input-label"
        labelTitle="Imagem"
        nome="imagePatch"
        tipo="text"
        />
        <TextArea
        valorInicial={ this.state.storyline }
        valorAlterado={ this.handleChanger }
        dataTestid="storyline-input"
        dataTestidLabel="storyline-input-label"
        nome="storyline"
        labelTitle="Sinopse"
        />
        <TextInput
        valorInicial={ this.state.rating }
        valorAlterado={ this.handleChanger }
        dataTestid="rating-input"
        dataTestidLabel="rating-input-label"
        labelTitle="Avaliação"
        nome="rating"
        tipo="number"
        />
        

      </form>
    );
  }
}

export default addMovie;