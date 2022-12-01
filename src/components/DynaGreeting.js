import React from 'react'

function DynaGreeting() {
    let curdate = new Date();
    curdate=curdate.getHours();
    let greeting="";
    const cssStyle={};
    if(curdate >=1 && curdate<12){
         greeting='Good Morning';
         cssStyle.color='green'
    }else if(curdate>=12 && curdate<19){
          greeting='Good AfterNoon'
          cssStyle.color='brown'
    }else{
        greeting='Good Night'
        cssStyle.color='dark'
    }
  return (
    <>
     <h1>hellooooo<span style={cssStyle}>{greeting}</span></h1>   
    </>
  )
}

export default DynaGreeting