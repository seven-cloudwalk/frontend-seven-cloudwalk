import React from "react";
import IconConfirmEmail from "../../assets/Icons/IconEmail.svg";
import LogoNft from "../../assets/Icons/LogoNature.png";
import * as S from "./style";

export const ConfirmEmailPage = () => {
  return (
    <S.MessageField>
      <S.ModalMessage>
        <S.TitleModal>Email confirmado!</S.TitleModal>

        <S.TextField>
          <S.IconConfEmail
            src={IconConfirmEmail}
            alt="Ilustração de confirmação de e-mail"
          />
          <S.TextModal>
            Obrigado por fazer parte desta causa, a Nature Future Ticket e o
            planeta Terra, agradecem!
          </S.TextModal>
        </S.TextField>

        <S.LogoNftField>
          <S.LogoNFT src={LogoNft} alt="Logo Nature Future Ticket" />
          <S.TitleLogoNFT>NATURE FUTURE TICKET</S.TitleLogoNFT>
        </S.LogoNftField>
        
      </S.ModalMessage>
    </S.MessageField>
  );
};
