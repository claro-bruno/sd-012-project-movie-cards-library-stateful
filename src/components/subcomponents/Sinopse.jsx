import React from 'react';

class Sinopse extends React.Component {
  render() {
    return (
      <label data-testid="storyline-input-label" htmlFor="search" className="col-12">
        Sinopse
        <textarea
          className="form-control"
          type="text"
          placeholder="Insira uma sinopse"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default Sinopse;
