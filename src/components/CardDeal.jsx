import React from 'react';
import { card } from '../assets';
import { useObserverView } from '../hooks';
import styles, { layout } from '../utils/style';
import Button from './Button';

const CardDeal = () => {
  const { ref: infoRef, inView: infoInView } = useObserverView();
  const { ref: imgRef, inView: imgInView } = useObserverView();

  return (
    <section className={layout.section}>
      <div ref={infoRef} className={`${layout.sectionInfo} ${infoInView ? 'fadeInAnimationRight' : ''}`}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div ref={imgRef} className={`${layout.sectionImg} ${imgInView ? 'opacity-transition' : ''}`}>
        <img src={card} alt="Card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
