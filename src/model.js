import image from "./assets/image.jpg";
import { TitleBlock, ColumnsBlock, ImageBlock, TextBlock } from "./classes/blocks";

export const model = [
  new TitleBlock("Let's create a website!", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "0.5rem 10rem",
    },
    imageStyles: {},
  }),
  new TextBlock(
    "You can create different blocks for your own website! Let's go!",
    {
      styles: {
        padding: "1.5rem",
        "text-align": "center",
      },
    }
  ),
  new ColumnsBlock(
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae, ea ad optio voluptatum recusandae autem eveniet officiis odit quasi.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae, ea ad optio voluptatum recusandae autem eveniet officiis odit quasi.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae, ea ad optio voluptatum recusandae autem eveniet officiis odit quasi.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae, ea ad optio voluptatum recusandae autem eveniet officiis odit quasi.",
    ],
    {
      styles: {
        padding: "1.5rem",
      },
    }
  ),
];
