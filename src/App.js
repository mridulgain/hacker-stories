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
  ];
  const list2 = [
    {
      id: '3',
      name: 'abhi',
      class: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '4',
      name: 'rohan',
      class: 2,
      roll_number: 5,
      marks: 97,
    },
  ];

  const [count, set_count] = React.useState(0)

  const [search, set_search] = React.useState('')

  const handleSearch = (event) => {
    set_search(event.target.value)
  }

  return(
    <div>
      <h1 class="heading">LIST OF STUDENTS</h1>
      <p>You clicked {count} number of times</p>
      <button type="button" onClick={ () => set_count(count+1)}>up the count</button>

      <input type="text" onChange={handleSearch}></input>

      <p>you are search for <strong><u>{search}</u></strong></p> 
      <div>
        <Student list={list}/>
        <hr />
        <Student list={list2}/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

const Student = (props) => {
  // const [current_student, set_student] = React.useState(props.list)
  // const deleteStudent = (event) => {
  //   deleteStudent(event.target.id)
  //   console.log(event.target.value)
  //   props.list.pop()
  // }
  return(
  <div>
    <ul>
      {props.list.map((item, index) => (
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