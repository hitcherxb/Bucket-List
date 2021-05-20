import './App.css';
import { useEffect, useState, useContext } from 'react'
import TheContext from './TheContext'
import { Switch, Link, Route } from 'react-router-dom'
import actions from './api'
import Home from './home/Home'
import Login from './home/Login'
import Signup from './home/Signup'
import MyList from './home/MyList';
import MyFeed from './home/MyFeed';

function App() {


  const [user, setUser] = useState({})
  const context = { user, setUser }

  useEffect(() => {
    console.log("app mounted")
    actions.getUser().then(res => {
      setUser(res.data)
    })

  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }


  return (
    <TheContext.Provider value={context}>
      <div className="App">

        {user?.name && (
          <div>
            <p>Welcome {user?.name}</p>
            <button onClick={handleLogout}>Log out</button>
          </div>
        )}


        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/bucketlist/:userid' component={MyList} />
          <Route exact path='/feed' component={MyFeed}/>


        </Switch>



      </div>
    </TheContext.Provider>

  );
}

export default App;
