/* import { ExecOrderModal } from "../../Modal/Modal"; */
import { StyledConfirmedOrderModal } from "./styles";
import confirmedOrder from "./../../../assets/confirmedOrder.png";

const ConfirmedOrderModal = (/* { execOrderModal }: ExecOrderModal */) => {
  return (
    <StyledConfirmedOrderModal>
      <div>
        <img src={confirmedOrder} />
      </div>
      <h2>Pedido finalizado com sucesso!</h2>
      <p>O pedido foi encaminhado para a cozinha</p>
    </StyledConfirmedOrderModal>
  );
};

export default ConfirmedOrderModal;
