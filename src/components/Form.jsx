import styled from 'styled-components';
import useSelect from '../hooks/useSelect';

const FormContainer = styled.section`
	max-width: 100vw;
	display: flex;
	justify-content: flex-end;
	margin: -15% auto;
	padding: 1em 2em;
	position: relative;

	@media (max-width: 620px){
		margin: 0 auto;
		justify-content: center;
		padding: 0;
	}
	@media (max-width: 960px){
		margin: 0 auto;
		justify-content: center;
		padding: 0;
	}
`
const FormStyled = styled.article`
	width: 40%;
	background-color: #023059;
	border-radius: 32px;
	padding: 1em 2em;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	@media (max-width: 620px){
		width: 100%;
		display: flex;
		justify-content: center;
	}
	@media (max-width: 960px){
		width: 60%;
		display: flex;
		justify-content: center;
	}
`
const SubmitButton = styled.button`
	background-color: #F23847;
	border-radius: 12px;
	font-size: 1.4em;
	font-weight: 500;
	margin-bottom: -2em;
	width: 100%;
	padding: 0.4em 1.2em;
	margin: 1em auto;
	border: none;
	color: #F2F2F2;

	&:hover{
		background-color: #e95561;
		border-radius: 18px;
		cursor: pointer;
	}
`

const Form = ({setqueryValue, cryptoInfo}) => {

	const currencies = [
		{id:1, name:"Dolar EEUU", currency:"USD"},
		{id:2, name:"Euro", currency:"EUR"},
		{id:3, name:"Bolivar", currency:"VES"},
		{id:4, name:"Dolar Australiano", currency:"AUD"}
	]
	const [currency, SelectUI] = useSelect(currencies)
	const [crypto, SelectUIC] = useSelect(cryptoInfo)

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			currency,
			crypto
		}
		setqueryValue(data)
	}

	
	return (
		<FormContainer>
			<FormStyled>
				<form onSubmit={handleSubmit}>
					<SelectUI label="Select your currency" />
					<SelectUIC label="Select your Crypto currency" />
					<SubmitButton type="submit">
						Calculate
					</SubmitButton>
				</form>
			</FormStyled>
		</FormContainer>
	)
}

export default Form
