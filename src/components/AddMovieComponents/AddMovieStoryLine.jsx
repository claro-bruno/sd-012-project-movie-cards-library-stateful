import React from 'react';

class AddMovieStoryLine extends React.Component {
  render() {
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
        />
      </label>
    );
  }
}

export default AddMovieStoryLine;
