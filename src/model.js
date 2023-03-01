import image from "./assets/image.svg";
import { TitleBlock, ColumnsBlock, ImageBlock, TextBlock } from "./classes/blocks";

export const model = [
  new TitleBlock("Let's create a website!", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #FFDF01, #493240)",
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
      "1. Create a text and put it in 'value field' on the right sidebar",
      "2. Create styles for your block",
      "3. Click button 'Add'",
      "Example. 'value': Hello, World!, 'styles': color: green; text-align: center ",
    ],
    {
      styles: {
        padding: "1.5rem",
      },
    }
  ),
];
