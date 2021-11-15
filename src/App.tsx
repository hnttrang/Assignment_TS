import logo from './assets/logo.svg';
import './style/style.scss';
import Home from './pages/home';

function App() {
  return (
    <div className="">
      <img src={logo} alt="logo"/>
      <Home></Home>
    </div>
  );
}

export default App;
