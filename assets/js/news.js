const API_KEY = "d1c4b3508270d50b04f4bf0e48930e60";

const URL = `https://gnews.io/api/v4/top-headlines?lang=id&country=id&max=10&apikey=${API_KEY}`;

async function loadNews() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        const newsContainer = document.getElementById("news-list");
        newsContainer.innerHTML = ""; // kosongkan card contoh

        data.articles.forEach(article => {
            newsContainer.innerHTML += `
                <div class="card">
                    <img src="${article.image}" alt="Gambar Berita">
                    <div class="card-title">${article.title}</div>
                    <a href="${article.url}" target="_blank">Baca Selengkapnya</a>
                </div>
            `;
        });

    } catch (error) {
        console.error("Gagal memuat berita:", error);
        document.getElementById("news-list").innerHTML =
            "<p>Gagal memuat berita dari API.</p>";
    }
}

loadNews();
