import abcImage from "@/assets/images/ABCimage.png";
import defImage from "@/assets/images/DEFimage.png";

export interface VideoItem {
  title: string;
  description: string;
  image: string;
}

export const videoItems: VideoItem[] = [
  {
    title: "ABC",
    description:
      "In the same way as any other artistic domain, singing lends itself perfectly to self-teaching.",
    image: abcImage,
  },
  {
    title: "DEF",
    description:
      "The Fender Acoustic Guitar is the choice for both beginners and professionals offering a great sound.",
    image: defImage,
  },
];
