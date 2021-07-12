import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storylineInput" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storylineInput"
          name="storyline"
          type="text"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default StorylineInput;
