import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { StyledWelcome } from "./styles";
import { getAPIandSetState } from "../../../utils/api";
import FoodsContext from "../../../context/FoodsContext";

const Welcome = () => {
  const { setFoods, setIsLoading, isLoading } = useContext(FoodsContext) ?? {};

  const [searchInput, setSearchInput] = useState<string>("");

  const searchFoods = async (e: FormEvent) => {
    e.preventDefault();
    await getAPIandSetState({
      route: `foods?identifier=${searchInput}`,
      setState: setFoods,
      setIsLoading,
    });
    setSearchInput("");
  };

  return (
    <StyledWelcome onSubmit={(e) => searchFoods(e)}>
      <h2>Seja bem vindo!</h2>
      <input
        disabled={isLoading}
        value={searchInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
        placeholder="O que você procura?"
      />
    </StyledWelcome>
  );
};

export default Welcome;
