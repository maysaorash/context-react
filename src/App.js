import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import TodoList from './components/TodoList';



function App() {
  return (
    <div className="App">
     <TitleBar/> 
    <Navbar/>
    <TodoList/> 
    </div>
  );
}

export default App;