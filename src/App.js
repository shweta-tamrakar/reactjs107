import './App.css';
import img1 from './images/man_1.png'
import img2 from './images/man_2.png'

function App() {
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
                I'm <span>SHWETA TAMRAKAR</span>
              </div>

              <div className="txt3">
                A FREELANCE WEB DEVELOPER
              </div>
              <div>
                <button>HIRE ME</button>
                <button>MY WORKS</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={img1} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
