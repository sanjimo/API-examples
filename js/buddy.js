const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displyBuddy(data))
}

loadBuddy();

const displyBuddy = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddy');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name : ${buddy.name.last} ${buddy.name.last} \n Email : ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}