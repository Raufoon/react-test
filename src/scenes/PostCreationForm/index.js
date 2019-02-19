import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreatePosts} from "./services/postCreationActions";
import {createNewId} from "./services/utils";


class PostCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: '',
        body: ''
      },
      pristine: {
        title: true,
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
      errors,
      pristine: {
        title: false,
      }
    })
  }

  onSubmit(event) {
    let fallbackUrl = '/posts', openedPostId=this.props.openedPostId;

    event.preventDefault();
    this.props.dispatch(actionCreatePosts(
      createNewId(),
      this.state.fields.title,
      this.state.fields.body,
    ));

    if (openedPostId) {
      fallbackUrl += '/' + openedPostId;
    }
    this.props.history.push(fallbackUrl);
  }

  render() {
    const hasError = Object.values(this.state.errors).some(flag => !!flag);
    // TODO: make a separate form field component
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
            !this.state.pristine.title
            && this.state.errors.title
            && <span>{this.errorMsg.title}</span>
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

const stateToProps = state => ({
  openedPostId: state.openedPostId
});

export default withRouter(
  connect(stateToProps)(PostCreationForm)
)