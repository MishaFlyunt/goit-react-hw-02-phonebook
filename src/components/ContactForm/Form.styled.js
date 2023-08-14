import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 5px 0 18px;
`;

export const LabelStylet = styled.label`
  /* display: flex; */
`;

export const FieldStyled = styled(Field)`
  width: 200px;
`;

export const ButtonForm = styled.button`
  width: 100px;
  padding: 10px;
`;
