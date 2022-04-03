import './UsersPage.css';
import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const UsersList = lazy(() => import('./UsersList.js'));

export default function UsersPage() {
 const { url } = useRouteMatch();
    
    return (
        <div>
            <Suspense fallback={<Loader
                     type="ThreeDots"
                     color="#3f51b5"
                     height={100}
                     width={100}
                    />}>
             <Route path={`${url}`}>
               <UsersList searchText={'/users'}/>   
             </Route>
            </Suspense>
        </div>
    );
};