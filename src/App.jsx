import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import './App.css'

function App() {
  const [list, setList] = useState(null)
  
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
      "https://min-api.cryptocompare.com/data/top/totaltoptiervol?limit=10&assetClass=ALL&tsym=usd&api_key="
    + API_KEY
     )
    const json = await response.json()
    setList(json)
    }
    fetchAllCoinData().catch(console.error)
    }, [])

  // avoid accessing properties on null before data is loaded
  // console.log(list?.Data)
  
  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
        <ul>
          {(list?.Data ?? [])
            .map(data => data.CoinInfo)
            .filter(coinData =>
              coinData.Algorithm !== "N/A" && coinData.ProofType !== "N/A"
            )
            .map(coinData => (
              <li key={coinData.FullName}>{coinData.FullName}</li>
            ))}
        </ul>
    </div>
      
  )
}

export default App
