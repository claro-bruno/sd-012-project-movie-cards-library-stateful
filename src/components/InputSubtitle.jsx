import React from 'react';

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

export default InputSubtitle;
