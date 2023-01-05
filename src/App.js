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
  
  let [current_list, update_list] = React.useState(list)
  let [current_list2, update_list2] = React.useState(list2)


  const [searchTerm, set_search] = React.useState(
    localStorage.getItem('search') || 'Jordan'
  )

  const [searchTerm2, set_search2] = React.useState(
    localStorage.getItem('search2') || 'anshbir'
  )

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  React.useEffect(() => {
    localStorage.setItem('search2', searchTerm2)
  }, [searchTerm2])

  const handleSearch = (event) => {
    set_search(event.target.value)
  }

  const handleSearch2 = (event) => {
    set_search2(event.target.value)
  }

  current_list = current_list.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  current_list2 = current_list2.filter(student => 
    student.name.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  const resetlist_search = (list, reset_list, reset_search) => {
    reset_list(list)
    reset_search('')
  }

  const deleteStudent = (key, list, update_func) => {
    console.log("deleting: ", key)
    let newList = []
    for(let i = 0, j = 0; i < list.length; i++){
      if (i == key){
        console.log("skip ", i)
        continue
      }
      else{
        newList[j] = list[i]
        j++
      }
    }
    update_func(newList)
  }

  return(
    <div className='App'>
      <h1 class="heading">LIST OF STUDENTS</h1>
      <Count />
      <br/>
      <div>
        <MyInput
          id="search"
          search={searchTerm}
          onSearch={handleSearch}
          isFocused={true}
        >
        <strong>Search List-1: </strong>
        </MyInput>
        <Student onRemove={(event) => deleteStudent(event.target.value, current_list, update_list) } list={current_list}/>
        <button type='button' onClick={() => resetlist_search(list, update_list, set_search)}>Reset1</button>
        <hr />
        <MyInput
          id="search"
          search={searchTerm2}
          onSearch={handleSearch2}
          // isFocused={true}
        >
        <strong>Search List-2: </strong>
        </MyInput>
        <Student onRemove={(event) => deleteStudent(event.target.value, current_list2, update_list2) } list={current_list2}/>
        <button type='button' onClick={() => resetlist_search(list2, update_list2, set_search2)}>Reset2</button>
      </div>
    </div>
  )
}


const Count = () => {
  const [count, set_count] = React.useState(0)
  return(
    <div className='count-div'>
      <hr/>
      <p className='count-para'>You clicked <span className='para-span'>{count}</span> number of times</p>
      <div>
        <ul className='count'>
        <li>
            <a onClick={ () => set_count(count+1)}>Up the count</a>
          </li>
          <li>
            <a onClick={ () => set_count(0)}>Reset count</a>
          </li>
          <li>
            <a onClick={ () => set_count(count-1)}>Low the count</a>
          </li>
        </ul>
      </div>
      <hr/>
    </div>
  )
}

const MyInput = ({ id, search, onSearch, children, isFocused }) =>(
  <>
    <label htmlFor={id}>{children}</label>

    <input id={id}
     type="text"
     value={search}
     autoFocus={isFocused}
     onChange={onSearch} />
  </>
)

const Student = ({ list, onRemove }) => (
  <>
    <ul>
      {list.map(( {id, ...item}, index ) => (
        <li key={id}>
          <Item {...item} />
          <button type="button" value={index} onClick={onRemove}>Remove</button>
        </li>
      ))}
    </ul>
  </>
);

const Item = ({ name, clas, roll_number, marks }) => (
  <>
    <p>Name: {name}</p>
    <p>Class: {clas}</p>
    <p>Roll_number: {roll_number}</p>
    <p>Marks: {marks}</p>
  </>
);

export default App;