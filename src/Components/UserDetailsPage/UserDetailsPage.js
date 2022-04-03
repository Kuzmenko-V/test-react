import API from '../../APIservice';
import './UserDetailsPage.css';
import { Route } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import noIMG from '../No-Image-Placeholder.svg';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/user/user-actions';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Post = lazy(() => import('../PostPage/PostPage.js'));
const Modal = lazy(() => import('./Modal/Modal.js'));
const AlbumsList = lazy(() => import('./AlbumsList.js'));

export default function UserDetailsPage() {
  const userInfo = useSelector(state => state.user.info);
  const dispatch = useDispatch();
  const setUserInfo = x => dispatch(actions.setUserInfo(x));
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { userId } = useParams();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const { url } = useRouteMatch();
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  useEffect(() => {
    setStatus('pending');
    API(`/users/${userId}`).then(rez => {
      if (rez) {
        setUserInfo(rez);
        setStatus('resolved');
      } else {
        setError(`Извините сервер временно недоступен :(`);
        setStatus('rejected');
      }
    });
  }, [userId]);
  let i = location.pathname.split('/')[3];

  if (i) {
    if (i === 'posts') {
      return (
        <Route path="/users/:userId/posts">
          <Post />
        </Route>
      );
    }
  }
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
      <div className="Contein">
        {userInfo &&
          (userInfo.id ? (
            <div className="userDetailsPage">
              <div className="userPoster">
                <img src={noIMG} alt="" />
              </div>
              <div className="userInfo">
                <h2>{userInfo.name}</h2>
                <p>Phone: {userInfo.phone}</p>
                <p>Email: {userInfo.email}</p>
                <p>Company Name: {userInfo.company.name}</p>
                <Link className="userButton" to={`${url}/posts`}>
                  Post
                </Link>
                <button
                  className="userButton"
                  type="button"
                  onClick={toggleModal}
                >
                  Albums
                </button>
              </div>
              {showModal && (
                <Modal onClose={toggleModal}>
                  <AlbumsList />
                </Modal>
              )}
            </div>
          ) : (
            <div className="userDetailsPage">
              <h1>{userInfo.status_message}</h1>
            </div>
          ))}
      </div>
    );
  }
}
