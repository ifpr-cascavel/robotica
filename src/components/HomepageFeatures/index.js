import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Algoritmos',
    Svg: require('@site/static/img/algorithm.svg').default,
    description: (
      <>
        Lógica de programação, estruturas de seleção, repetição e funções.
      </>
    ),
  },
  {
    title: 'Estruturas de Dados',
    Svg: require('@site/static/img/sort_2.svg').default,
    description: (
      <>
        Vetores, matrizes, listas, filas e pilhas.
      </>
    ),
  },
  {
    title: 'Busca e Ordenação',
    Svg: require('@site/static/img/sort.svg').default,
    description: (
      <>
        Busca sequencial e busca binária. Bubble Sort, Selection Sort, 
        Insertion Sort, Merge Sort, Quick Sort e Radix Sort.
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
