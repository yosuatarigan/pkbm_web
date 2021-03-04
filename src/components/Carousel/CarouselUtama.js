import React from 'react';
import gambar1 from '../../Media/image/bareng.jpeg';
import gambar2 from '../../Media/image/prestasi.jpeg';
import gambar3 from '../../Media/image/belajar1.jpeg';
import { UncontrolledCarousel } from 'reactstrap';


var sectionStyle = {
  // width: "max",
  // height: "400px",
  maxwidth : "100%",
  // backgroundSize : "cover",
  height : "auto",
  backgroundRepeat : "no-repeat"
};

const fotos1 = ()=>{
  return(
    <img src={gambar1}/>
  )
}


  

const items = [
    {
      src: gambar1,
      altText: 'Slide 1',
      width : '50px',
      height : '100px',
      style : {sectionStyle},
      // caption: 'Slide 1',
      // header: 'Slide 1 Header',
      viewBox: "0 0 800 400",
      key: '1'
    },
    {
      src: gambar2,
      altText: 'Slide 2',
      width : '50px',
      // caption: 'Slide 2',
      // header: 'Slide 2 Header',
      viewBox: "0 0 800 400",
      key: '2'
    },
    {
      src: gambar3,
      altText: 'Slide 3',
      width : '50px',
      // caption: 'Slide 3',
      // header: 'Slide 3 Header',
      viewBox: "0 0 800 400",
      key: '3'
    }
  ];

  

const CarouselUtama = ()=>{
    return(
      <div >
        <UncontrolledCarousel items={items}/>
        </div>
    );
}

export default CarouselUtama;