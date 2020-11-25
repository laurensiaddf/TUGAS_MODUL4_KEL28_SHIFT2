import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

import State from './learn-useState/usestate';
import Effect from './learn-useEffect/useffect';
import Context from './learn-useContext/usecontext';
import Reducer from './learn-useReducer/usereducer';
import Ref from './learn-useRef/useref';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Router>
    <Layout>
      <Header style={{background:'#353B3F'}}>
        <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px'}}>
          LOVEME
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px'}}>useState</Link>
          <Link to="/effect" style={{margin:'8px'}}>useEffect</Link>
          <Link to="/context" style={{margin:'8px'}}>useContext</Link>
          <Link to="/reducer" style={{margin:'8px'}}>useReducer</Link>
          <Link to="/ref" style={{margin:'8px'}}>useRef</Link>
        </div>
      </Header>
      <Switch>
        <Route path="/" exact component={State} />
        <Route path="/effect" exact component={Effect} />
        <Route path="/context" exact component={Context} />
        <Route path="/reducer" exact component={Reducer} />
        <Route path="/ref" exact component={Ref} />
      </Switch>
      <Content style={{textAlign:'center', display: 'inline-block'}}></Content>
      <Footer style={{background:'#D9DFE4', textAlign:'center', width:'100%'}}>
        Tugas Praktikum RSBK MODUL 4 - KELOMPOK 28 (LAURENSIA & MAHANI)
      </Footer>
    </Layout>
    </Router>
 )
}

export default App;