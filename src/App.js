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
      name: 'Abhijai',
      class: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '4',
      name: 'sarbjit',
      class: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '5',
      name: 'guneet',
      class: 3,
      roll_number: 4,
      marks: 95,
    }
  ];
  const list2 = [
    {
      id: '1',
      name: 'anshbir',
      class: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '2',
      name: 'rohan',
      class: 2,
      roll_number: 5,
      marks: 97,
    },
    {
      id: '3',
      name: 'sameer',
      class: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '4',
      name: 'sam',
      class: 2,
      roll_number: 5,
      marks: 97,
    },
    {
      id: '5',
      name: 'tiya',
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

  let [current_list, update_list] = React.useState(list)

  const deleteStudent = (event) => {
    console.log("deleting: ", event.target.value)
    let newList = []
    for(let i = 0, j = 0; i < current_list.length; i++){
      if (i == event.target.value){
        console.log("skip ", i)
        continue
      }
      else{
        newList[j] = current_list[i]
        j++
      }
    }
    update_list(newList)
  }

  // ----------------for the second list-------------------------
  let [current_list2, update_list2] = React.useState(list2)

  const deleteStudent2 = (event) => {
    console.log("deleting: ", event.target.value)
    let newList2 = []
    for(let i = 0, j = 0; i < current_list2.length; i++){
      if (i == event.target.value){
        console.log("skip ", i)
        continue
      }
      else{
        newList2[j] = current_list2[i]
        j++
      }
    }
    update_list2(newList2)
  }


  return(
    <div>
      <h1 class="heading">LIST OF STUDENTS</h1>
      <p>You clicked {count} number of times</p>
      <button type="button" onClick={ () => set_count(count+1)}>up the count</button>

      <input type="text" onChange={handleSearch}></input>

      <p>you are search for <strong><u>{search}</u></strong></p> 
      <div>
        <Student onRemove={deleteStudent} list={current_list}/>
        <hr />
        <Student onRemove={deleteStudent2} list={current_list2}/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

const Student = (props) => {
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