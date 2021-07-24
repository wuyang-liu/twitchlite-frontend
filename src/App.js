import React, {Component} from 'react';
import {Layout, message, Button} from "antd";
import {logout} from "./utils";
import Login from "./components/Login";
import Register from "./components/Register";

const {Header, Content, Sider} = Layout;

class App extends Component {
  state={
    loggedIn: false
  }

  SignInOnSuccess= () => {
    this.setState({
      loggedIn: true
    })
  }

  signOutOnClick = () => {
    logout()
      .then(() => {
        this.setState({
          loggedIn: false
        })
        message.success("Successful signed out")
      })
      .catch(err => {
        message.error(err.message)
      })
  }

  render() {
    return (
      <Layout>
        <Header>
          {
            this.state.loggedIn ?
              <Button
                shape="round"
                onClick={this.signOutOnClick}
              >Logout</Button> :
              (
                <>
                  <Login onSuccess = {this.SignInOnSuccess}/>
                  <Register />
                </>
              )
          }
        </Header>
        <Layout>
          <Sider width={300} className="site-layout-background">
            {"Sider"}
          </Sider>
          <Layout style={{padding: '24px'}}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                height: 800,
                overflow: 'auto'
              }}
            >
              {'Home'}
            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}

export default App;