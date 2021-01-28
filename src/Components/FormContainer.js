import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormControl from './FormControl';

function FormContainer() {
  const dropdownOptions = [
    { key: 'Язык', value: '' },
    { key: 'Русский', value: 'russian' },
    { key: 'Английский', value: 'english' },
    { key: 'Китайский', value: 'chinese' },
    { key: 'Испанский', value: 'spanish' },
  ];
  const checkboxOptions = [
    { key: 'Принимаю условия использования', value: 'cOption1' },
  ];
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    selectOption: '',
    checkboxOption: [],
  };

  const onSubmit = (values) => {
    console.log('Data from the form', values);
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .matches(/^[а-яёА-ЯЁa-zA-Z]+(?:[\s|-][а-яёА-ЯЁa-zA-Z]+)*$/, {
        message:
          'Имя не может содержать цифры и символы кроме пробела и дефиса',
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
    selectOption: yup.string().required('* это поле обязательное'),
    checkboxOption: yup.array().min(1, 'Примите условия использования'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="signupForm">
          <div className="head">
            <h1>Регистрация</h1>
            <span>
              Уже есть аккаунт? <a href="#">Войти</a>
            </span>
          </div>

          <FormControl
            className="inputField"
            control="input"
            type="text"
            name="name"
            label="Имя"
            placeholder="Введите Ваше имя"
          />
          <FormControl
            className="inputField"
            control="input"
            type="email"
            name="email"
            label="Email"
            placeholder="Введите ваш email"
          />
          <FormControl
            className="inputField"
            control="input"
            type="tel"
            name="phone"
            label="Номер телефона"
            placeholder="Введите номер телефона"
          />

          <FormControl
            control="select"
            label="Язык"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormControl
            control="checkbox"
            label={false}
            name="checkboxOption"
            options={checkboxOptions}
          />
          <button type="submit" disabled={!(formik.dirty && formik.isValid)}>
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormContainer;
