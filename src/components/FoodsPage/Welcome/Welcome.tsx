import { FormEvent, useContext, useState } from "react";
import { StyledWelcome } from "./styles";
import { getAPIandSetState } from "../../../utils/api";
import FoodsContext from "../../../context/FoodsContext";
import { setInput } from "../../../utils/helpers";

const Welcome = () => {
  const { setAllFoods, setIsLoading, isLoading } =
    useContext(FoodsContext) ?? {};

  const [searchInput, setSearchInput] = useState<string>("");

  const searchFoods = async (e: FormEvent) => {
    e.preventDefault();
    await getAPIandSetState({
      route: `foods?identifier=${searchInput}`,
      setState: setAllFoods,
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
        onChange={(e) => setInput({ e, setState: setSearchInput })}
        placeholder="O que você procura?"
      />
    </StyledWelcome>
  );
};

export default Welcome;
