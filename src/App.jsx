import { useState } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import './App.css'

function App() {
  const [list, setlist] = useState(null)
  const baseUrl = 'https://min-api.cryptocompare.com/data/top/totalvolfull';
  const params = {"limit":"10","tsym":"USD","API":API_KEY};
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();
  useEffect(() => {
    fetchAllCoinData() => {
      fetch(url, options)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    }

}, [])

  return (
    <>
      <div>
     
      </div>
      
    </>
  )
}

export default App
