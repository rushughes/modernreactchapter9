import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          /*
          same as..
            onChange={field.input.onChange}
            onFocus={field.input.inFocus}
            onBlur={field.input.onBlur}
            etc etc
          */
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  //console.log(valies) -> { title:, categories, content }
  const errors = {};

  // logic to validate the inputs from the 'values' object
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter atleast one category.';
  }

  if (!values.content) {
    errors.content = 'Enter some content please.';
  }

  // if errors is empty, the form is fine to submit!
  // if errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, //same as saying validate: validate
  form: 'PostsNewForm',
})(PostsNew);
