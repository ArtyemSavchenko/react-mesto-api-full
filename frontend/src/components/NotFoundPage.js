import { Link } from 'react-router-dom';
import illustration from '../images/not-found.svg';

export default function NotFoundPage() {
  return (
    <main className="page__content">
      <section className="page__centered-box">
        <div className="not-found">
        <img className='not-found__img' alt='Дети играют под деревом. Илюстрация.' src={illustration}/>
          <p className="not-found__text" src={illustration}>Страница не найдена</p>
          <Link className="not-found__link" exact to="/">
            На главную
          </Link>
        </div>
      </section>
    </main>
  );
}
