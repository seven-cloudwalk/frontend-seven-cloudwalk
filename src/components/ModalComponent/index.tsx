import React, { useState } from "react";
import * as S from "./style";
import ManagerLogo from "../../assets/Images/ImgModal.png";
import Modal from "react-modal";

export const ModalComponent = (props: {closeModal: boolean}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(props.closeModal);
  }

  return (
    <S.SpaceModal>
   
      <S.TitleModal>Painel de gerenciamento</S.TitleModal>
      <S.Modal>
        <S.FormModal>
          <S.InputField>
            <S.LabelModal htmlFor="">Nome</S.LabelModal>
            <S.InputModal type="text" name="name" autoComplete="off" />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="">Descrição</S.LabelModal>
            <S.InputModal type="text" name="description" autoComplete="off" />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="">Preço</S.LabelModal>
            <S.InputModal type="text" name="price" autoComplete="off" />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="">Imagem</S.LabelModal>
            <S.InputModal type="text" name="image" autoComplete="off" />
          </S.InputField>

          <S.BtnModal>Criar</S.BtnModal>
        </S.FormModal>

        <S.OptionsModal className="Options">
          <S.LogoModal src={ManagerLogo} />

          <S.BtnModalUpdate>Editar</S.BtnModalUpdate>

          <S.BtnModalDelete>Deletar</S.BtnModalDelete>
        </S.OptionsModal>
      </S.Modal>
      <S.CloseBtnModal onClick={closeModal}>X</S.CloseBtnModal>
      {/* <Modal isOpen={modalIsOpen}
      /> */}

    </S.SpaceModal>
  );
};
