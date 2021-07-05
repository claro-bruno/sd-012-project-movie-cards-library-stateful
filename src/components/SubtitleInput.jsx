import React, { Component } from 'react';

class SubtitleInput extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default SubtitleInput;
