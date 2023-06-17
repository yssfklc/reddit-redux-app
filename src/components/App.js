import React, { useEffect } from 'react';
import './style.css';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { selectAllRecipes, loadData } from '../features/addPostSlice';

export default function App() {
  const tasks = useSelector(selectAllRecipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, []);
  console.log(tasks);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {tasks.map((post) => {
        return (
          <div className="post-card">
            <h2 className="post-header">{post.data.title}</h2>
            {post.data.thumbnail ? (
              <img className="post-image" src={post.data.thumbnail} />
            ) : null}
            <p>{post.data.author}</p>
          </div>
        );
      })}
      <p></p>
    </div>
  );
}
