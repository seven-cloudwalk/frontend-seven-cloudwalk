import { useEffect, useState } from "react";
import { createUserType, productType } from "../../types/types";
import { ModalComponent } from "../ModalComponent";
import Modal from "react-modal";
import EditLogo from "../../assets/Icons/editIcon.png";
import productService from "../../services/productService";
import * as S from "./style";

export const CardComponent = (props: { loggedUser: createUserType }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean | any>(false);
  const [products, setProducts] = useState<productType[]>([]);
  const [productId, setProductId] = useState<string | any>("");

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    props.loggedUser;
    getAllProductsData();
  }, []);

  const getAllProductsData = async () => {
    const response = await productService.getAllProducts();
    setProducts(response.data);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <S.SpaceCard>
        {products.map((tree) => (
          <>
            <S.CardProduct key={tree.id} onClick={() => setProductId(tree.id)}>
              <S.InfoProduct>
                <S.LeftSide>
                  <S.NameProduct>{tree.name}</S.NameProduct>
                  <S.DescriptionProduct>
                    {tree.description}
                  </S.DescriptionProduct>

                  {/* <StarRatingComponent
                    name="Rating"
                    value={5}
                    starCount={5}
                    starColor={"#04bf55"}
                    editing={false}
                  /> */}
                </S.LeftSide>

                <S.RightSide>
                  <S.ImgProduct src={tree.image} alt="Ilustração da arvore" />
                </S.RightSide>
              </S.InfoProduct>

              <S.PriceBtnBuy>
                <S.PriceProduct>R$ {tree.price}</S.PriceProduct>
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
                  backgroundColor: "#00000056",
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
        ))}
      </S.SpaceCard>
    </>
  );
};
