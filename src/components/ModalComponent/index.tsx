import React, { useEffect, useState } from "react";
import * as S from "./style";
import ManagerLogo from "../../assets/Images/ImgModal.png";
import { productType } from "../../types/types";
import productService from "../../services/productService";
import { LoadingComponent } from "../LoadingComponent";

export const ModalComponent = (props: {
  closeModal: boolean | any;
  treeData: productType;
  productID: string;
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState("");
  const [productId, setProductId] = useState<string | any>("");
  const [isInfoLoading, setIsInfoLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<productType>({
    name: "",
    category: "",
    description: "",
    price: 26,
    image: "",
  });

  useEffect(() => {
    setProducts(props.treeData);
    setProductId(props.productID);
    getProductByIdData(props.productID);
  }, []);

  const getProductByIdData = async (productID: string) => {
    setIsInfoLoading(true);
    const response = await productService.getProductById(productID);
    if (response) {
      setIsInfoLoading(false);
    }
    setProducts(response.data);
  };

  const handleOption = (event: any) => {
    setOption(event.target.id);
    console.log(event.target.id);
  };

  function closeModal() {
    setIsOpen(props.closeModal);
  }

  // const productsData = () => {
  //   setProducts(props.treeData);
  //   debugger
  //   console.log(props.treeData);

  // };

  return (
    <S.SpaceModal>
      {isInfoLoading ? <LoadingComponent/> : ''}
      <S.TitleModal>Painel de gerenciamento</S.TitleModal>
      <S.Modal>
        <S.FormModal>
          <S.TitleFormModal>
            {option == "CREATE" ? "Cadastrar Produto" : "Atualizar Produto"}
          </S.TitleFormModal>
          <S.InputField>
            <S.LabelModal htmlFor="name">Nome</S.LabelModal>
            <S.InputModal
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder={option == "CREATE" ? "" : products.name}
            />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="description">Descrição</S.LabelModal>
            <S.InputModal
              type="text"
              name="description"
              id="description"
              autoComplete="off"
              placeholder={option == "CREATE" ? "" : products.description}
            />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="price">Preço</S.LabelModal>
            <S.InputModal
              type="text"
              name="price"
              id="price"
              autoComplete="off"
              placeholder={option == "CREATE" ? "" : `R$ ${products.price}`}
            />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="image">Imagem</S.LabelModal>
            <S.InputModal
              type="text"
              name="image"
              id="image"
              placeholder={option == "CREATE" ? "" : products.image}
            />
          </S.InputField>

          <S.BtnModal>
            {option == "CREATE" ? "Cadastrar" : "Atualizar"}
          </S.BtnModal>
        </S.FormModal>

        <S.OptionsModal className="Options">
          <S.LogoModal src={ManagerLogo} />

          <S.BtnModalUpdate
            id={option == "CREATE" ? "UPDATE" : "CREATE"}
            onClick={handleOption}
          >
            {option == "CREATE"
              ? "Atualizar"
              : "Cadastro" || option == "UPDATE"
              ? "CadastrO"
              : "Atualizar"}
          </S.BtnModalUpdate>

          <S.BtnModalDelete id="DELETE">Deletar</S.BtnModalDelete>
        </S.OptionsModal>
      </S.Modal>
      <S.CloseBtnModal onClick={closeModal}>X</S.CloseBtnModal>
      {/* <Modal isOpen={modalIsOpen}
      /> */}
    </S.SpaceModal>
  );
};
