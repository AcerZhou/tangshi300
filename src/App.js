import React, {useState} from 'react';
import './App.css';
import data from './data/tangshi300.json';

function App() {

  const [poem, setPoem] = useState(data[0]);

  return (
    <div className="App">
      <div className="App-Nav disable-scrollbars">
        <ul>
          {
            data.map((element, i) => {
              return (
              <div>
                <li key={i} onClick={() => setPoem(element)}>
                  {element.title}-{element.author}
                </li>
                <hr/>
              </div>
              )
            })
          }

        </ul>
      </div>
      <header className="App-Body">
        {poem.title}<br/>
        {poem.author}<br/>
        {
          poem.paragraphs.map((line, i) => {
            return <p key={i}>{line}</p>
          })
        }
      </header>
    </div>
  );
}

export default App;
