import './App.css';
import { UserContextProvider } from './contexts/user';
import { Home } from './pages';

function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  );
}

export default App;
