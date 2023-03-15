import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export class AframeDemo extends React.Component {

    render () {
        return (
          <Scene>
            {/* 有些可以 */}
            <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
            <Entity light={{type: 'point'}}/>
            <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
            <Entity text={{value: 'Hello, WebVR!'}}/>

            {/* 有些不能用 */}
            {/* <Entity particle-system={{preset: 'snow'}}/> */}
            
          </Scene>
        );
      }
}

// ReactDOM.render(<AframeDemo/>, document.querySelector('#sceneContainer'));