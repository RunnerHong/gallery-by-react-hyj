require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


//gain images related data
let imageDatas = require('../data/imageDatas.json');

let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，将图片信息转化为图片Url信息
imageDatas = (function genImageURL(imageDatasArr){
  for (i=0, j=imageDatasArr.length; i<j; i++){
    var siggleImageData = imageDatasArr[i];

    siggleImageData.imageURL = require('../images/'+
        siggleImageData.fileName);

    imageDatasArr[i] = siggleImageData;
  }

  return imageDatasArr;
})(imageDatas);

//imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>Hello World</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
