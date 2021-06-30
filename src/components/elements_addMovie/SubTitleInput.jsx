import React from 'react';
import PropTypes from 'prop-types';

class SubTitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="text" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ value }
            onChange={ onChange }
            name="subtitle"
          />
        </label>
      </div>
    );
  }
}

SubTitleInput.propTypes = {
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubTitleInput;
