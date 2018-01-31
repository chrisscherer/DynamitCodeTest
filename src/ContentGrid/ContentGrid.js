import React, { Component } from 'react';
import beefHotDog from '../Images/all-beef-hotdog.png';
import veganHotDog from '../Images/vegan-hotdog.png';
import vegeHotDog from '../Images/vegetarian-hotdog.png';
import bulletpoint from '../Images/bullet-point.png'
import './ContentGrid.css';

class App extends Component {
    render() {
        return (
            <div id="content-grid">
                <div class="content-panel">
                    <div class="text-block">
                        <div id="title-block">
                            <span id="bullet-point">&#8212;</span>
                            <span class="title">Gourmet All Beef Hotdogs</span><br />
                        </div>
                        <div id="detail-block">
                            <span class="details">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
                        </div>
                    </div>
                        <img class="content-image" src={beefHotDog} alt="hotdog" />
                </div>
                <div class="content-panel">
                        <img class="content-image" src={veganHotDog} alt="hotdog" />
                    <div class="text-block">
                        <div id="title-block">
                            <span id="bullet-point">&#8212;</span>
                            <span class="title">Vegan Hotdogs</span><br />
                        </div>
                        <div id="detail-block">
                            <span class="details">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
                        </div>
                    </div>

                </div>
                <div class="content-panel">
                    <div class="text-block">
                        <div id="title-block">
                            <span id="bullet-point">&#8212;</span>
                            <span class="title">Vegetarian Hotdogs</span><br />
                        </div>
                        <div id="detail-block">
                            <span class="details">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
                        </div>
                    </div>
                        <img class="content-image" src={vegeHotDog} alt="hotdog" />
                </div>
            </div>
        );
    }
}

export default App;
