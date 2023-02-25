import React from 'react';
import { clients } from '../constants';
import styles, { animations } from '../utils/style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div
          key={client.id}
          className={`client flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className={`sm:w-[192px] w-[120px] object-contain cursor-pointer hover:scale-110 transition ease-linear duration-200`}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
