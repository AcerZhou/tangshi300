import React, {useState} from 'react';
import './App.css';
import data from './data/tangshi300.json';

function App() {

  const [poem, setPoem] = useState(data[0]);
  const [isSideBarShowing, setSideBarShowing] = useState(true);
  const [isColorButtonShowing, setIsColorButtonShowing] = useState(false);

  return (
    <div className="App">
      <div className={`${isSideBarShowing ? 'App-Nav-Show' : 'App-Nav-Hide'} disable-scrollbars`}>
        <ul>
          {
            data.map((element, i) => {
              return (
              <div>
                <li key={i} onClick={() => setPoem(element)}>
                  {element.title}-{element.author}
                </li>
              </div>
              )
            })
          }

        </ul>
      </div>
      <header className={`App-Body Background-Blue`}>
        <button className="Nav-Button" onClick={() => setSideBarShowing(!isSideBarShowing)}>{isSideBarShowing ? 'X' : '☰'}</button>
        <div className="">
          {poem.title}<br/>
          {poem.author}<br/>
          {
            poem.paragraphs.map((line, i) => {
              return <p key={i}>{line}</p>
            })
          }
        </div>
        {/* <button className="Background-Button" onClick={() => setIsColorButtonShowing(!isColorButtonShowing)}>背</button>
        <ul className={`${isColorButtonShowing ? 'Color-Buttons':'Color-Buttons-Hide'}`}>
          <li className="Color-Button">黑</li>
          <li className="Color-Button">蓝</li>
          <li className="Color-Button">红</li>
        </ul> */}
      </header>
    </div>
  );
}

export default App;
