async function fetchRepositories() {
    const username = 'borbasmatyas'; // Cseréld le a GitHub felhasználónevedre
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const repoList = document.getElementById('repo-list');
    repos.forEach(repo => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.textContent = repo.name;
        listItem.appendChild(link);
        repoList.appendChild(listItem);
    });
}

fetchRepositories();