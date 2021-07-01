import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './childsComponents/addMovieTitle';
import AddMovieSubtitle from './childsComponents/addMovieSubtitle';
import AddMovieImagePath from './childsComponents/addMovieImagePath';
import AddMovieStoryline from './childsComponents/addMovieStoryline';
import AddMovieRating from './childsComponents/addMovieRating';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      // Para entender como reduzir as linhas neste render peguei a dica do problema resolvido no slack na thread abaixo
      // https://trybecourse.slack.com/archives/C01T2C18DSM/p1624915284086600?thread_ts=1624914367.084500&cid=C01T2C18DSM
      // Entender como fazer os componentes comunicarem seus estados depois das funções separadas
      // https://pt-br.reactjs.org/docs/faq-functions.html e
      // https://medium.com/luizalabs/comunica%C3%A7%C3%A3o-entre-componentes-no-react-6b42aac62321
      <form data-testid="add-movie-form">
        <AddMovieTitle handleChange={ this.handleChange } title={ title } />
        <AddMovieSubtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <AddMovieImagePath handleChange={ this.handleChange } imagePath={ imagePath } />
        <AddMovieStoryline handleChange={ this.handleChange } storyline={ storyline } />
        <AddMovieRating handleChange={ this.handleChange } rating={ rating } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;
