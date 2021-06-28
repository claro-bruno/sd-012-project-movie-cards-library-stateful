import React from 'react';

class InputCheckbox extends React.Component {

  render() {
    return <>
      <label
      htmlFor="inputCheckbox"
      data-testid="checkbox-input-label" >
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="inputCheckbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </label>
    </>
  }
}

export default InputCheckbox;