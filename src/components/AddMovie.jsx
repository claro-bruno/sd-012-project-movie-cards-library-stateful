import React from 'react';

class AddMovie extends React.Component {
    constructor() {
        super();
        this.state = {
          subtitle: '',
          title: '',
          imagePath: '',
          storyline: '',
          rating: 0,
          genre: 'action'
        }
    }
    render (){
        return (
            <div>ola</div>
        )
    }
}
export default AddMovie;