import styled from 'styled-components';
import ilustration from '../assets/img/43518.jpg';

const HeaderContainer = styled.header`
	text-align: center;
	position: relative;
	display: flex;
	align-items: flex-end;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 1em 2em;
	&::after{
		content: '';
		position: absolute;
		top: 0;
		display: block;
		border-radius: 32px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		height: 38vh;
		background-color: #f2f2f2;
		width: 100%;
		z-index: 0;
	}
`

const StyledH1 = styled.h1`
	font-weight: 400;
	font-size: 1.6em;
	color: #2944D9;
	border-radius: 12px;
	align-self: flex-start;
	padding: .4em 1.2em;
	z-index: 1;
	&::after{
		content: '';
		display: block;
		height: 8px;
		border-radius: 12px;
		width: 60%;
		background-color: #f85b68;
	}
	@media (min-width:720px){
		font-size: 2.4em;
	}
`

const StyledBanner = styled.img`
	border-radius: 32px;
	display: grid;
	width: 90vw;
	box-shadow: 0 1px 4px 1px #bec9cf;
	z-index: 1;
	@media (min-width:720px){
		width: 40vw;
	}
`

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<StyledBanner src={ilustration} />
				<StyledH1>Cryptocurrency Now</StyledH1>
			</HeaderContainer>
		</>
	)
	}

export default Header
