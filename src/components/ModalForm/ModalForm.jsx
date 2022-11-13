import { Formik } from 'formik';
import { useSelector } from 'react-redux';

import { NAME_MATCH, SignupSchema } from 'constants/constants';
import { FormError } from 'components/ContactForm/ContactForm';
import { Form, Input, Label } from './ModalForm.styled';
import Loader from 'components/Loader';
import { EditButton } from 'components/Button/Button.styled';
import {
  getContactName,
  getContactNumber,
  getContactid,
} from 'redux/modal/modalSelectors';

const ModalForm = ({ onSubmit, isUpdaiting }) => {
  const name = useSelector(getContactName);
  const number = useSelector(getContactNumber);
  const id = useSelector(getContactid);

  const handleSubmit = async ({ name, number }, actions) => {
    await onSubmit({ name, number, id });
  };

  return (
    <Formik
      initialValues={{
        name,
        number,
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Label htmlFor="contactName">Name</Label>
          <Input
            id="contactName"
            type="text"
            name="name"
            pattern={NAME_MATCH}
            autoComplete="off"
            placeholder="Name"
            required
          />
          <FormError name="name" />
          <Label htmlFor="phone">Number</Label>
          <Input
            id="phone"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Number"
            autoComplete="off"
            required
          />
          <FormError name="number" />
          <EditButton
            type="submit"
            disabled={values.name === name && values.number === number}
          >
            {isUpdaiting ? <Loader /> : 'Edit'}
          </EditButton>
        </Form>
      )}
    </Formik>
  );
};

export default ModalForm;
