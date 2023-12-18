import EmblaCarousel from '../components/EmblaCarousel';
import OpinionTab from '../components/OpinionTab';
import '../styles/embla.css';
import '../styles/sandbox.css';
import { useState } from 'react';

const OPTIONS = {};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Homepage = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const callback = (index) => {
    setIndex(index);
  };

  const onShowMore = () => {
    console.log('show more');
  };

  const onShowLess = () => {
    console.log('show less');
  };
  return (
    <div>
      <div className="my-10 flex flex-col items-center justify-center lg:flex-row xl:gap-44">
        <div>
          <h1
            className="my-6 text-center text-4xl font-extrabold uppercase tracking-wider text-white md:text-5xl xl:text-start xl:text-6xl"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Witaj w Bajkolandii!
          </h1>
        </div>
        <div>
          <img src="chick.png" className="w-[400px] md:w-[500px] xl:w-[600px]"></img>
        </div>
      </div>

      <div className="relative mx-10">
        <h2 className="pb-2 text-4xl font-bold tracking-wider text-white">Atrakcje</h2>
        <div className="absolute right-1/2 h-1 w-full translate-x-1/2 border-b-2"></div>

        <div className="my-10 flex flex-col items-center justify-between lg:mx-10 lg:flex-row">
          <div className="w-full md:h-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} func={callback} />
          </div>
          <div className="h-fit w-full rounded-xl bg-white p-10">
            <h3 className="text-2xl font-semibold">
              {index === 0 && 'Ścianka wspinaczkowa'}
              {index === 1 && 'Zjeżdżalnie'}
              {index === 2 && 'Basen z kulkami'}
              {index === 3 && 'Most zwodzony'}
              {index === 4 && 'Mostek'}
              {index === 5 && 'Zjeżdżalnia dżungla'}
            </h3>
            <p className="my-6 text-lg leading-8 md:text-xl">
              {index === 0 &&
                'Poziom adrenaliny sięga zenitu na naszej ściance wspinaczkowej! Dla wszystkich odważnych odkrywców, którzy pragną podjąć wyzwanie i zdobyć szczyt. Zapewniamy bezpieczne otoczenie i różnorodne trasy, dostosowane do umiejętności każdego wspinacza.'}
              {index === 1 &&
                'Odkryj szybką trasę do śmiechu i radości na naszych zjeżdżalniach! Dla odważnych poszukiwaczy przygód i tych, którzy uwielbiają poczucie wolności. Nasze zjeżdżalnie oferują różnorodne trasy i efekty świetlne, tworząc niezapomnianą rozrywkę dla wszystkich.'}
              {index === 2 &&
                'Zanurz się w kolorowym morzu frajdy w naszym basenie z kulkami! Dla najmłodszych gości to miejsce pełne uśmiechów i radosnej zabawy. Kulki w różnych kolorach tworzą magiczną przestrzeń do tworzenia wspomnień i nawiązywania nowych przyjaźni.'}
              {index === 3 &&
                'Przejdź przez zawieszony most, czując adrenalinę w każdym kroku! Nasz most zwodzony to wyzwanie dla odważnych, którzy pragną przekroczyć granice i doświadczyć ekscytującej chwili zawieszenia w powietrzu. Czy zdobędziesz drugi brzeg?'}
              {index === 4 &&
                'Skocz na nasz uroczy mostek i poczuj, jak świat staje się magiczny! Doskonały dla najmłodszych odkrywców, mostek oferuje bezpieczne przygody na małą skalę. Idealny punkt startowy do wielkich marzeń.'}
              {index === 5 &&
                ' Przenieś się do serca dżungli na naszej tropikalnej zjeżdżalni! Zanurz się w egzotycznym świecie roślinności i zwierząt, eksplorując zakamarki zjeżdżalni, które pełne są niespodzianek. Przygoda czeka na każdego, kto odważy się zejść w dół tego tropikalnego szlaku radości!'}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-10">
        <h2 className="pb-2 text-4xl font-bold tracking-wider text-white">Opinie</h2>
        <div className="absolute right-1/2 h-1 w-full translate-x-1/2 border-b-2"></div>
        <div className="my-10 flex flex-col items-center gap-4 md:gap-8">
          <OpinionTab
            name="Jan Kowalski"
            text="Bajkoland to absolutne królestwo dziecięcej rozrywki! Mój mały Artur uwielbia każdą wizytę tutaj. Zawsze czysto, zawsze bezpiecznie, a obsługa jest niezwykle pomocna. Różnorodność atrakcji jest imponująca, a kolorowa sala zabaw zachęca do kreatywnej zabawy. To miejsce zasługuje na pięć gwiazdek za pełen profesjonalizm i atmosferę pełną uśmiechu."
            stars="⭐⭐⭐⭐⭐"
            likes="10"
            dislikes="2"
            verified={true}
          />
          <OpinionTab
            name="Zuzanna Patała"
            text="Bajkoland to nasz ulubiony przystanek na weekendowe rodzinne wyjścia! Mój syn jest w siódmym niebie podczas każdej wizyty, a ja doceniam, jak zawsze wszystko jest zorganizowane. Super obsługa, czystość, oraz kreatywne kąciki tematyczne. Polecam każdemu rodzicowi, który chce zobaczyć uśmiech na twarzy swojego dziecka!"
            stars="⭐⭐⭐⭐⭐"
            likes="3"
            dislikes="0"
            verified={false}
          />
        </div>
      </div>
      <div className="relative mx-10 my-10">
        <h2 className="pb-2 text-4xl font-bold tracking-wider text-white">Gdzie jesteśmy?</h2>
        <div className="absolute right-1/2 h-1 w-full translate-x-1/2 border-b-2"></div>
        <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="mx-10 h-fit w-full gap-10 rounded-xl bg-white p-10 md:w-1/2">
            <h3 className="text-xl font-semibold md:text-2xl">ul. Sulejowska 46, 90-912 Łódź</h3>
            <p className="mt-6 text-lg md:text-xl">
              Nasz Bajkoland znajduje się w sercu miasta, zapewniając łatwy dostęp dla rodzin z
              całego regionu. Znajdujemy się w bezpiecznej i spokojnej dzielnicy, co sprawia, że
              nasze miejsce jest idealne dla rodzin z dziećmi w różnym wieku.
            </p>
          </div>
          <img src="map.png" className="md:w-2/3"></img>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
