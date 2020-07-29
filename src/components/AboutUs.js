import React from 'react';
import '../styles/AboutUs.css';

const benefitsList = [
  'kształtuje i rozwija swoje umiejętności społeczne (w tym wspólnej i zgodnej zabawy i nauki z dziećmi),',
  'usprawnia swoje zdolności samoobsługowe, koształtuje nawyki higieniczne i kulturalne,',
  'rozwija mowę oraz inne umiejętności komunikacyjne,',
  'rozwija zdolności intelektualne konieczne do poznawania i rozumienia siebie i swojego otoczenia,',
  'otrzymuje wychowanie rodzinne, obywatelskie i patriotyczne,',
  'poznaje zasady zdrowego żywienia i zdrowego trybu życia,',
  'rozwija sprawność fizyczną,',
  'uczy się dbałości o bezpieczeństwo własne oraz innych,',
  'wkracza w świat wartości estetycznych i rozwija umiejętności wypowiadania siebie poprzez muzykę, taniec, śpiew oraz sztuki plastyczne,',
  'rozwija się intelektualnie poprzez zabawy konstrukcyjne, budzenie zainteresowań technicznych,',
  'uczy się rozumieć i szanować przyrodę,',
  'rozpoczyna edukację matematyczną.',
];

const AboutUs = () => {
  return (
    <section className='aboutUs'>
      <div className='wrapper'>
        <h2 className='aboutUsTitle title'>Zajęcia sportowe i taneczne</h2>
        <p className='aboutUsDescription'>
          Jesteśmy po to, by zarażać pasją, zaciekawiać i dawać dzieciom
          bezpieczną przestrzeń do rozwoju umysłowego oraz sportowego. To bardzo
          istotna część naszych działań, które wynikają z przekonania, że każdy
          posiada ogromny potencjał , którego realizacja zapewnia spełnienie,
          szczęście i jest podstawą jego harmonijnego rozwoju. Nasze zajęcia
          sportowe dla dzieci mają na celu szeroko pojęty rozwój fizyczny oraz
          popularyzacje ruchu wśród dzieci i ich rodziców.
        </p>
        <p className='aboutUsDescription'>
          Nasz oferta skierowana jest do przedszkoli na każdym etapie
          kształcenia dziecka,gdzie mogą poznawać sport poprzez zabawę. Poprzez
          uczestnictwo w zajęciach dziecko odnosi wielorakie korzyści:{' '}
          <ul className='aboutUsList'>
            {benefitsList.map((benefit, index) => (
              <li key={index} className='aboutUsBenefit'>
                {benefit}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
