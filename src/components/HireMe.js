import styles from "./HireMe.module.css";
import { MdWork } from "react-icons/md";

const HireMe = () => {
  return (
    <h3 className={`animate-hireMe ${styles.hireMe}`}>
      <MdWork />
      <p className="ml-2">Available for freelancing</p>
    </h3>
  );
};

export default HireMe;
