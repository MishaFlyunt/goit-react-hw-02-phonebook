import { ContactListStyled, ContactItemStyled } from './ContactList.styled';

export const ContactList = ({ contact, onDelete }) => {
  return (
    <ContactListStyled>
      {contact.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
