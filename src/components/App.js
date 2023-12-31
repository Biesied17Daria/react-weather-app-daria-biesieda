import '../styles/App.css';
import Weather from './Weather';

console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity='Berlin' />
        <footer>
          This project was coded by <a href='https://deft-narwhal-77936b.netlify.app/' target='_blank' rel='noreferrer'>Daria Biesieda</a>  and is {" "}
          <a href='https://github.com/Biesied17Daria/react-weather-app-daria-biesieda'
            target='_blank' rel='noreferrer'>
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
