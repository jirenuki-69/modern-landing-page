import { useState, useEffect, useRef } from 'react';

const options = {
  treshold: 1.0
};

const useObserverView = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState();
  const [flag, setFlag] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    setEntry(entries[0]);
  }, options);

  useEffect(() => {
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (entry?.intersectionRatio >= options.treshold) {
      observer?.unobserve(entry.target);
    }

    if (entry?.isIntersecting && !flag) {
      setInView(true);
      setFlag(true);
    }
  }, [entry]);

  return {
    ref,
    inView,
    entry
  };
};

export default useObserverView;
