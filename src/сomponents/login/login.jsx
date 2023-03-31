import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import classes from './../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={"email"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"} type={"password"} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"} /> remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememerMe);
    }
    
    if(props.isAuth) {
        return <Navigate replace to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div> 
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);