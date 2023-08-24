import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import { Loader } from "./Loader/Loader";

const App = () => {

  return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <Loader/>
        <ContactList/>
      </div>
    )

}

export default App