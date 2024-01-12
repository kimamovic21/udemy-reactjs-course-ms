import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import ChallengesPage from './pages/ChallengesPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;