export const postItem = item => {
  return fetch('https://lili-inventory.herokuapp.com/api/v1/items', {
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
