import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import { router } from './Containers/Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
