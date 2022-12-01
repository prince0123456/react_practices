import React from 'react'

function HtmlAttributeVsJSX() {
    const img1="https://picsum.photos/200/300";
    const img2="https://picsum.photos/250/400"
  return (
    <>
        <h contentEditable="true">HTML HtmlAttributeVsJSX</h>
        <div>
            <img src={img1} alt='random img'/>
            <img src={img1} alt='random img'/>
            <a href='#'>
            <img src={img2} alt='random img'/>
        </a>
        </div>
    </>
  )
}

export default HtmlAttributeVsJSX