import './App.css';

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
        <div className="row"></div>
      </div>
    </>
  );
}

export default App;
