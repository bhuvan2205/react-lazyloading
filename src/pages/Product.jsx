import Card from "../components/Card";
import { images } from "../constants/images";

const Product = () => {
  return (
    <div>
      {images?.map((image, i) => (
        <Card key={i} imageSrc={image.src} imageAlt={image.alt} />
      ))}
    </div>
  );
};

export default Product;
