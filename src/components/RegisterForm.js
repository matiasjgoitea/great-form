import React from "react";
import { Field, reduxForm } from "redux-form";

class RegisterForm extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label>Preferred Formatting</label>
          <Field name="preference" component="select">
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
      </form>
    );
  }
}
