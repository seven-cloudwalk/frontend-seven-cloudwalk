import StarRatingComponent from 'react-star-rating-component';
import * as S from "./style";
import trees from "../../assets/Images/pngegg.png";


export const CardComponent = () => {
  return (
    <S.SpaceTest>
      <S.CardProduct>
        {/* {Trees.map((tree) => (    ))} */}
        <>
          <S.InfoProduct className="infoProduct">
            
            <S.LeftSide>
              <S.NameProduct>Ipêsssssssssss de deeeeee</S.NameProduct>
              <S.DescriptionProduct>
                Semente de Ipê Amarelo
              </S.DescriptionProduct>
              <StarRatingComponent 
              name='Rating'
              value={5}
              starCount={5}
              starColor={'#04bf55'}
              editing={false}
              />
            </S.LeftSide>

            <S.RightSide>
              <S.ImgProduct src={trees} alt="arvore" />
            </S.RightSide>

          </S.InfoProduct>

          <S.PriceBtnBuy>
            <S.PriceProduct>R$ 10,00</S.PriceProduct>
            <S.BtnBuyProduct type="submit">COMPRAR</S.BtnBuyProduct>
          </S.PriceBtnBuy>
        </>
      </S.CardProduct>
    </S.SpaceTest>
  );
};
