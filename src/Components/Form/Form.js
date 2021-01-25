import React from 'react';
import styles from './form.module.css';

function Form() {
  return (
    <div className={styles.signupForm}>
      <h1>Регистрация</h1>
      <span>Уже есть аккаунт?</span> <span>Войти</span>
      <form>
        <div>Имя</div>
        <input
          required
          className={styles.inputField}
          type="text"
          placeholder="Введите Ваше имя"
          pattern="^[а-яёА-ЯЁa-zA-Z]+(?:[\s|-][а-яёА-ЯЁa-zA-Z]+)*$"
        />

      </form>
    </div>
  );
}

export default Form;
