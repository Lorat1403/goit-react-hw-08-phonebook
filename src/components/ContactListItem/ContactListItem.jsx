import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonsDiv, Line } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Loader from 'components/Loader';
import { showModalChange } from 'redux/modal/modalSlice';
import { getShowModal } from 'redux/modal/modalSelectors';
import ContactEditorModal from 'components/ContactEditorModal/ContactEditorModal';
import { ListItemBlockButton } from 'components/Button/Button.styled';
import DeletIcon from 'components/Icons/DeleteIcon';
import EditIcon from 'components/Icons/EditIcon';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(showModalChange({ name, number, id }));
  };

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Something went wrong. Please, try again.');
    }
  };

  return (
    <>
      <Line>
        {name}: <span>{number}</span>
      </Line>
      <ButtonsDiv>
        <ListItemBlockButton onClick={handleShowModal}>
          <EditIcon />
        </ListItemBlockButton>
        <ListItemBlockButton onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? <Loader size={8} /> : <DeletIcon />}
        </ListItemBlockButton>
      </ButtonsDiv>
      {showModal && <ContactEditorModal handleShowModal={handleShowModal} />}
    </>
  );
};

export default ContactListItem;
