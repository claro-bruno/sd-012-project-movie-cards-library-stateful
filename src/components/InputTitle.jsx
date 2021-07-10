import React from 'react';

class InputTitle extends React.Component {
  render() {
    const { title, updateTitle } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor>
        Título
        <input
          type="text"
          onChange={ updateTitle }
          data-testid="title-input"
          value={ title }
        />
      </label>
    );
  }
}

export default InputTitle;
