export const postItem = item => {
  return fetch('http://localhost:7891/api/v1/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item })
  })
    .then(res => {
      if(!res.ok) throw 'unable to post item';
      return res.json();
    });
};

export const getItemsApi = () => {
  return fetch('http://localhost:7891/api/v1/items', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'unable to post item';
      return res.json();
    });
};

export const patchItem = (item) => {
  return fetch('http://localhost:7891/api/v1/items', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item })
  })
    .then(res => {
      if(!res.ok) throw `Unable to update item ${item._id}.`;
      return res.json();
    });
};
