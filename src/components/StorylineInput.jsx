import React from 'react';

class StorylineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
    )
  }
}

export default StorylineInput;
