import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="sutitle-input"
        >
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
Subtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Subtitle;
