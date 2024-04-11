import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import BrowserRouter from './routers/BrowserRouter';
import './main.scss';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(<RouterProvider router={BrowserRouter} />);
