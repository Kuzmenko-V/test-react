import API from '../../APIservice';
import './UsersPage.css';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/users-info/users-info-actions';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default function UsersList() {
  const usersList = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  const setUsersList = x => dispatch(actions.setUsersList(x));
  const location = useLocation();
  const { url } = useRouteMatch();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    API('/users').then(rez => {
      if (rez) {
        setUsersList(rez);
        setStatus('resolved');
      } else {
        setError(`Извините сервер временно недоступен :(`);
        setStatus('rejected');
      }
    });
  }, []);
  if (status === 'idle') {
    return <div></div>;
  }
  if (status === 'pending') {
    return (
      <div>
        <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
      </div>
    );
  }
  if (status === 'rejected') {
    return (
      <div>
        <h1>{error}</h1>;
      </div>
    );
  }
  if (status === 'resolved') {
    return (
      <div>
        <h1>Пользователи</h1>
        <ul>
          {usersList.map(e => (
            <li key={e.id}>
              <Link
                to={{
                  pathname: `${url}/${e.id}`,
                  state: { from: location },
                }}
              >
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
