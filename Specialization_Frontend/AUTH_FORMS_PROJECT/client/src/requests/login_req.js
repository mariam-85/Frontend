export const login_req = user => {
    fetch('http://localhost:2001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user),
      credentials: 'include' // включаем отправку куков
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }