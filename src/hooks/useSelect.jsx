import { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
	width: 100%;
	height: 40px;
	font-size: 1.2em;
	line-height: 1;
	border: none;
	color: #011526;
	margin: 1em auto;
	border-radius: 8px;
`
const Label = styled.label`
	color: #f2f2f2;
	font-size: 1.1em;
	display: block;
`
const useSelect = (currencies) => {

	const _handleSelect = ({target:{value}}) => setOptions(value)
	const [option, setOptions] = useState('')

	const SelectUI = ({label}) => (
		<>
			<Label>{label}</Label>
			<Select value={option} onChange={_handleSelect}>
				<option value="">-Select your option-</option>
				{
					currencies.map(currency => <option key={currency.id} value={currency.currency}>{currency.name}</option>)
				}
			</Select>
		</>
	)

	return [option, SelectUI]
}

export default useSelect
