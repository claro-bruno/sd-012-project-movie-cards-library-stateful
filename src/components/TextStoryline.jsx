import React from 'react';

class TextStoryline extends React.Component {
  render() {
    const { storyline, updateStoryline } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor>
        Sinopse
        <textarea
          onChange={ updateStoryline }
          data-testid="storyline-input"
          value={ storyline }
        />
      </label>
    );
  }
}

export default TextStoryline;
