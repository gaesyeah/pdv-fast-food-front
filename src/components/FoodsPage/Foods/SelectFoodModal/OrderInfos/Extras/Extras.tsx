import { Extra } from "../../../../../../vite-env";
import { Infos } from "../../../styles";
import ExtraComponent from "./ExtraComponent/ExtraComponent";
import { StyledExtrasContainer } from "./styles";

const Extras = ({ extras }: { extras: Extra[] }) => {
  return (
    <div>
      <Infos>
        <h3>Adicionais</h3>
        <p>
          Selecione os ingredientes que você quer adicionar a mais no seu lanche
        </p>
      </Infos>
      <StyledExtrasContainer>
        <ul>
          {extras.map((extra) => (
            <ExtraComponent extra={extra} />
          ))}
        </ul>
      </StyledExtrasContainer>
    </div>
  );
};

export default Extras;
