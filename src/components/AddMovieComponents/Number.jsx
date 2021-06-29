import React from 'react';

class Number extends React.Component {
  render() {
    const { name, value, onChange } = this.props;

    return (
      <label htmlFor="add-rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="add-rating"
          data-testid="rating-input"
          type="number"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Number;
