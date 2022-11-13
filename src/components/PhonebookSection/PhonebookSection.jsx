import { Title, Section, PhonebookTitle } from '../App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container } from 'pages/Home/Home.styled';

const PhonebookSection = () => {
  return (
    <>
      <Container>
        <div>
          <Title>Phonebook</Title>
          <ContactForm />
        </div>
      </Container>
      <Section>
        <PhonebookTitle>Contacts</PhonebookTitle>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default PhonebookSection;
