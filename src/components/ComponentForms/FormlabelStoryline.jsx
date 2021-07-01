import React from 'react';

class FormlabelStoryline extends React.Component {
  render() {
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          onChange={ this.handlechenge }
        />
      </label>
    );
  }
}

export default FormlabelStoryline;
