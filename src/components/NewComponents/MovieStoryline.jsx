import React from 'react';

class MovieStoryline extends React.Component {
  render() {
    const { storyline, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieStoryline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChangeFunction }

        />
      </label>
    );
  }
}

export default MovieStoryline;
