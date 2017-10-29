import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

  renderField(field) {
    // const meta = field.meta;
    // const touched = field.meta.touched;
    const { meta: { touched, error } } = field;
    const className = `form-label ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
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
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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
