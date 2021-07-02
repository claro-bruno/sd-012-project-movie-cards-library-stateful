/* eslint-disable max-len */
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import FormLabeltitle from './ComponentForms/FormLabeltitle';
import Formlabelsubtitle from './ComponentForms/Formlabelsubtitle';
import Formlabelimage from './ComponentForms/Formlabelimage';
import FormlabelStoryline from './ComponentForms/FormlabelStoryline';
import Formlabelrating from './ComponentForms/Formlabelrating';
import Formlabelgenre from './ComponentForms/Formlabelgenre';

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
    this.handlechenge = this.handlechenge.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handlechenge({ target }) {
    const { name, value } = target;
    // essa função vai alterar a galera toda

    this.setState({
      [name]: value,
    });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { rating, genre, title, subtitle, storyline, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormLabeltitle
          value={ title }
          onChange={ this.handlechenge }
        />
        <Formlabelsubtitle
          value={ subtitle }
          onChange={ this.handlechenge }
        />
        <Formlabelimage
          value={ imagePath }
          onChange={ this.handlechenge }
        />
        <FormlabelStoryline
          value={ storyline }
          onChange={ this.handlechenge }
        />
        <Formlabelrating
          value={ rating }
          onChange={ this.handlechenge }
        />
        <Formlabelgenre
          value={ genre }
          onChange={ this.handlechenge }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
