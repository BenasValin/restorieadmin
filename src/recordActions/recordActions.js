

//When using this function, the argument must be an object, whose first attribute must be "kategorija" or category which is also the name of the SQL table
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

  const addRecord = async (record) => {
    try {
    const response = await fetch('/api/addRecord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(record)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

//When using this function, the argument must be an object, whose first attribute must be "kategorija" or category which is also the name of the SQL table
const getData = async (item) => {
  try {
    
  const response = await fetch('/api/getdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(item)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const responseData = await response.json();
  return responseData.recordset
} catch (error) {
  console.error('There was a problem with the fetch operation:', error);
}
};

const editRecord = async (item) => {
  try {
  const response = await fetch('/api/editRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(item)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  await response.json().then(console.log("edited succesfulyy"))
} catch (error) {
  console.error('There was a problem with the fetch operation:', error);
}
};

const autoComplete = async (item) => {
  try {
  const response = await fetch('/api/autocomplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(item)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const responseData = await response.json();
  return responseData.recordset
} catch (error) {
  console.error('There was a problem with the fetch operation:', error);
}
};


module.exports = {
    deleteRecord,
    addRecord,
    getData,
    editRecord,
    autoComplete
  }