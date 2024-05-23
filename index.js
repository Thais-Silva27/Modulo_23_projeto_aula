document.addEventListener('DOMContentLoaded', function () {
    const nomeElement = document.querySelector('#name');
    const usernameElement = document.querySelector ('#username');
    const avatarElement = document.querySelector ('#avatar');
    const reposElement = document.querySelector ('#repos');
    const followersElement = document.querySelector ('#followers');
    const followingElement = document.querySelector ('#following');
    const linkElement = document.querySelector ('#link');

    fetch('https://github.com/Thais-Silva27')
    .then (function(res) {
        return res.json();
    })
    .then(function(json) {
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        repos.innertext = json.public_repos;
        followersElement = innerText = json.followers;
        followingElement = innerText = json.following;
        linkElement.href = json.html_url;
    })
}
)