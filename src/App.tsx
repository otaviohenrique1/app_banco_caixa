import { GlobalContext } from './context';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <GlobalContext>
      <AppRoutes />
    </GlobalContext>
  );
}

export default App;
