import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import classes from "./SearchBar.module.css";
import { useMainContext } from "../../shared/Context";
import { handleStoreQueryData } from "../../store/slices/DashboardSlice";
import { useIsFetching } from "../../store/values/Dashboardslicevalues";

const validationSchema = yup.object().shape({
  city: yup.string().required(`Please input valid city!`),
});

function SearchBar() {
  const dispatch = useDispatch();
  const { getWeatherData, getCurrentLocation } = useMainContext();
  const isFetching = useIsFetching();

  const { values, errors, setFieldValue, handleSubmit, resetForm } = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: (values) => {
      if (values.city.trim() !== "") {
        getWeatherData({
          q: values.city.trim(),
        });
      } else {
        toast.error("Please input valid city!");
      }
    },
  });

  return (
    <>
      <InputGroup className={`${classes.mainSearch}`}>
        <Form.Control
          placeholder="Enter City Name"
          aria-label="Enter City Name"
          value={values.city}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          onChange={(e) => {
            setFieldValue("city", e.target.value);
            dispatch(handleStoreQueryData(e.target.value));
          }}
        />
        <Button
          variant="outline-secondary"
          id="search"
          disabled={errors.city || isFetching ? true : false}
          onClick={() => {
            handleSubmit();
          }}
        >
          <span className="material-symbols-outlined">search</span>
        </Button>
      </InputGroup>
      <Button
        className={classes.currentlocationSec}
        variant="outline-secondary"
        disabled={isFetching}
        id="search"
        onClick={() => {
          resetForm();
          dispatch(handleStoreQueryData(""));
          getCurrentLocation();
        }}
      >
        <span className="material-symbols-outlined">my_location</span>
      </Button>
    </>
  );
}

export default SearchBar;
