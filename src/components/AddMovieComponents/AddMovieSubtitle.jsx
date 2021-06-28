import React from 'react';

class AddMovieSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
        />
      </label>
    );
  }
}

export default AddMovieSubtitle;
