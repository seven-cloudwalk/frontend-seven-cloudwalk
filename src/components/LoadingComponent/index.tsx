import loading from "./../../assets/icons/loading-gif.gif";
import * as S from "./style";



export const LoadingComponent = () => {
  return (
    <S.LoadingContainer>
    <S.LoadingCard>
      <S.LoadingHeading >
       <S.LoadingH1Component className="loading-modal--heading">Buscando informações...</S.LoadingH1Component>
      </S.LoadingHeading>
      <S.LoadingGifContainer className="loading-modal-gif--container">
        <S.LoadingGif className="loading--gif" src={loading}></S.LoadingGif>
      </S.LoadingGifContainer>
    <S.LoadingFooter className="loading-modal-footer--container">
       <S.FooterLoadingComponent className="loading-modal--footer">Por favor aguarde </S.FooterLoadingComponent>
      </S.LoadingFooter>
    </S.LoadingCard>
  </S.LoadingContainer>
  )
}
