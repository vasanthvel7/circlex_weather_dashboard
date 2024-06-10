import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import classes from "./SearchBar.module.css";
import { useMainContext } from "../../shared/Context";
import {
  useMainWeatherData,
  useQueryData,
} from "../../store/values/Dashboardslicevalues";
import { useDispatch } from "react-redux";
import { handleStoreQueryData } from "../../store/slices/DashboardSlice";
function SearchBar() {
  const dispatch = useDispatch();
  const { getWeatherData } = useMainContext();
  const querystring = useQueryData();
  return (
    <>
      <InputGroup className={`${classes.mainSearch}`}>
        <Form.Control
          placeholder="Enter City Name"
          aria-label="Enter City Name"
          value={querystring}
          onChange={(e) => {
            dispatch(handleStoreQueryData(e.target.value));
          }}
        />
        <Button
          variant="outline-secondary"
          id="search"
          onClick={() => {
            getWeatherData(querystring);
          }}
        >
          <span className="material-symbols-outlined">search</span>
        </Button>
      </InputGroup>
    </>
  );
}

export default SearchBar;
