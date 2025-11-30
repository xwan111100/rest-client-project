// MASUKKAN API KEY GNEWS BARU DI SINI
const API_KEY = "2823370dc14dd95226833107e87c9366";

async function searchNews() {
    const keyword = document.getElementById("keyword").value.trim();
    const results = document.getElementById("search-results");

    if (keyword === "") {
        results.innerHTML = "<p>Masukkan kata kunci untuk mencari berita.</p>";
        return;
    }

    results.innerHTML = "<p>Mencari berita...</p>";

    // API GNews Pencarian
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(keyword)}&lang=id&max=12&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Jika API key salah atau expired
        if (data.errors) {
            results.innerHTML = `
                <p style="color:red;">
                    API Key tidak valid atau sudah expired.<br>
                    Silahkan buat API key baru di https://gnews.io/
                </p>
            `;
            return;
        }

        if (!data.articles || data.articles.length === 0) {
            results.innerHTML = "<p>Tidak ada hasil ditemukan.</p>";
            return;
        }

        let html = "";
        data.articles.forEach(article => {
            html += `
                <div class="card">
                    <img src="${article.image || 'https://picsum.photos/400/200'}">
                    <div class="card-title">${article.title}</div>
                    <a href="${article.url}" target="_blank">Baca Selengkapnya</a>
                </div>
            `;
        });

        results.innerHTML = html;

    } catch (error) {
        console.error(error);
        results.innerHTML = "<p>Terjadi kesalahan saat mengambil data.</p>";
    }
}
