/* eslint-disable react-hooks/exhaustive-deps */
import Header from './components/Header'
import Form from './components/Form'
import { useEffect, useState } from 'react';
import { GetCryptocurrencies, GetCryptocurrenciesPrice } from './services/cryptocurrency.service';

function App() {

  const [queryValue, setqueryValue] = useState({})
  const [cryptoInfo, setCryptoInfo] = useState([])
  const [price, setPrice] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const GetCryptoPrice = async (currency, crypto) => {

    try {
      setPrice({})
      setIsLoading(true)
      const { data: { DISPLAY } } = await GetCryptocurrenciesPrice(currency, crypto)
      console.info(DISPLAY[`${queryValue.crypto}`][`${queryValue.currency}`])
      const info = DISPLAY[`${queryValue.crypto}`][`${queryValue.currency}`]
      setPrice(info)

    } catch (error) {
      console.info(error)
    }
    setIsLoading(false)
  }
  const GetCrypto = async () => {
    const { data } = await GetCryptocurrencies()
    const cryptos = data.Data.map(crypto => ({
      id: crypto.CoinInfo.Id,
      name: crypto.CoinInfo.FullName,
      currency: crypto.CoinInfo.Name
    }))
    console.info(cryptos)
    setCryptoInfo(cryptos)
  }

  useEffect(() => {
    "currency" in queryValue && GetCryptoPrice(queryValue.currency, queryValue.crypto)
    console.info(queryValue)
  }, [queryValue])

  useEffect(() => {
    GetCrypto()
  }, [])

  return (
    <>
      <Header price={price}
        isLoading={isLoading} />
      <Form setqueryValue={setqueryValue}
        cryptoInfo={cryptoInfo} />
    </>
  );
}

export default App;
