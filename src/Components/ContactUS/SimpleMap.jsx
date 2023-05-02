import { Component } from 'react';

class SimpleMap extends Component {
  render() {
    return (
      <div className='mt-16'>
        <div className='z-10 overflow-hidden p-5'>
          <iframe title='map' className='w-full lg:w-[90vw] h-[300px] lg:h-[370px] mx-auto rounded-md' id="gmap_canvas" src="https://maps.google.com/maps?q=%20daffodilinternationuniversity%20%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    )
  }
}

export default SimpleMap;