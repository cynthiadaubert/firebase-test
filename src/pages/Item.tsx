import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import ReactSwipe from 'react-swipe';

function Item() {

  const [currentIndex, setCurrentIndex] = React.useState(0);
  var reactSwipeEl = React.useRef(null);

  // parámetros
    const params = useParams()
    const [item, setItem] = useState(null)

    console.log("soy el params",params.Id)

    async function getItemResult(i){
      const response = await fetch("https://api.mercadolibre.com/items/"+params.Id)
      const json = await response.json()
      setItem(json)
/* console.log(json.pictures[0].secure_url)  */
    }

    useEffect(()=>{
      getItemResult(params.Id)
    },[params])

    if (!item){
      return <div>Loading...</div> // para evitar que el map se rompa si inicia sin valor
    }

  return (<div>
    <h1>{item.title}</h1>
    <h1>${item.price}</h1>
    <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={reactSwipeEl}
      >
      {item.pictures.map((pic)=>{
    return <img style={{height:"350px", width:"200px"}} src={pic.secure_url}/>
    })}
    </ReactSwipe>
    <button onClick={() => reactSwipeEl.current.prev()}>Prev</button>
      <button onClick={() => reactSwipeEl.current.next()}>Next</button>
  </div>)
}

export {Item};

{/* <img src={item.pictures[0].secure_url} /> */}