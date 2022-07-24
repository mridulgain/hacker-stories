import logo from './logo.svg';
import './App.css';

function sayHello(name){
  return "Hello "+name
}

function App() {
  let fname = "first"
  var lname = "name"
  return (
    <h1> {sayHello("ajay")} </h1>
  );
}

export default App;
