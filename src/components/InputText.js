import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
  render() {
    const { subtitle } = this.props;
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            defaultValue={ subtitle }
          />
        </label>
      </div>
    );
  }
}

InputText.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
