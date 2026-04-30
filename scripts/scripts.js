async function fetchRepositories() {
    const username = 'borbasmatyas'; 
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    // Csak azokat a repository-kat jelenítjük meg, amelyeknek van GitHub Pages oldala
    const pagesRepos = repos.filter(repo => repo.has_pages && repo.name !== username);

    // Rendezzük a repository-kat név szerint
    pagesRepos.sort((a, b) => a.name.localeCompare(b.name));
    
    // A rendezett repository-kat megjelenítjük a weboldalon
    const repoList = document.getElementById('repo-list');
    pagesRepos.forEach(repo => {

        // A repository-t megjelenítő kártya létrehozása
        const card = document.createElement('li');
        card.className = 'repo-card';

        // A repository nevének és linkjének megjelenítése
        const repoNameLink = document.createElement('a');
        repoNameLink.href = `https://${username}.github.io/${repo.name}`;
        repoNameLink.textContent = repo.name;
        repoNameLink.target = '_blank';

        // A repository nevének és linkjének hozzáadása a h2 elemhez
        const repoName = document.createElement('h2');
        repoName.appendChild(repoNameLink);

        // A repository GitHub linkjének megjelenítése
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = 'open repository on GitHub';
        repoLink.target = '_blank';

        card.appendChild(repoName);
        card.appendChild(repoLink);
        repoList.appendChild(card);
    });
}

fetchRepositories();