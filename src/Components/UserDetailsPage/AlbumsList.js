import API from '../../APIservice';
import { useRouteMatch } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/user/user-actions'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function AlbumPage() {
   const userAlbums = useSelector(state => state.user.albums)
    const dispatch = useDispatch();
    const setUserAlbums = (x) => dispatch(actions.setUserAlbums(x));
    const { url } = useRouteMatch();
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
  useEffect(() => {
    setStatus('pending');    
    API(`${url}/albums`)
      .then(rez => {
        if (rez) {
          setUserAlbums(rez);
          setStatus('resolved');
        }
        else {
                        setError(`Извините сервер временно недоступен :(`);
                        setStatus('rejected');
                    }
      })
  }, []);
  if (status === "idle") {
            return <div></div>;
  }
  if (status === "pending") {
            return (
                <div>
                    <Loader
                     type="ThreeDots"
                     color="#3f51b5"
                     height={100}
                     width={100}
                    />
                </div>
            );
  }
  if (status === "rejected") {
            return (<div>
                      <h1>{error}</h1>;    
                    </div>);
  }
  if (status === "resolved") {
    return (
        <div>
        <h1>Albums</h1>
            <ul>
                {userAlbums.map(e => (
                    <li key={e.id}>
                        <h2>{e.title}</h2>            
                    </li>))}
            </ul>
        </div>
    );
  }    
};