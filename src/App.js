import './App.css';
import Quote from './components/Quote'
import LoadingSpinner from './components/LoadingSpinner';
import {useState} from 'react'
import axios from 'axios'

const initialQuote = [{"quote":"Inflammable means flammable? What a country!","character":"Dr. Nick","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084","characterDirection":"Right"}]

function App() {
  const [quote, setQuote] = useState(...initialQuote)
  const [loading, setLoading] = useState(false)
  const fetchQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response)=> {
      setLoading(false)
      setQuote(response.data[0])}) 
    .catch((error) => alert(error))
  }
  return (
    <div className='container'>
      
      <button onClick={()=>{setLoading(true)
      fetchQuote()}}>Fetch a new Quote</button>
      {loading ? <LoadingSpinner /> : <Quote quote={quote}/>}
    </div>
  );
}

export default App;
