export const postItem = item => {
  return fetch('http://localhost:7891/api/v1/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item })
  })
    .then(res => {
      console.log('hi jake');
      if(!res.ok) throw 'unable to post item';
      return res.json();
    });
};
