import { CardContainer } from "./PokeCard.styles";



const PokeCard = (props) => {
    const { imgUrl, name } = props;
    return (
        <CardContainer>
        <img src={imgUrl} />
        </CardContainer>
    )
}

export default PokeCard;