import React from 'react';

class Appraisal extends React.Component {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          type="number"
          value={ value }
          name="rating"
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}
export default Appraisal;
