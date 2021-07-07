import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { changeHandler, subtitle } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ changeHandler }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
};

Subtitle.defaultProps = {
  subtitle: 'undefined',
};

export default Subtitle;
