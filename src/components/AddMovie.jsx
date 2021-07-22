import React, { Component } from 'react';
import PropType from 'prop-types';
import AddMovie1 from './AddMovie1';
import AddMovie2 from './AddMovie2';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  alteraItem(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
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
        <AddMovie1
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          onChange={ this.alteraItem }
        />
        <AddMovie2
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          onChange={ this.alteraItem }
        />
        <button
          data-testid="send-button"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
