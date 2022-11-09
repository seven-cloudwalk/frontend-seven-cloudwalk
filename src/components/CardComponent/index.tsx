import { useEffect, useState } from "react";
import { createUserType, productType } from "../../types/types";
import { ModalComponent } from "../ModalComponent";
import { LoadingComponent } from "../LoadingComponent";
import StarRatingComponent from "react-star-rating-component";
import productService from "../../services/productService";
import EditLogo from "../../assets/Icons/editIcon.png";
import Modal from "react-modal";
import LoadingIconCard from "../../assets/Icons/LoadingHome.gif";
import * as S from "./style";

export const CardComponent = (props: {
  loggedUser: createUserType;
  inputSearch: string;
  infoLoading: boolean;
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean | any>(false);
  const [products, setProducts] = useState<productType[]>([
    {
      name: "",
      category: "",
      description: "",
      price: 26,
      image: "",
    },
  ]);
  const [productId, setProductId] = useState<string | any>("");
  const [isInfoLoading, setIsInfoLoading] = useState<boolean>(false);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    props.loggedUser;
    getAllProductsData();
    setIsInfoLoading(props.infoLoading);
    console.log(props.infoLoading);
  }, []);

  const getAllProductsData = async () => {
    setIsInfoLoading(props.infoLoading);
    const response = await productService.getAllProducts();
    if (response) {
      setIsInfoLoading(!props.infoLoading);
    }
    setProducts(response.data);
  };

  const searchProducts = products.filter((prod) => {
    if (props.inputSearch === "") {
      return prod;
    } else {
      return prod.name.toLowerCase().includes(props.inputSearch);
    }
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <S.SpaceCard>
        {isInfoLoading ? (
          <S.LoadingIcon src={LoadingIconCard} />
        ) : (
          searchProducts.map((tree) => (
            <>
              <S.CardProduct
                key={tree.id}
                onClick={() => setProductId(tree.id)}
              >
                <S.InfoProduct>
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
                    <S.ImgProduct
                      src={tree.image}
                      alt={`Imagem ilustrativa da arvore ${tree.name}`}
                    />
                  </S.RightSide>
                </S.InfoProduct>

                <S.PriceBtnBuy>
                  <S.PriceProduct>
                    {tree.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </S.PriceProduct>
                  {props.loggedUser.roleAdmin === true ? (
                    <S.OptionsBtn onClick={openModal} src={EditLogo} />
                  ) : (
                    ""
                  )}
                  <S.BtnBuyProduct type="submit">COMPRAR</S.BtnBuyProduct>
                </S.PriceBtnBuy>
              </S.CardProduct>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                  },
                  overlay: {
                    border: "none",
                    backgroundColor: "#00000013",
                  },
                }}
              >
                <ModalComponent
                  treeData={tree}
                  productID={productId}
                  closeModal={closeModal}
                />
              </Modal>
            </>
          ))
        )}
      </S.SpaceCard>
    </>
  );
};
