import axios from './base.service'


export const GetCryptocurrencies = async () => {
	return await axios.get(`top/totalvolfull?limit=10&tsym=USD`)
}

export const GetCryptocurrenciesPrice = async (fiat, crypto) => {
	return await axios.get(`pricemultifull?fsyms=${crypto}&tsyms=${fiat}`)
}