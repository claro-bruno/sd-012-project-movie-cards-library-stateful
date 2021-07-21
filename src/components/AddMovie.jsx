import React, { Component } from 'react';
import PropType from 'prop-types';
import DadosIniciais from './DadosIniciais';
import DadosFinais from './DadosFinais';

class AddMovie extends Component {
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
    this.alteraItem = this.alteraItem.bind(this);
  }

  alteraItem(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <DadosIniciais
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          onChange={ this.alteraItem }
        />
        <DadosFinais
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          onChange={ this.alteraItem }
        />
        <button data-testid="send-button" >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
