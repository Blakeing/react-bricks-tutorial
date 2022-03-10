import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import HeroUnit from "./MyHeroUnit";
import Thumbnail from "./Thumbnail";
import Gallery from "./Gallery";

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  HeroUnit, // Example custom brick
  Thumbnail,
  Gallery,
  // Put here your other bricks...
];

export default bricks;
