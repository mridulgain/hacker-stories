import './App.css';
import * as React from 'react'

const App = () => {
  const list = [
    {
      id: '1',
      name: 'Jordan Walke',
      clas: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '2',
      name: 'Dan Abramov',
      clas: 2,
      roll_number: 5,
      marks: 97,
    },
    {
      id: '3',
      name: 'Abhijai',
      clas: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '4',
      name: 'sarbjit',
      clas: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '5',
      name: 'guneet',
      clas: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '6',
      name: 'Samir',
      clas: 3,
      roll_number: 4,
      marks: 95,
    }
  ];
  const list2 = [
    {
      id: '1',
      name: 'anshbir',
      clas: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '2',
      name: 'rohan',
      clas: 2,
      roll_number: 5,
      marks: 97,
    },
    {
      id: '3',
      name: 'sameer',
      clas: 3,
      roll_number: 4,
      marks: 95,
    },
    {
      id: '4',
      name: 'sam',
      clas: 2,
      roll_number: 5,
      marks: 97,
    },
    {
      id: '5',
      name: 'tiya',
      clas: 2,
      roll_number: 5,
      marks: 97,
    },
  ];
  const [search, set_search] = React.useState(
    localStorage.getItem('search') || 'Jordan'
  )

  React.useEffect(() => {
    localStorage.setItem('search', search)
  }, [search])

  const handleSearch = (event) => {
    set_search(event.target.value)
  }

  const searchList = list.filter(student => 
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  const searchList2 = list2.filter(student => 
    student.name.toLowerCase().includes(search.toLowerCase())
  );


  let [current_list, update_list] = React.useState(list)

  const resetList_1 = () => {
    update_list(list)
  }

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
  
  const resetList_2 = () => {
    update_list2(list2)
  }

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
      <Count />
      <br/>
      <Search search={search} onSearch={handleSearch} />
      <div>
        <Student onRemove={deleteStudent} list={searchList}/>
        <button type='button' onClick={resetList_1}>Reset1</button>
        <hr />
        <Student onRemove={deleteStudent2} list={searchList2}/>
        <button type='button' onClick={resetList_2}>Reset2</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

const Count = () => {
  const [count, set_count] = React.useState(0)
  return(
    <div>
      <p>You clicked {count} number of times</p>
      <div>
        <button type="button" onClick={ () => set_count(count+1)}>up the count</button>
        <button type="button" onClick={ () => set_count(count-1)}>low the count</button>
      </div>
    </div>
  )
}

const Search = ({ search, onSearch }) =>(
  <div>
    <input type="text" onChange={onSearch} value={search}></input>
    <p>you are search for <strong><u>{search}</u></strong></p>
  </div>
)




const Student = ({ list, onRemove }) => 
(
  <div>
    <ul>
      {list.map(( {id, ...item}, index ) => (
        <li key={id}>
          <Item {...item} />
          <button type="button" value={index} onClick={onRemove}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

const Item = ({ name, clas, roll_number, marks }) => (
  <div>
    <p>Name: {name}</p>
    <p>Class: {clas}</p>
    <p>Roll_number: {roll_number}</p>
    <p>Marks: {marks}</p>
  </div>
);

export default App;