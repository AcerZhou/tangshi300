import React, {useState} from 'react';
import './App.css';
import chapter1 from './data/tangshi300_1.json';
import chapter2 from './data/tangshi300_2.json';
import chapter3 from './data/tangshi300_3.json';
import chapter4 from './data/tangshi300_4.json';
import chapter5 from './data/tangshi300_5.json';
import chapter6 from './data/tangshi300_6.json';
import chapter7 from './data/tangshi300_7.json';

function App() {
  let data = [];
  data.push(chapter1);
  data.push(chapter2);
  data.push(chapter3);
  data.push(chapter4);
  data.push(chapter5);
  data.push(chapter6);
  data.push(chapter7);
  let initChildrenShowing = {};

  for(let i = 0; i < data.length; i++){
    initChildrenShowing[i] = {
      showing: false,
    };

    Object.keys(data[i].poems).forEach(c => {
      initChildrenShowing[i][c] = false;
    })
  }

  const [poem, setPoem] = useState(data[0].poems.五言古诗[0]);
  const [isSideBarShowing, setSideBarShowing] = useState(true);
  const [childrenShowing, setChildrenShowing] = useState(initChildrenShowing);
  // const [isColorButtonShowing, setIsColorButtonShowing] = useState(false);

  return (
    <div className="App">
      <div className={`${isSideBarShowing ? 'App-Nav-Show' : 'App-Nav-Hide'} disable-scrollbars`}>
        <ul>
          {
            data.map((element, i) => {
              return (
              <div>
                <li key={i} onClick={() => setChildrenShowing({...childrenShowing, [i]:{...childrenShowing[i], showing: !childrenShowing[i].showing} }) }>
                  {element.chapter}
                  <div>                  
                  {
                    childrenShowing[i].showing ? 
                    <ul>
                    {Object.keys(element.poems).map((category, j) => {
                      return (<li key={j}  onClick={(e) =>{e.stopPropagation(); setChildrenShowing({...childrenShowing, [i]:{...childrenShowing[i], [category]: !childrenShowing[i][category]} })}}>
                        {category}
                        {
                          childrenShowing[i][category] ?
                          <ul>
                          {
                            element.poems[category].map((poem, k) => {
                                return <li key={k} onClick={(e) => {e.stopPropagation(); setPoem(poem)}}>
                                    {poem.title}
                                </li>
                            })
                          }
                          </ul> : null
                        }
                      </li>)
                    })}
                  </ul> :
                  null
                  }
                  </div>
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
