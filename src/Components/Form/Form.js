import React from 'react';
import styles from './form.module.css';

function Form() {
  return (
    <div className={styles.signupForm}>
      <h1>Регистрация</h1>
      <span>Уже есть аккаунт?</span>{' '}
      <span>
        <a href="#">Войти</a>
      </span>
      <form>
        <div>Имя</div>
        <input
          required
          className={styles.inputField}
          type="text"
          placeholder="Введите Ваше имя"
          pattern="^[а-яёА-ЯЁa-zA-Z]+(?:[\s|-][а-яёА-ЯЁa-zA-Z]+)*$"
        />
        <div>Email</div>
        <input
          required
          type="email"
          className={styles.inputField}
          type="email"
          placeholder="Введите ваш email"
        />
        <div>Номер телефона</div>
        <input
          required
          className={styles.inputField}
          type="tel"
          pattern="^(\+7|8)[\-\(]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$"
          type="text"
          placeholder="Введите номер телефона"
        />
        <div>Язык</div>
        <select className={styles.inputField}>
          <option selected disabled hidden>
            Язык
          </option>
          <option>Русский</option>
          <option>Английский</option>
          <option>Китайский</option>
          <option>Испанский</option>
        </select>
        <div>
          <input required type="checkbox" />
          <span>
            Принимаю <a href="#">условия</a> использования
          </span>
        </div>
        <button className={styles.btn} type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Form;
