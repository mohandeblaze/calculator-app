import './App.css';
import useThemeChanger from './hooks/useThemeChanger';

function App() {
  useThemeChanger();

  return (
    <div className="App bg-white dark:bg-black">
      <h1 className="text-3xl font-bold text-blue-400">Hello world!</h1>
    </div>
  );
}

export default App;
