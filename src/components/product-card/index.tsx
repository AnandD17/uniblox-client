import { TProduct } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import CartService from "@/services/cart";
import { toast } from "@/hooks/use-toast";
const ProductCard = ({
  _id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: TProduct) => {
  const handleAddToCart = async () => {
    try {
      await CartService.addToCart(_id);
      toast({
        title: "Product added to cart",
        description: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-64 w-full">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-300 ease-in-out hover:scale-105 w-full h-full object-contain"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          <Badge variant="secondary" className="ml-2">
            {category}
          </Badge>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">
              {rating.rate.toFixed(1)}
            </span>
            <span className="ml-1 text-xs text-gray-500">({rating.count})</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
