// import logo from './logo.svg';
import './App.css';


function App() {
  
    const arr = [2,3,1,5,4,7];
    const arr1 = arr.sort(function (a,b){return a - b })

    document.getElementById("demo").innerHTML = arr1;
  return (   
        <p id="demo"> result</p>
        
  );
}

export default App;
