import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider/>
     <TitleBar/> 
    <Navbar/>
    <TodoList/> 
    </div>
  );
}

export default App;