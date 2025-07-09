fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML = `
        <h2><strong>Name</strong>: ${data.name}</h2>
        <p><strong>Age</strong>: ${data.age}</p>
        <p><strong>Email</strong>: ${data.email}</p>
        `;
    })
    .catch(error => console.error('Error loading data:', error));
