import React, {useState} from 'react';

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('submit');
  }
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onTextChange = (e) => {
    setBody(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="f">Name:</label>
        <br/>
        <input id="f" type="text" name="name" placeholder="title" value={name} onChange={onNameChange} />
      </div>
      <div>
        <label htmlFor="t">Body:</label>
        <br/>
        <input id="t" type="text" name="body" placeholder="text" value={body} onChange={onTextChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
