const Footer = () => {
  return (
    <footer className="h-36 border-y">
      <div className="grid h-full grid-cols-2 pt-2">
        <div className="">
          <span
            className="ml-4 text-2xl font-bold tracking-widest text-white md:ml-24 xl:text-4xl"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Bajkolandia
          </span>
        </div>
        <div className="mr-4 justify-self-end text-white md:mr-24 lg:text-lg">
          <p className="text-2xl font-bold text-white lg:text-3xl">Kontakt</p>
          <p>ul. Sulejowska 46</p>
          <p>90-912</p>
          <p>435 534 352</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
