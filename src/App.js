import { useEffect, useState } from 'react';
import './App.css';
import img1 from './images/man_1.png'
import img2 from './images/man_2.png'


let arr = [
  ['SHWETA TAMRAKAR', 'A FREELANCE WEB DEVELOPER', img1],
  ['JOHN THOMSON', 'A FREELANCE WEB DEVELOPER', img2]
]
function App() {
  const [active, setactive] = useState(true)

  return (
    <>
      <div className="container-fluid">
        <div className="row r1">
          <div className="col-lg-4">
            <div className="logo">CLARK</div>
          </div>
          <div className="col-lg-8">
            <div className="r1a">
              <button className='active'>
                <span>Home</span>
                <div className="line"></div>
              </button>
              <button>
                <span>About</span>
                <div className="line"></div>
              </button>
              <button>
                <span>Resume</span>
                <div className="line"></div>
              </button>
              <button>
                <span>Services</span>
                <div className="line"></div>
              </button>
              <button>
                <span>Skills</span>
                <div className="line"></div>
              </button>
              <button>
                <span>Projects</span>
                <div className="line"></div>
              </button>
              <button>
                <span>My Blog</span>
                <div className="line"></div>
              </button>
              <button>
                <span>Contact</span>
                <div className="line"></div>
              </button>
            </div>
          </div>

        </div>
        <div className="row r2">
          <div className="col-lg-6">
            <div className="r2a">
              <div className="txt1">
                HELLO!
              </div>
              <div className="txt2">
                I'm <span>{active ? arr[0][0] : arr[1][0]}</span>
              </div>

              <div className="txt3">
                {active ? arr[0][1] : arr[1][1]}
              </div>
              <div>
                <button>HIRE ME</button>
                <button>MY WORKS</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={active ? arr[0][2] : arr[1][2]} alt="image" />
          </div>
          <div className="r2b">
            <div className="mybtn">
              <button onClick={() => {
                setactive(true)
              }}>O</button>
              <button onClick={() => {
                setactive(false)
              }}>O</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
