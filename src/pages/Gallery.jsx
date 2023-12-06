import GalleryCard from '../components/GalleryCard';

const galleryImages = [
  'https://flowbite.com/docs/images/carousel/carousel-1.svg',
  'https://flowbite.com/docs/images/carousel/carousel-2.svg',
  'https://flowbite.com/docs/images/carousel/carousel-3.svg',
  'https://flowbite.com/docs/images/carousel/carousel-4.svg',
  'https://flowbite.com/docs/images/carousel/carousel-5.svg',
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center px-20">
      <h1 className="text-center text-2xl font-bold tracking-wider text-white lg:text-3xl">
        Galeria
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 2xl:grid-cols-4 ">
        {galleryImages.map((image, index) => (
          <GalleryCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
