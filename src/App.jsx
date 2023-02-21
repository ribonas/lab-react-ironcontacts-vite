import { useState } from 'react'
import './App.css'
import contacts from './contacts.json'

function App() {
  const data = contacts;
  const [dataFive, setDataFive] = useState(data.slice(5, 10));

  const contactsList = dataFive.map(contact => {

    const { name, popularity, pictureUrl, id, wonEmmy, wonOscar } = contact;

    return (
      <tr key={id}>
          <td><img src={pictureUrl} alt={name} /></td>
          <td>{name}</td>
          <td>{Math.round(popularity*100)/100}</td>
          {wonOscar ? <td>🏆</td> : null}
          {wonEmmy ? <td>🏆</td> : null}
        </tr>
    )
  })
  
  const getRandom = () => {

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomContact = data[randomIndex];

    return randomContact;
  }

  const addRandom = () => {

    const newContact = getRandom()
    const exist = dataFive.filter(contact => contact.id === newContact.id);
    
    if (exist.length === 0) {
      setDataFive([...dataFive, newContact])
    } else {
      addRandom();
    }
  }

  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
      </table>
    <tbody>
      {contactsList}
    </tbody>
    </div>
  )
}

export default App