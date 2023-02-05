import Iphone from "../../assets/iphone.png";
import Samsung from "../../assets/samsung.png";
import Google from "../../assets/google-phone.png";

export const ImageSelector = (product) => {
  if (product.brand === "Apple") {
    return Iphone;
  } else if (product.brand === "Samsung") {
    return Samsung;
  } else if (product.brand === "Google") {
    return Google;
  }
};
