import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field) {
    return (
      <div>
        <input
          {...field.input}
          /*
          same as..
            onChange={field.input.onChange}
            onFocus={field.input.inFocus}
            onBlur={field.input.onBlur}
            etc etc
          */
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew);
