import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";
import { errorSwal } from "./constants";

type GetAPIandSetState<T> = {
  route: string;
  setState: Dispatch<SetStateAction<T>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const getAPIandSetState = async <T>({
  route,
  setState,
  setIsLoading,
}: GetAPIandSetState<T>) => {
  try {
    setIsLoading(true);
    const { data } = await axios.get<T>(
      `${import.meta.env.VITE_BASE_URL}/${route}`,
    );

    setState(data);
    setIsLoading(false);
  } catch (err: unknown) {
    setIsLoading(false);
    Swal.fire(errorSwal);
  }
};
