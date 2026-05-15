// PartyNeraka\assets\js\main.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('streamer-grid');
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions-box');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadMoreContainer = document.getElementById('load-more-container');

    let itemsToShow = 8; // Jumlah awal yang ditampilkan
    let currentFilteredData = [...streamerData]; // Data yang sedang aktif (setelah difilter search)

    // ==========================================
    // FUNGSI RENDER UTAMA
    // ==========================================
    function renderStreamers(limitView = true) {
        grid.innerHTML = ''; 
        
        // Ambil data sebagian (jika limitView true) atau semuanya
        const dataToRender = limitView ? currentFilteredData.slice(0, itemsToShow) : currentFilteredData;

        if (dataToRender.length === 0) {
            grid.innerHTML = `<p class="col-span-full text-center text-gray-400 py-10 italic">Jiwa tidak ditemukan di neraka ini...</p>`;
            loadMoreContainer.classList.add('hidden');
            return;
        }

        dataToRender.forEach(person => {
            const card = document.createElement('div');
            card.className = 'card-neraka bg-[#111] overflow-hidden rounded-xl border border-white/10 relative group flex flex-col';
            
            card.innerHTML = `
                <div class="relative w-full aspect-square overflow-hidden bg-[#050505]">
                    <img src="${person.foto}" alt="${person.nama}" 
                        class="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90"></div>
                </div>
                <div class="p-5 flex flex-col flex-grow bg-[#111]">
                    <h3 class="text-xl md:text-2xl font-bold text-red-600 mb-2 uppercase tracking-tight">${person.nama}</h3>
                    <p class="text-sm text-gray-300 mb-6 italic leading-relaxed line-clamp-3">"${person.deskripsi}"</p>
                    <div class="mt-auto">
                        <div class="flex gap-5 text-gray-400 mb-5 text-xl">
                            <a href="${person.ig}" class="hover:text-pink-500"><i class="fab fa-instagram"></i></a>
                            <a href="${person.tiktok}" class="hover:text-white"><i class="fab fa-tiktok"></i></a>
                            <a href="${person.youtube}" class="hover:text-red-600"><i class="fab fa-youtube"></i></a>
                        </div>
                        <a href="${person.donasi}" target="_blank" 
                            class="block w-full text-center bg-gradient-to-r from-red-900 to-red-700 text-white text-[10px] font-black py-3 rounded-lg transition-all hover:from-red-600 tracking-widest uppercase">
                            SUPPORT VIA TAKO.ID
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Tampilkan/Sembunyikan tombol Load More
        if (itemsToShow >= currentFilteredData.length) {
            loadMoreContainer.classList.add('hidden');
        } else {
            loadMoreContainer.classList.remove('hidden');
        }
    }

    // ==========================================
    // LOGIKA TOMBOL LOAD MORE
    // ==========================================
    loadMoreBtn.addEventListener('click', () => {
        itemsToShow += 8; // Tambah 8 data lagi setiap klik
        renderStreamers();
    });

    // ==========================================
    // LOGIKA PENCARIAN & SARAN
    // ==========================================
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        
        // Filter database asli
        currentFilteredData = streamerData.filter(s => 
            s.nama.toLowerCase().includes(value)
        );

        itemsToShow = 8; // Reset jumlah tampilan ke 8 setiap kali mencari
        renderStreamers();

        // Suggestions Box (Saran pencarian)
        if (value.length > 0) {
            const suggestions = currentFilteredData.slice(0, 5);
            if (suggestions.length > 0) {
                suggestionsBox.innerHTML = '';
                suggestions.forEach(s => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item text-white border-b border-red-900/30 hover:bg-red-900/20';
                    div.innerHTML = `<i class="fas fa-ghost mr-2 text-red-600"></i> ${s.nama}`;
                    div.onclick = () => {
                        searchInput.value = s.nama;
                        suggestionsBox.classList.add('hidden');
                        currentFilteredData = [s];
                        renderStreamers();
                    };
                    suggestionsBox.appendChild(div);
                });
                suggestionsBox.classList.remove('hidden');
            } else {
                suggestionsBox.classList.add('hidden');
            }
        } else {
            suggestionsBox.classList.add('hidden');
        }
    });

    // Klik di luar search untuk tutup suggestion
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.add('hidden');
        }
    });

    // Jalankan render pertama kali
    renderStreamers();
});