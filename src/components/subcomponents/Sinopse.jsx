import React from 'react';

class Sinopse extends React.Component {
  render() {
    return (
      <label data-testid="image-input-label" htmlFor="search" className="col-12">
        Sinopse
        <textarea
          className="form-control"
          type="text"
          placeholder="Insira um subtítulo"
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default Sinopse;
