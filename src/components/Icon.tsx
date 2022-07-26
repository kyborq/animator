import React from "react";
import { icons, TIcon } from "../assets/icons";

type Props = {
  name: TIcon;
  color?: string;
};

export const Icon: React.FC<Props> = ({ name, color }) => {
  const IconComponent = icons[name];
  return <IconComponent stroke={color || "#000"} />;
};
