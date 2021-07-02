import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { changeHandler, subtitle } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ changeHandler }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
};

Subtitle.defaultProps = {
  subtitle: 'undefined',
};

export default Subtitle;
