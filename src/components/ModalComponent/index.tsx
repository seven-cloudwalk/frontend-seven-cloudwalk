import React, { useEffect, useState } from "react";
import { LoadingComponent } from "../LoadingComponent";
import { productType } from "../../types/types";
import { toast } from "react-toastify";
import productService from "../../services/productService";
import ManagerLogo from "../../assets/Images/ImgModal.png";
import swal from "sweetalert";
import * as S from "./style";
import "./style.css"

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
    id: "",
    name: "",
    category: "",
    description: "",
    price: 26,
    image: "",
  });

  const [createProducts, setCreateProducts] = useState<productType>({
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
    compareType();
  }, []);

  const getProductByIdData = async (productID: string) => {
    setIsInfoLoading(true);
    const response = await productService.getProductById(productID);
    if (response) {
      setIsInfoLoading(false);
    }
    setProducts(response.data);
  };

  const compareType = () => {
    if (option == "UPDATE") {
      setCreateProducts({
        id: products.id,
        name: products.name,
        category: products.category,
        description: products.description,
        price: products.price,
        image: products.image,
      });
    } else if (option == "CREATE") {
      setCreateProducts({
        id: "",
        name: "",
        category: "",
        description: "",
        price: 26,
        image: "",
      });
    }
  };

  //TODO FAZER TODO O CRUD PRODUCTS PORRA
  const handleOption = (event: any) => {
    setOption(event.target.id);
    console.log(event.target.id);
  };

  const handleOptionBtn = () => {
    if (option == "CREATE") {
      createProduct();
    } else {
      updProduct();
    }
  };

  const handleOptionDelete = (event: any) => {
    setOption(event.target.id);
    deleteModalProducts();
  };

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "price") {
      setCreateProducts((values: productType) => ({
        ...values,
        [event.target.name]: parseInt(event.target.value),
      }));
    } else {
      setCreateProducts((values: productType) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const createProduct = async () => {
    const response = await productService.createProducts(createProducts);
    if (response.status == 201) {
      toast.success("Uma nova semente foi plantada! 🌱🌳");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error(`${response.data.message}`);
    }
  };

  const updProduct = async () => {
    const updateProduct = await productService.updateProducts(
      createProducts,
      productId
    );
    if (updateProduct.status != 400) {
      toast.success("Semente renovada!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error(`${updateProduct.data.message}`);
    }
  };

  const deleteProduct = async () => {
    const deleteProduct = await productService.deleteProducts(productId);
    if (deleteProduct) {
      toast.success("Semente removida com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error(`${deleteProduct.data.message}`);
    }
  };

  const deleteModalProducts = () => {
    swal({
      title: "Deseja apagar semente?",
      icon: "error",
      buttons: ["Não", "Sim"],
    }).then((resp) => {
      resp ? deleteProduct() : "";
    });
  };

  const SubmitProducts = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (option == "UPDATE") {
      updProduct();
    } else if (option == "CREATE") {
      createProduct();
    }
  };

  function closeModal() {
    setIsOpen(props.closeModal);
  }

  return (
    <S.SpaceModal>
      {isInfoLoading ? <LoadingComponent /> : ""}
      <S.TitleModal>Painel de gerenciamento</S.TitleModal>
      <S.Modal>
        <S.FormModal onSubmit={SubmitProducts}>
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
              onChange={handleChangesValues}
            />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="name">Categoria</S.LabelModal>
            <S.InputModal
              type="text"
              name="category"
              id="category"
              autoComplete="off"
              placeholder={option == "CREATE" ? "" : products.category}
              onChange={handleChangesValues}
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
              onChange={handleChangesValues}
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
              onChange={handleChangesValues}
            />
          </S.InputField>

          <S.InputField>
            <S.LabelModal htmlFor="image">Imagem</S.LabelModal>
            <S.InputModal
              type="url"
              name="image"
              id="image"
              placeholder={option == "CREATE" ? "" : products.image}
              onChange={handleChangesValues}
            />
          </S.InputField>

          <S.BtnModal onClick={handleOptionBtn} type="submit">
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
              ? "Cadastro"
              : "Atualizar"}
          </S.BtnModalUpdate>

          <S.BtnModalDelete id="DELETE" onClick={handleOptionDelete}>
            Deletar
          </S.BtnModalDelete>
        </S.OptionsModal>
      </S.Modal>
      <S.CloseBtnModal onClick={closeModal}>X</S.CloseBtnModal>
      {/* <Modal isOpen={modalIsOpen}
      /> */}
    </S.SpaceModal>
  );
};
