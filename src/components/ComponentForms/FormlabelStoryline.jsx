import React from 'react';

class FormlabelStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
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
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default FormlabelStoryline;
