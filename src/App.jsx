import React, { useState, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import './App.css'

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function App() {
  const [loading, setLoading] = useState(false);

  // let color = "red";


  // let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("red");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <CircleLoader

            color={color}
            loading={loading}
            /*  cssOverride={override} */
            // style={{
            //   display: "block", margin: "0 auto",
            //   borderColor: "red"
            // }}

            size={150}
            aria-label="Loading Spinner"
            data-testid="loader" />

          :
          // <img src="https://scontent.fist1-2.fna.fbcdn.net/v/t39.30808-6/300605754_102816295892106_2650946019783402378_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yhPUMwR8mR4AX_s21Kd&tn=GvDPzuB365ZNaPb7&_nc_ht=scontent.fist1-2.fna&oh=00_AfCl7sLsl3H6cW3nA8gMHNufu-VMaq8oyPgBYMe2cMKnkA&oe=63AF3AB5" alt="" />
          // <img src="https://scontent.fist1-2.fna.fbcdn.net/v/t39.30808-6/300605754_102816295892106_2650946019783402378_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yhPUMwR8mR4AX_s21Kd&tn=GvDPzuB365ZNaPb7&_nc_ht=scontent.fist1-2.fna&oh=00_AfCl7sLsl3H6cW3nA8gMHNufu-VMaq8oyPgBYMe2cMKnkA&oe=63AF3AB5" alt="" />
          <>
            <iframe src="https://giphy.com/embed/2ikwIgNrmPZICNmRyX" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/2ikwIgNrmPZICNmRyX"></a></p></>
        // <img src="https://c.tenor.com/32nHeCvxlwEAAAAM/you-tube-like-and-subscribe.gif" />

      }
      {/* <div className="usttekal">
        deneme usttekal

      </div>
      <div className='alttakal'>
        deneme alttakal
      </div> */}
    </div>
  )
}

export default App
