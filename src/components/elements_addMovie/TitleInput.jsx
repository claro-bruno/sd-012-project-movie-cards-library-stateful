import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="input" data-testid="title-input-label">
          Título
          <input
            value={ value }
            data-testid="title-input"
            onChange={ onChange }
            name="title"
          />
        </label>
      </div>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
