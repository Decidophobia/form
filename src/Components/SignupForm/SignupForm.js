import React from 'react';
import styles from './singupForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import ErrorText from '../ErrorText/ErrorText';

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const onSubmit = (values) => {
  console.log('Data from the form', values);
};

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[а-яёА-ЯЁa-zA-Z]+(?:[\s|-][а-яёА-ЯЁa-zA-Z]+)*$/, {
      message: 'Имя не может содержать цифры и символы кроме пробела и дефиса',
      excludeEmptyString: true,
    })
    .required('* это поле обязательное'),
  email: yup
    .string()
    .email('Введено некорректное значение')
    .required('* это поле обязательное'),
  phone: yup
    .string()
    .matches(
      /^(\+7|8)[\-\(]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$/,
      { message: 'Введено некорректное значение', excludeEmptyString: true }
    )
    .required('* это поле обязательное'),
});

function SignupForm() {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      
    >
      {(formik) => {
        return (
          <Form className={styles.signupForm}>
            <div className={styles.formContent}>
              <h1>Регистрация</h1>
              <span>Уже есть аккаунт? </span>
              <span>
                <a href="#">Войти</a>
              </span>
            </div>
            <div className={styles.formContent}>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="name">Имя</label>
                  <input
                    className={styles.inputField}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Введите Ваше имя"
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className={styles.error}>{formik.errors.name}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.inputField}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Введите ваш email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className={styles.error}>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="phone">Номер телефона</label>
                  <input
                    className={styles.inputField}
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Введите номер телефона"
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className={styles.error}>{formik.errors.phone}</div>
                  ) : null}
                </div>

                <button className={styles.btn} type="submit">
                  Зарегистрироваться
                </button>
              </form>
            </div>
          </Form>
        );
      }}
    </Formik>

    //   <div className={styles.signupForm}>
    //     <h1>Регистрация</h1>
    //     <span>Уже есть аккаунт?</span>
    //     <span>
    //       <a href="#">Войти</a>
    //     </span>
    //     <form>
    //       <div>Имя</div>
    //       <input
    //         required
    //         className={styles.inputField}
    //         type="text"
    //         placeholder="Введите Ваше имя"
    //         pattern="^[а-яёА-ЯЁa-zA-Z]+(?:[\s|-][а-яёА-ЯЁa-zA-Z]+)*$"
    //       />
    //       <div>Email</div>
    //       <input
    //         required
    //         type="email"
    //         className={styles.inputField}
    //         type="email"
    //         placeholder="Введите ваш email"
    //       />
    //       <div>Номер телефона</div>
    //       <input
    //         required
    //         className={styles.inputField}
    //         type="tel"
    //         pattern="^(\+7|8)[\-\(]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$"
    //         type="text"
    //         placeholder="Введите номер телефона"
    //       />

    //       <div>Язык</div>
    //       <select className={styles.inputField}>
    //         <option selected disabled hidden>
    //           Язык
    //         </option>
    //         <option>Русский</option>
    //         <option>Английский</option>
    //         <option>Китайский</option>
    //         <option>Испанский</option>
    //       </select>
    //       <div>
    //         <input required type="checkbox" />
    //         <span>
    //           Принимаю <a href="#">условия</a> использования
    //         </span>
    //       </div>
    //       <button className={styles.btn} type="submit">
    //         Зарегистрироваться
    //       </button>
    //     </form>
    //   </div>
  );
}

export default SignupForm;
