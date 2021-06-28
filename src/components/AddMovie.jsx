// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import SubTitulo from './SubTitulo';
import CaminhoImagem from './CaminhoImagem';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliação';
import Genero from './Genero';
import Botao from './Botão';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  submit() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleChange={ this.handleChange } />
        <SubTitulo value={ subtitle } handleChange={ this.handleChange } />
        <CaminhoImagem value={ imagePath } handleChange={ this.handleChange } />
        <Sinopse value={ storyLine } handleChange={ this.handleChange } />
        <Avaliacao value={ rating } handleChange={ this.handleChange } />
        <Genero value={ genre } handleChange={ this.handleChange } />
        <Botao submit={ this.submit } onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
