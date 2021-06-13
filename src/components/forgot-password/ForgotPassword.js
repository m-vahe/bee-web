import {Form, Input, Button} from 'antd';
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

const ForgotPassword = () => {
    const history = useHistory()
    const {resetPassword} = useAuth()

    const onFinish = async (values) => {
        try {
            await resetPassword(values.email)
            setTimeout(()=>{
                history.push("/")
            },2500)
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
                <h1>Reset Password</h1>
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
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
                <div className={"login_btn"}>
                    <Link to={"/login"}>Log In</Link>
                </div>
                <BottomText text={text} link={link} linkText={linkText}/>
            </div>
        </Container>
    )
}

export default ForgotPassword