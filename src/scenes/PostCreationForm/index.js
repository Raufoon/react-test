import React from 'react';


class PostCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: '',
        body: ''
      },
      errors: {
        title: true,
        body: false
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.validators = {
      title: (value) => value && value.length > 2,
      body: (value) => value && value.length <= 100,
    };

    this.errorMsg = {
      title: 'should be more than 2 characters',
      body: 'should be within 100 characters',
    }
  }

  onChange(event) {
    let name = event.target.name, value = event.target.value;
    let errors, fields;

    fields = {
      ...this.state.fields,
      [name]: value
    };

    errors = {
      ...this.state.errors,
    };

    if (!this.validators[name](value)) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }

    this.setState({
      fields,
      errors
    })
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const hasError = Object.values(this.state.errors).some(flag => !!flag);
    return (
      <form method={'post'} onSubmit={this.onSubmit}>
        <div>
          <label>Title</label>
          <input name={'title'}
                 type={'text'}
                 value={this.state.fields.title}
                 onChange={this.onChange}
          />
          {
            this.state.errors.title && <span>{this.errorMsg.title}</span>
          }
        </div>
        <br/>
        <div>
          <label>Body</label>
          <input name={'body'}
                 type={'text'}
                 value={this.state.fields.body}
                 onChange={this.onChange}
          />
          {
            this.state.errors.body && <span>{this.errorMsg.body}</span>
          }
        </div>
        <br/>
        {
          !hasError && <input type='submit'/>
        }
      </form>
    )
  }
}

export default PostCreationForm