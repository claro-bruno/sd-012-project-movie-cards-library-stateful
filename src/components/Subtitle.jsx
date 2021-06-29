import React from 'react';
import propTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="Subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handleChange: propTypes.func,
  value: propTypes.string,
};

Subtitle.defaultProps = {
  handleChange: () => {},
  value: '',
};

export default Subtitle;
