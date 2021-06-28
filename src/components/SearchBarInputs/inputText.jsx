import React from 'react';

class InputText extends React.Component {

  render() {
    const { valueId, onChangeEvent } = this.props
    return (
      <label htmlFor="inputText" data-testid="text-input-label" >
        Inclui o texto:
        <input
          id="inputText"
          type="text"
          value={valueId}
          onChange={onChangeEvent}
          data-testid="text-input"
        />
      </label>
    )
  }
}

export default InputText;