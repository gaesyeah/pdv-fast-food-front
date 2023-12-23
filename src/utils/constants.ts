import { color } from "./colors";

export const errorSwal: {
  icon: "error" | "info" | "question" | "success" | "warning";
  title: string;
  text: string;
  iconColor: string;
  confirmButtonColor: string;
} = {
  icon: "error",
  title: "Oops...",
  text: "Deu algo errado! Tente novamente mais tarde",
  iconColor: "red",
  confirmButtonColor: color.green1,
};

export const media = {
  mobile: "768px",
};
