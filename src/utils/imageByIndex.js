import image1 from '/attraction1.jpg';
import image2 from '/attraction2.jpg';
import image3 from '/attraction3.jpg';
import image4 from '/attraction4.jpg';
import image5 from '/attraction5.jpg';
import image6 from '/attraction6.jpg';

export const images = [image1, image2, image3, image4, image5, image6];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
