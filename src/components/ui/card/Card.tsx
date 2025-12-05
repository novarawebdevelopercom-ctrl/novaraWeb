
import { Card as C } from "@mantine/core";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = (props) => {
  return <C {...props} />;
};

