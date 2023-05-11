import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import { ApolloProvider } from '@apollo/client'
import client from './apollo-client'
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './store/userSlice';


function App() {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
        <ApolloProvider client={client}>
          {user ? <Layout /> : <Login />}
          {/* <Layout /> */}
        </ApolloProvider>
    </BrowserRouter>

  )
}

export default App
