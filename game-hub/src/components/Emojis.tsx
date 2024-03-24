import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Prop {
  rating: number;
}

const Emojis = ({ rating }: Prop) => {
  if (rating < 3) null;
  const ratingMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbs up", boxSize: "25px" },
    5: { src: bullsEye, alt: "bulls eye", boxSize: "35px" },
  };
  return <Image {...ratingMap[rating]}></Image>;
};

export default Emojis;
