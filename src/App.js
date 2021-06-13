import './App.css';
import 'antd/dist/antd.css'
import SignUp from "./components/sign-up/SignUp";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import PrivateRoute from "./hooks/PrivateRoute";
import ForgotPassword from "./components/forgot-password/ForgotPassword";

function App() {
    return (
        <AuthProvider>
            <div>
                <Router>
                    <Switch>
                        <PrivateRoute exact path={"/"} component={Dashboard}/>
                        <Route path={"/signup"} component={SignUp}/>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/forgot-password"} component={ForgotPassword}/>
                    </Switch>
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;
// import {Node, createEditor} from 'slate'
// import {useState} from "react";
// import {Slate, Editable, withReact} from "slate-react";
//
// const serialize = value => {
//     return (
//         value.map(n => Node.string(n)).join('\n')
//     )
// }
//
// const deserialize = string => {
//     return string.split('\n').map(line => {
//         return {
//             children: [{text: line}],
//         }
//     })
// }
//
// const TextBlock = () => {
//     const [editor] = useState(() => withReact(createEditor()))
//
//     const [value, setValue] = useState( deserialize(localStorage.getItem('content') || '') )
//
//     return (
//         <>
//             <div style={{border: "1px solid grey", padding: "20px", borderRadius: "5px"}} >
//                 <Slate
//                     editor={editor}
//                     value={value}
//                     onChange={value => {
//                         setValue(value)
//                         localStorage.setItem('content', serialize(value))
//                     }}
//                 >
//                     <Editable/>
//                 </Slate>
//             </div>
//         </>
//     )
// }
//
// export default TextBlock