const btn = document.querySelector('button');
const img = document.querySelector('#img img');

const requesturl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
xhr.open('GET', requesturl);
let data;

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.responseText);
    }
};
xhr.send();

const getdetails = () => {
    if (data) {
        // Update the content of the card
        document.querySelector('#name').innerText = data.name;
        document.querySelector('#followers').innerText = data.followers;
        document.querySelector('#twitter').innerText = data.twitter_username || 'N/A';
        document.querySelector('#repos').innerText = data.public_repos;
        document.querySelector('#bio').innerText = data.bio || 'N/A';
        document.querySelector('#location').innerText = data.location || 'N/A';
        
        // Update the profile image
        img.src = data.avatar_url;
    }
};

btn.addEventListener('click', getdetails);
