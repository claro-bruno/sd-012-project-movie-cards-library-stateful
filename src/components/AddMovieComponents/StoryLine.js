import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          type="textarea"
          name="storyLine"
          value={ storyLine }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLine.propTypes = ({
  storyLine: PropTypes.string,
}).isRequired;

export default StoryLine;
