function getArticleGenerator(articles) {
    const content = document.querySelector("#content");

    return () => {
        currArt = articles.shift();
        if (!currArt) {
            return;
        }
        const article = document.createElement("article");
        content.appendChild(article);
        article.textContent = currArt;
    };
}
