import React from 'react';
import { string, func } from 'prop-types';

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
TextStoryline.propTypes = {
  updateStoryline: func.isRequired,
  storyline: string.isRequired,
};

export default TextStoryline;
