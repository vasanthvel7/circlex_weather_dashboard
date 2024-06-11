import classes from "./ErrorComponent.module.css";
import { ErrorComponentProps } from "../../@types/commonProps";

export const ErrorComponent = ({
  image,
  message,
  image_alt,
}: ErrorComponentProps) => {
  return (
    <div className={classes.errorRootSec}>
      <img src={image} alt={image_alt} />
      <p>{message}</p>
    </div>
  );
};

export const ForCastErrorComponent = ({
  image,
  message,
  image_alt,
}: ErrorComponentProps) => {
  return (
    <div className={classes.forcasterrorRootSec}>
      <img src={image} alt={image_alt} />
      <p>{message}</p>
    </div>
  );
};
