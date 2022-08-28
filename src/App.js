import './App.css';
import * as React from 'react'

const App = () => {
  const list = [
    {
      id: '1',
      name: 'Jordan Walke',
      class: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '2',
      name: 'Dan Abramov',
      class: 2,
      roll_number: 5,
      marks: 97,
    },
    {
      id: '3',
      name: 'abhi',
      class: 3,
      roll_number: 6,
      marks: 95,
    },
    {
      id: '4',
      name: 'rohan',
      class: 2,
      roll_number: 7,
      marks: 97,
    },
  ];

  let [currentList, updateList] = React.useState(list)

  const deleteStudent = (event) => {  
    console.log("deleteing: ", event.target.value)
    let newList = []
    for(let i = 0, j = 0; i < currentList.length; i++){
      if(i == event.target.value){
        console.log("skip ",i)
        continue
      }
      else{
        newList[j] = currentList[i]
        j++
      }
    }
    updateList(newList) 
  }

  return(
    <div>
      <h1>LIST OF STUDENTS</h1>
      <div>
        <Student onRemove={deleteStudent} list={currentList}/>
      </div>
    </div>
  )
}

const Student = (props) => {
  return(
  <div>
    <ul>
      {props.list.map( (item, index) => (
        <li key={item.id}>
          <p>Name: {item.name}</p>
          <p>Class: {item.class}</p>
          <p>Roll_number: {item.roll_number}</p>
          <p>Marks: {item.marks}</p>
          <button type="button" value={index} onClick={props.onRemove}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
)};

export default App;