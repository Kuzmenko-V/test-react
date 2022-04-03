import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Navigation from './Components/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Main = lazy(() => import('./Components/Main/Main.js'));
const UserDetailsPage = lazy(() => import('./Components/UserDetailsPage/UserDetailsPage.js'));
const UsersPage = lazy(() => import('./Components/UsersPage/UsersPage.js'));
const PostPage = lazy(() => import('./Components/PostPage/PostPage.js'));

export default function App() {
  return (
    <div>
      <ToastContainer
           autoClose={3000}
           position="top-center"
          />
      <header>
        <Navigation/>
      </header>
      <main>
      <Suspense fallback={<Loader
                     type="ThreeDots"
                     color="#3f51b5"
                     height={100}
                     width={100}
                    />}>
        <Switch>
          <Route path='/' exact>
            <Main/>
          </Route>
          <Route path='/users/:userId'>
            <UserDetailsPage/>
          </Route>
          <Route path='/users' exact>
            <UsersPage/>
            </Route>
            <Route path='/users/:userId/post'>
            <PostPage/>
            </Route>
          <Redirect to="/" />
        </Switch>          
      </Suspense>
      </main>
    </div>
  );
}