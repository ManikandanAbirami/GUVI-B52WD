import * as React from 'react';
import './App.css'

function App() {
  const list = [
    {
      title: 'React',
      url: 'https://react.dev/',
      points: 4,
      ObjID:0,
    },
    {
      title: 'Zen-Class',
      url: 'https://www.zenclass.in/',
      points: 5,
      ObjID:1,
    },{
      title: 'Guvi',
      url: 'https://www.guvi.com/',
      points: 3,
      ObjID:2,
    }
  ];
  return (
    <div>
      <h1>React - working with Lists!</h1>
      <ul>
        {list.map((item) => {
          return <li key={item.ObjID}>
            <span>
              <a href={item.url} target='_blank'>{item.title}</a>
            </span>
            <span></span>
            <span>{item.points}</span>
            </li>
        })}
      </ul>
      <div className="card" id='main'>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}
export default App
