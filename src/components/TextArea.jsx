import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, hC } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ hC }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  hC: PropTypes.func.isRequired,
};

export default TextArea;
