import { ReactElement } from 'react';
import style from './ErrorPage.module.css';

export function ErrorPage(): ReactElement {
  return (
    <div className="container">
      <h1 className={style.titleError}>Page Not Found</h1>
    </div>
  );
}
