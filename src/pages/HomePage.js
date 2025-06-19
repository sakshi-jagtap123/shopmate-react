import { useState, useEffect, useContext } from 'react';
import ProductList from '../components/ProductList';
import { CartContext } from '../components/CartContext'; // make sure this path is correct

const HomePage = () => {
  const [products, setProducts] = useState([]);
 // Access cart from context

  const productList = [
    {
      id: 1,
      name: 'Red T-shirt',
      price: 399,
      image:
        'https://static.vecteezy.com/system/resources/previews/026/556/124/non_2x/t-shirt-mockup-specializing-in-colorful-background-free-photo.jpg',
    },
    {
      id: 2,
      name: 'Apple',
      price: 180,
      image: 'https://tse4.mm.bing.net/th?id=OIP.u5MHxlzrO8CkZr9HvC8TGQHaFj&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 499,
      image: 'https://wallpapers.com/images/file/shoes-pictures-mk28k2bu3trjoun1.jpg',
    },
    {
      id: 4,
      name: 'Banana',
      price: 120,
      image: 'https://tse2.mm.bing.net/th?id=OIP.RRqW7Ijs1-NHLAOCxiMXLAHaE8&pid=Api&P=0&h=180',
    },
    {
      id: 5,
      name: 'Backpack',
      price: 799,
      image: 'https://m.media-amazon.com/images/I/81FJM61kZtL.jpg',
    },
    {
      id: 6,
      name: 'AirPods',
      price: 899,
      image: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9971/airpodsmirror.jpg',
    },
    {
      id: 7,
      name: 'Mobile Charger',
      price: 2500,
      image: 'https://tse2.mm.bing.net/th?id=OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 8,
      name: 'HeadSet',
      price: 699,
      image:
        'https://www.bhphotovideo.com/images/images1500x1500/logitech_981_001285_usb_headset_h390_off_white_1740899.jpg',
    },
    {
      id: 9,
      name: 'Snacks',
      price: 500,
      image: 'https://tse2.mm.bing.net/th?id=OIP.q2wnwk7LpFM1D48xc0na-QHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 10,
      name: 'Spiral NoteBook',
      price: 400,
      image:
        'https://i5.walmartimages.com/asr/dd17a6d5-ee3e-414d-9457-8321a1f1999c.f35bfc62d5de8a7d5607fcbc988db9a8.jpeg',
    },
  ];

  useEffect(() => {
    setProducts(productList);
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
