import React, { useEffect, useState } from 'react'

const MyCustomWidget = () => {
    const [note, setNote] = useState('');

    useEffect(() => {
      // Save note to local storage whenever it changes
      localStorage.setItem('note', note);
    }, [note]);
  
    const handleNoteChange = (event) => {
      setNote(event.target.value);
    };
  return (
    <div>
    <h2>Note Widget</h2>
    <textarea
      value={note}
      onChange={handleNoteChange}
      placeholder="Enter your note here..."
      rows={4}
      cols={30}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
      }}
    ></textarea>
    <button
      onClick={() => setNote('')}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        marginRight: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      Clear
    </button>
    {note && (
      <p
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
        Your Note: {note}
      </p>
    )}
  </div>
  )
}

export default MyCustomWidget