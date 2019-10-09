export const postItem = item => {
  console.log('hi jake');
  return fetch('http://localhost:7891/api/v1/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item })
  })
    .then(res => {
      console.log(item);
      if(!res.ok) throw 'unable to post item';
      return res.json();
    });
};
