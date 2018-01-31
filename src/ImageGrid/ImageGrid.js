import React, { Component } from 'react';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';
import img7 from '../Images/img7.png';
import img8 from '../Images/img8.png';
import img9 from '../Images/img9.png';
import img10 from '../Images/img10.png';
import img11 from '../Images/img11.png';
import img12 from '../Images/img12.png';
import './ImageGrid.css';

class App extends Component {
  render() {
    return (
      <div id="image-grid">
          <img src={img1} class="flex-image" alt="img1" />
          <img src={img2} class="flex-image" alt="img2" />
          <img src={img3} class="flex-image" alt="img3" />
          <img src={img4} class="flex-image" alt="img4" />
          <img src={img5} class="flex-image" alt="img5" />
          <img src={img6} class="flex-image" alt="img6" />
          <img src={img7} class="flex-image" alt="img7" />
          <img src={img8} class="flex-image" alt="img8" />
          <img src={img9} class="flex-image" alt="img9" />
          <img src={img10} class="flex-image" alt="img10" />
          <img src={img11} class="flex-image" alt="img11" />
          <img src={img12} class="flex-image" alt="img12" />
      </div>
    );
  }
}

export default App;
