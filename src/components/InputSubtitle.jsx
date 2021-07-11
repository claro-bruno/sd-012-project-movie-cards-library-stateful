import React from 'react';
import { string, func } from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle, updateSubtitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor>
        Subtítulo
        <input
          type="text"
          onChange={ updateSubtitle }
          data-testid="subtitle-input"
          value={ subtitle }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  updateSubtitle: func.isRequired,
  subtitle: string.isRequired,
};

export default InputSubtitle;
