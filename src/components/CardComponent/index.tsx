import { Trees } from "../../mocks/tres";
import { useEffect, useState } from "react";
import { createUserType } from "../../types/types";
import Modal from "react-modal";
import EditLogo from "../../assets/Icons/editIcon.png";
import StarRatingComponent from "react-star-rating-component";
import trees from "../../assets/Images/pngegg.png";
import * as S from "./style";
import { ModalComponent } from "../ModalComponent";

export const CardComponent = (props: { loggedUser: createUserType }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      props.loggedUser;
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyle = {
    position: "absolute",
    backgroundColor: "transparent",
    with: "10px",
  };

  return (
    <>
      <S.SpaceCard>
        {Trees.map((tree) => (
          <>
            <S.CardProduct key={tree.cod}>
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
              style={{ content: { 
                border: 'none',
                backgroundColor: 'transparent',
              },
              overlay: {
                border: 'none',
                backgroundColor: '#00000024',
              }, }}
            >
              <ModalComponent closeModal={closeModal} />
            </Modal>
          </>
        ))}
      </S.SpaceCard>
    </>
  );
};
