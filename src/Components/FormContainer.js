import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import FormControl from './FormControl';
import ErrorText from './ErrorText';

function FormContainer() {
  const dropdownOptions = [
    { key: 'Язык', value: '' },
    { key: 'Русский', value: 'russian' },
    { key: 'Английский', value: 'english' },
    { key: 'Китайский', value: 'chinese' },
    { key: 'Испанский', value: 'spanish' },
  ];

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    selectOption: '',
    acceptTerms: false,
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
    acceptTerms: yup.bool().oneOf([true], 'Примите условия использования'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="signupForm">
          <div className="formContent">
            <h1>Регистрация</h1>
            <span>Уже есть аккаунт? </span>
            <span>
              <a href="#">Войти</a>
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

          <div className="formContent">
            <Field as="checkbox" name="acceptTerms">
              <input type="checkbox"></input>
              <label htmlFor="acceptTerms">
                Принимаю условия использования
              </label>
            </Field>
            <ErrorMessage name="acceptTerms" component={ErrorText} />
          </div>

          <button type="submit" disabled={!(formik.dirty && formik.isValid)}>
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormContainer;
