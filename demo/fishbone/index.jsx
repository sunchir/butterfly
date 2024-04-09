'use strict';
import React, {Component} from 'react';
require('./index.less');
require('butterfly-dag/dist/index.css');

// const Canvas = require('../../../index.js').Canvas;
import { Canvas } from 'butterfly-dag';
const mockData = require('./data.js');

class Scene4New extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: false, // 可删除连线
      linkable: true,    // 可连线
      draggable: false,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          type: 'Straight'
        }
      }
    });
    this.canvas.draw(mockData, () => {

    });
    this.canvas.on('events', (data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className='fishbone'>
        <div className="fishbone-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

module.exports = Scene4New;
