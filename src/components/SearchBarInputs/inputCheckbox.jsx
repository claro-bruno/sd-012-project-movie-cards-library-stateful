import React from 'react';

class InputCheckbox extends React.Component {

  render() {
    const {checkedId, onChangeCheck} = this.props
    return <>
      <label
      htmlFor="inputCheckbox"
      data-testid="checkbox-input-label" >
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="inputCheckbox"
          checked={checkedId}
          onChange={onChangeCheck}
          data-testid="checkbox-input"
        />
      </label>
    </>
  }
}

export default InputCheckbox;