import StarRatingComponent from "react-star-rating-component";
import * as S from "./style";
import trees from "../../assets/Images/pngegg.png";
import { Trees } from "../../mocks/tres";

export const CardComponent = () => {
  return (
    <S.SpaceCard>
      {Trees.map((tree) => (
        <S.CardProduct key={tree.cod}>
          <>
            <S.InfoProduct className="infoProduct">
              <S.LeftSide>
                <S.NameProduct>{tree.name}</S.NameProduct>
                <S.DescriptionProduct>
                  {tree.description}
                </S.DescriptionProduct>

                <StarRatingComponent
                  name="Rating"
                  value={5}
                  starCount={5}
                  starColor={"#04bf55"}
                  editing={false}
                />
              </S.LeftSide>

              <S.RightSide>
                <S.ImgProduct src={trees} alt="arvore" />
              </S.RightSide>
            </S.InfoProduct>

            <S.PriceBtnBuy>
              <S.PriceProduct>R$ {tree.price},00</S.PriceProduct>
              <S.BtnBuyProduct type="submit">COMPRAR</S.BtnBuyProduct>
            </S.PriceBtnBuy>
          </>
        </S.CardProduct>
      ))}
    </S.SpaceCard>
  );
};
