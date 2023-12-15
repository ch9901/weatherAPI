import seoul from "./contents/seoul.png";
import beijing from "./contents/beijing.png";
import tokyo from "./contents/tokyo.png";
import newyork from "./contents/newyork.png";

export const bgImg = (cityname) => {
  switch (cityname) {
    case "seoul":
      return seoul;
    case "beijing":
      return beijing;
    case "newyork":
      return newyork;
    case "tokyo":
      return tokyo;
  }
};
