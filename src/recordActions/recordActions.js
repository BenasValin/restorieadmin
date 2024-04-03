


const deleteRecord = async (id) => {
    try {
    const response = await fetch('/api/deleteRecord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({id: id})
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
  };


module.exports = {
    deleteRecord
}