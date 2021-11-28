import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import AddPackage from './Pages/Dashboard/AddPackage/AddPackage';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import ManagePackages from './Pages/Dashboard/ManagePackages/ManagePackages';
import Footer from './Pages/Shared/Footer/Footer';
import ManageAllOrders from './Pages/Dashboard/ManagaAllOrders/ManageAllOrders';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
         

          <PrivateRoute path="/purchase/:productId">
            <Purchase></Purchase>
          </PrivateRoute>

          <Route path="/addPackage">
            <AddPackage></AddPackage>
          </Route>

          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>

          
          <Route path="/managePackages">
            <ManagePackages></ManagePackages>
          </Route>
         
          <Route path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route> 
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
