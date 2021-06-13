import {Form, Input, Button} from 'antd';
import "./Login.scss"
import BottomText from "../already-registered/BottomText";
import {useAuth} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom"
import Container from "../../layouts/container";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const text = "Need an account ?"
const link = "/signup"
const linkText = "Sign Up"

const Login = () => {
    const history = useHistory()
    const {login} = useAuth()
    const onFinish = async (values) => {
        try {
            await login(values.email, values.password)
            history.push("/")
        } catch {
            console.log("error")
        }
        console.log(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Container>
            <div className={"login_form"}>
                <h1>Log in</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input placeholder={"Email"}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <div className={"forgot-password"}>
                        <Link to={"/forgot-password"}>Forgot Password ?</Link>
                    </div>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Log In
                        </Button>
                    </Form.Item>
                </Form>

                <BottomText text={text} link={link} linkText={linkText}/>
            </div>
        </Container>
    )
}

export default Login