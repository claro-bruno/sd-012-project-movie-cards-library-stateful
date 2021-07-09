import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { storyline, updateState } = this.props;
    return (
      <label htmlFor="storylineInput" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storylineInput"
          name="storyline"
          type="text"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ updateState }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string,
  updateState: PropTypes.func,
}.isRequired;

export default StorylineInput;
