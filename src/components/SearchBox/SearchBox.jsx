import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <Formik initialValues={{ search: filter }} enableReinitialize={true}>
      {() => (
        <Form className={s.wrapper}>
          <label htmlFor="search" className={s.label}>
            Find contacts by name or number:
          </label>
          <Field
            id="search"
            name="search"
            className={s.input}
            type="text"
            value={filter}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
