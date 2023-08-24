import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import { Loader } from "./Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { selectError } from "redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError)
  if (error) Notiflix.Notify.failure(error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
      <Loader />
      <ContactList />
      </div>
    )

}

export default App