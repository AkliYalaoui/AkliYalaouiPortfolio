import styles from "./HireMe.module.css";
import { MdWork } from "react-icons/md";

const HireMe = () => {
  return (
    <h3 className={`${styles.hireMe}`}>
      <MdWork />
      <p className="ml-2">Available for working</p>
    </h3>
  );
};

export default HireMe;
