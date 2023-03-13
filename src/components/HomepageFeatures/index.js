import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Robótica',
    Svg: require('@site/static/img/robotic.svg').default,
    description: (
      <>
        Robótica. Arduíno. Lego. ESP32.
      </>
    ),
  },
  {
    title: 'Sistemas embarcados',
    Svg: require('@site/static/img/embedded.svg').default,
    description: (
      <>
        Desenvolvimento de sistemas embarcados.
      </>
    ),
  },
  {
    title: 'IoT',
    Svg: require('@site/static/img/iot.svg').default,
    description: (
      <>
        Dispositivos, protocolos e equipamentos 
        relacionados à internet das coisas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
