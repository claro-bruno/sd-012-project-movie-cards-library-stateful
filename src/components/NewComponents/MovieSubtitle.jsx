import React from 'react';

class MovieSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input name="subtitle" type="text" data-testid="subtitle-input" />
      </label>
    );
  }
}

export default MovieSubtitle;
