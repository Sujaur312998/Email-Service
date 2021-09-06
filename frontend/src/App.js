import './App.css';
import Main from './component/main'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';

function App() {
  window.store = store
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;