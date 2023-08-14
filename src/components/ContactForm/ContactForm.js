import { nanoid } from 'nanoid';
import { Formik, ErrorMessage, Field } from 'formik';
import {FormStyled } from './Form.styled'
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(
      1,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
    )
    .required(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
    ),
  number: Yup.string()
    .min(
      7,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        // console.log(values);
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={schema}
    >
      <FormStyled>
        <label>
          Name
          <Field
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Number
          <Field
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </label>

        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};
