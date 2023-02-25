import React from 'react';
import { apple, bill, google } from '../assets';
import { useObserverView } from '../hooks';
import styles, { layout } from '../utils/style';

const Billing = () => {
  const { ref: infoRef, inView: infoInView } = useObserverView();
  const { ref: imgRef, inView: imgInView } = useObserverView();

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          ref={imgRef}
          src={bill}
          alt="Billing"
          className={`w-[100%] h-[100%] relative z-[5] ${
            imgInView ? 'opacity-transition' : ''
          }`}
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div
        ref={infoRef}
        className={`${layout.sectionInfo} ${
          infoInView ? 'fadeInAnimationLeft' : ''
        }`}
      >
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="App Store"
            className="w-[128px] h-[42px] object/contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Google Play"
            className="w-[128px] h-[42px] object/contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
