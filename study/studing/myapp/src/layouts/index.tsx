import styles from './index.css';
export default (props:{
  children:any
}) => {
  return <div  className={styles.title}>layout{props.children}</div>;
};
