import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange2 } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id={ subtitle }
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange2 }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange2: PropTypes.func.isRequired,
};

export default Subtitle;
