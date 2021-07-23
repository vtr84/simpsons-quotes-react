import './App.css';
import Quote from './components/Quote'
import {useState} from 'react'
import axios from 'axios'

const initialQuote = [{"quote":"Inflammable means flammable? What a country!","character":"Dr. Nick","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084","characterDirection":"Right"}]

function App() {
  const [quote, setQuote] = useState(...initialQuote)
  const fetchQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response)=> setQuote(response.data[0])) 
    .catch((error) => alert(error))
  }
  return (
    <div className='container'>
      <Quote quote={quote}/>
      <button onClick={fetchQuote}>Fetch a new Quote</button>
    </div>
  );
}

export default App;
