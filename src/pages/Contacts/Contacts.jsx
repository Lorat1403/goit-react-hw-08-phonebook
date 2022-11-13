import Loader from 'components/Loader';
import PhonebookSection from 'components/PhonebookSection';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useGetContactsQuery } from 'redux/contactsSlice';

const Contacts = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { data: contacts, refetch } = useGetContactsQuery();

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [isLoggedIn, refetch]);

  return contacts ? <PhonebookSection /> : <Loader size={50} />;
};

export default Contacts;
