import React from 'react';

export default class SearchBarCheckbox extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { onBookmarkedChange, bookmarkedOnly, } = this.props;
    return (
      <label
        htmlFor="checkbox"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          onChange={ onBookmarkedChange }
          type="Checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          id="checkbox"
        />
    </label>
    );
  }
}
