const API_KEY = "d1c4b3508270d50b04f4bf0e48930e60";

const API_URL = `https://api.allorigins.win/raw?url=` +
    encodeURIComponent(
        `https://gnews.io/api/v4/search?q=indonesia&lang=id&max=10&apikey=${API_KEY}`
    );

async function loadNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const newsContainer = document.getElementById("news-list");
        newsContainer.innerHTML = "";

        data.articles.forEach(article => {
            newsContainer.innerHTML += `
                <div class="card">
                    <img src="${article.image}" alt="Gambar Berita">
                    <div class="card-title">${article.title}</div>
                    <a href="${article.url}" target="_blank">Baca Selengkapnya</a>
                </div>
            `;
        });

        // Hero section
        const first = data.articles[0];
        document.getElementById("hero-title").innerText = first.title;
        document.getElementById("hero-desc").innerText = first.description;

    } catch (error) {
        console.error("Gagal memuat berita:", error);
        document.getElementById("news-list").innerHTML =
            "<p style='color:red;'>Gagal memuat berita dari API.</p>";
    }
}

loadNews();
