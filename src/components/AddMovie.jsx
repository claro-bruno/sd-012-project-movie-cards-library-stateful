import React from 'react';
import Genre from './addMovie/Genre';
import ImagePath from './addMovie/ImagePath';
import Subtitle from './addMovie/Subtitle';
import Title from './addMovie/Title';
import Rating from './addMovie/Rating';

class AddMovie extends React.Component {

  render() {
    return (
      <form>
        <Title
          title={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="importTextarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            id="importTextarea"
            onChange={ this.handleChange }
          />
        </label>
        <Rating
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submitMovie }
        >
          Adicionar filme
        </button>
      </form>

    );
  }
}
export default AddMovie;
