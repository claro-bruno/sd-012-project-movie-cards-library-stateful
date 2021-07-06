import React from 'react';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          id="title-input"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    )
  }
}

export default TitleInput;
