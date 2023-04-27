import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import PageRoutes from './routes/PageRoutes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
