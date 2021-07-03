import React from 'react';

class Input extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <fieldset>
          <label data-testid="checkbox-input">
          Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          </label>
      </fieldset>
    );
  }
}

export default Input;
