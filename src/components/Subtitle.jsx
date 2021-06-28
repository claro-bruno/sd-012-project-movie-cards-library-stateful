import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, newCard } = this.props;

    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ newCard }
          data-testid="subtitle-input"
          id="subtitle"
        />
      </label>);
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  newCard: PropTypes.func.isRequired,
};

export default Subtitle;
