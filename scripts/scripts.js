async function fetchRepositories() {
    const username = 'borbasmatyas'; 
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const repoList = document.getElementById('repo-list');
    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-card';

        const repoName = document.createElement('h2');
        repoName.textContent = repo.name;

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repoLink.href;
        repoLink.target = '_blank';

        const pagesLink = document.createElement('a');
        pagesLink.href = `https://${username}.github.io/${repo.name}`;
        pagesLink.textContent = pagesLink.href;
        pagesLink.target = '_blank';

        card.appendChild(repoName);
        card.appendChild(repoLink);
        card.appendChild(pagesLink);
        repoList.appendChild(card);
    });
}

fetchRepositories();