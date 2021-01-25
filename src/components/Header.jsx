import styled from 'styled-components';
import ilustration from '../assets/img/43518.jpg';
import ReactLoading from 'react-loading';

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
		height: 30vh;
		background-color: #f2f2f2;
		width: 100%;
		z-index: 0;
	}
	@media (max-width:720px){
		&::after{
			height: 40vh;
		}
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
	@media (max-width:720px){
		margin-top: 5em;
	}
`
const StyledBanner = styled.div`
	border-radius: 32px;
	display: grid;
	width: 100%;
	position: relative;
	height: 195px;
	background-image: url(${ilustration});
	background-size: cover;
	background-repeat: no-repeat;
	box-shadow: 0 1px 4px 1px #bec9cf;
	z-index: 1;
	@media (min-width:720px){
		width: 35vw;
		height: 280px;
	}
`
const StyledInfo = styled.div`
	border-radius: 32px;
	display: grid;
	background-color: #5dbff3;
	width: 100%;
	text-align: center;
	box-shadow: 0 1px 4px 1px #5dbff3;
	z-index: 3;
	font-size: 1.2em;
	height: 280px;
	opacity: .9;
	@media (min-width:720px){
		width: 100%;
	}
`
const StyledLoader = styled.div`
	border-radius: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #5dbff3;
	width: 100%;
	text-align: center;
	box-shadow: 0 1px 4px 1px #5dbff3;
	z-index: 3;
	font-size: 1.2em;
	height: 280px;
	opacity: .9;
	@media (min-width:720px){
		width: 100%;
	}
`
const StyledP = styled.p`
	font-size: 1em;
	margin: 0;
	line-height: .1;
	font-weight: 500;
	letter-spacing: 1;
	color: #042750;
`
const StyledH2 = styled.h2`
	font-size: 1.8em;
	font-weight: 700;
	margin: 1em;
	color: #101f74;

`
const Loader = () => (
	<StyledLoader>
		<ReactLoading type="spin" color="#101f74" height={100} width={140} />
	</StyledLoader>
);

const Header = ({price, isLoading}) => {
	return (
		<>
			<HeaderContainer>
				<StyledBanner >
 
					{"PRICE" in price 
					? <StyledInfo>
							<StyledH2>{price.PRICE}</StyledH2>
							<StyledP>High Hour: {price.HIGHHOUR}</StyledP>
							<StyledP>Low Hour: {price.LOWHOUR}</StyledP>
							<StyledP>Last Update: {price.LASTUPDATE}</StyledP>
						</StyledInfo> 
					: null
					}
					{isLoading && <Loader />}

					

				</StyledBanner>

				<StyledH1>Cryptocurrency Now</StyledH1>
			</HeaderContainer>
		</>
	)
	}

export default Header
