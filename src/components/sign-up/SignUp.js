import {Form, Input, Button} from 'antd';
import {useAuth} from "../../context/AuthContext";
import "./SignUp.scss"
import Container from "../../layouts/container";
import BottomText from "../already-registered/BottomText";
import {useHistory} from "react-router-dom"
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

const text = "Already have an account ?"
const link = "/login"
const linkText = "Log In"

const SignUp = () => {
    const history = useHistory()
    const {signup} = useAuth()
    const onFinish = async (values) => {
        try {
            await signup(values.email, values.password)
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
            <div className={"sign_up_form"}>
                <h1>sign up</h1>
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
                    <Form.Item
                        label="Confirm Pass"
                        name="confirm-password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <BottomText text={text} link={link} linkText={linkText}/>
        </Container>
    )
}

export default SignUp