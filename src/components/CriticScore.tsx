import { Badge } from "@chakra-ui/react";
import { color } from "framer-motion";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : " ";
  return (
    <Badge colorScheme={color} paddingX={2} fontSize="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
