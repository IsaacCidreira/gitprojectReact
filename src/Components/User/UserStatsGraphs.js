import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import styles from './UserStatsGraphs.module.css';
const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(data);
    // setTotal(
    //   data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
    // );
  }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
