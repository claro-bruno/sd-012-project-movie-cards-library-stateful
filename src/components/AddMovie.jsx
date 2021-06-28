import React from 'react';
import PropTypes from 'prop-types';
import InputsAddMovie from './InputsAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputsAddMovie
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        Bora passar no lint com:
        {`${onClick}`}
      </form>
    );
  }
}

// const data = [
//   { name: 'title', value: title, tid: 'title-input', desc: 'Título' },
//   { name: 'subtitle', value: subtitle, tid: 'subtitle-input', desc: 'Subtítulo' },
//   { name: 'imagePath', value: imagePath, tid: 'image-input', desc: 'Imagem' },
// ];

// {data.map((datum, key) => {
//   return (
//   <label key={ key } htmlFor={ datum.tid } data-tid={ `${datum.tid}-label` }>
//     {datum.desc}
//     <input
//       name={ datum.name }
//       type={ datum.type }
//       value={ datum.value }
//       data-testid={ datum.id }
//       onChange={ () => this.handleChange(event) }
//     />
//   </label>
// )})}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
