import React from "react";
import styles from "../styles/Project.module.css";
import CanvasTree from "./shapes/Tree";
import Image from "next/image";
const ProjectCard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          type="radio"
          name="slide"
          className={styles.input}
          id="c1"
          defaultChecked
        />
        <label htmlFor="c1" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>1</div>
            <div className={styles.description}>
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" className={styles.input} id="c2" />
        <label htmlFor="c2" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>2</div>
            {/* <div className={styles.icon}><Image src="/team/rabin.jpeg" alt={'Rabin'} width={100} height={100}></Image></div> */}
            <div className={styles.description}>
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" className={styles.input} id="c3" />
        <label htmlFor="c3" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>2</div>
            <div className={styles.description}>
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" className={styles.input} id="c4" />
        <label htmlFor="c4" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>4</div>
            <div className={styles.description}>
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" className={styles.input} id="c5" />
        <label htmlFor="c5" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>5</div>
            <div className={styles.description}>
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" className={styles.input} id="c6" />
        <label htmlFor="c6" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>6</div>
            <div className={styles.description}>
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProjectCard;
