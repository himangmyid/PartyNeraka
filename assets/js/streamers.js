// Database Streamer Party Neraka
const streamerData = [
    {
        nama: "Nugi Darmawan",
        foto: "./assets/img/nugi.jpg",
        ig: "https://www.instagram.com/nugrahadrmwn/",
        tiktok: "https://www.tiktok.com/@nugrahadrmwn",
        youtube: "https://www.youtube.com/@NugrahaDarmawan",
        donasi: "https://tako.id/NugiDarmawan",
        deskripsi: "Tukang parkir di pintu neraka, kalau lu gak donasi, lu masuk jalur VIP (Villa Iblis Permanen)."
    },
    {
        nama: "Fandra Octoramonth",
        foto: "./assets/img/octo.jpg",
        ig: "https://www.instagram.com/octoramonth/",
        tiktok: "https://www.tiktok.com/@fandraoctora",
        youtube: "https://www.youtube.com/@FandraOcto",
        donasi: "https://tako.id/fandraocto",
        deskripsi: "Kepala setan yang suka joget di atas bara api, gerakannya bikin iblis-iblis lain mual."
    },
    {
        nama: "Kho Petra",
        foto: "./assets/img/khopet.jpg",
        ig: "https://www.instagram.com/fernandespetra/",
        tiktok: "https://www.tiktok.com/@fernandespetra",
        youtube: "https://www.youtube.com/khopetra",
        donasi: "https://tako.id/KhoPetra",
        deskripsi: "Pembawa acara 'Indonesia's Next Top Setan', suaranya bikin beling neraka retak."
    },
    {
        nama: "Queenuts",
        foto: "./assets/img/queenut.jpg",
        ig: "https://www.instagram.com/queeenuts/",
        tiktok: "https://www.tiktok.com/@queeenuts",
        youtube: "https://www.youtube.com/@Queenuts",
        donasi: "https://tako.id/Queenuts",
        deskripsi: "Ratu neraka yang hobinya nyalain kompor gas pake jari kelingking. Horor sekaligus boros gas."
    },
    {
        nama: "DBangkongS",
        foto: "./assets/img/DBangkongS.jpg",
        ig: "https://www.instagram.com/dickyrtama/",
        tiktok: "https://www.tiktok.com/@dbangkongsss",
        youtube: "https://www.youtube.com/@DBangkongS",
        donasi: "https://tako.id/DBangkongS",
        deskripsi: "Bang kong (bangkai) yang masih bisa live streaming, katanya lagi cari duit buat beli minyak gosok."
    },
    {
        nama: "The Jooomers",
        foto: "./assets/img/hans.jpg",
        ig: "https://www.instagram.com/hansrattlexnake/",
        tiktok: "https://www.tiktok.com/@hansrattlexnake",
        youtube: "https://www.youtube.com/@TheJooomers",
        donasi: "https://tako.id/HansRattlexnake",
        deskripsi: "Geng generasi iblis Z yang doomscrolling sambil duduk di singgasana duri."
    },
    {
        nama: "veereesa",
        foto: "./assets/img/veereesa.jpg",
        ig: "https://www.instagram.com/veereesa_/",
        tiktok: "https://www.tiktok.com/@veereesa_",
        youtube: "https://www.youtube.com/@veereesa",
        donasi: "https://tako.id/veereesa",
        deskripsi: "Siluman Wi-Fi yang suka nge-ghosting chat, pas kamu butuh pertolongan sinyalnya ilang."
    },
    {
        nama: "oseanz",
        foto: "./assets/img/ose.jpg",
        ig: "https://www.instagram.com/oseanz/",
        tiktok: "https://www.tiktok.com/@oseanz",
        youtube: "https://www.youtube.com/@oseanz",
        donasi: "https://tako.id/oseanz",
        deskripsi: "Malaikat jatuh yang gagal ngasih hidayah, malah jualan voucher pulsa neraka."
    },
    {
        nama: "idris kurniawan",
        foto: "./assets/img/idris.jpg",
        ig: "https://www.instagram.com/idriskurniawan22/",
        tiktok: "https://www.tiktok.com/@idriskurniawan22",
        youtube: "https://www.youtube.com/@idriskurniawan",
        donasi: "https://tako.id/Idriskurniawan",
        deskripsi: "Pembuat api neraka versi murah, kualitasnya setara korek api basah."
    },
    {
        nama: "King Macbeth",
        foto: "./assets/img/Macbeth.jpg",
        ig: "https://www.instagram.com/iandipra/",
        tiktok: "https://www.tiktok.com/@kingmakmet",
        youtube: "https://www.youtube.com/@iandipra",
        donasi: "https://tako.id/Macbeth",
        deskripsi: "Raja hantu yang kepalanya suka ditinggal minum kopi. Serem, tapi lucu pas lagi bingung nyari kepala."
    },
    {
        nama: "Melcaro",
        foto: "./assets/img/Melcaro.jpg",
        ig: "https://www.instagram.com/melcaroo0/",
        tiktok: "https://www.tiktok.com/@slemelca",
        youtube: "https://www.youtube.com/@melcarooo",
        donasi: "https://tako.id/Melcaro",
        deskripsi: "Tukang sate iblis, tusukannya dari tulang rusuk sendiri. Rasanya pedas kayak abis kena azab."
    },
    {
        nama: "Juanicho",
        foto: "./assets/img/Juanicho.jpg",
        ig: "https://www.instagram.com/juanicho_",
        tiktok: "https://www.tiktok.com/@juanicho_",
        youtube: "https://www.youtube.com/@juanicho_",
        donasi: "https://tako.id/Juanicho",
        deskripsi: "Setan cilik yang hobinya ngupil sambil tertawa setan. Nyesek ditonton tapi gak berani matiin."
    },
    {
        nama: "xdelly",
        foto: "./assets/img/xdelly.jpg",
        ig: "https://www.instagram.com/xdellyf",
        tiktok: "https://www.tiktok.com/@xdelly",
        youtube: "https://www.youtube.com/@xdelly",
        donasi: "https://tako.id/xdelly",
        deskripsi: "Ghost yang kalau livestream suaranya kayak kaset kumaha. Menakutkan tapi bikin homesick jaman 90an."
    },
    {
        nama: "Mayuu",
        foto: "./assets/img/mayu.jpg",
        ig: "https://www.instagram.com/mayunaisuu_",
        tiktok: "https://www.tiktok.com/@mayunaisuu",
        youtube: "https://www.youtube.com/@mayyyuuu_",
        donasi: "https://tako.id/Mayuu",
        deskripsi: "Pocong yang patah hati, jalannya sambil ngerengek minta ditraktir indomie di neraka."
    },
    {
        nama: "NomNom",
        foto: "./assets/img/nom.jpg",
        ig: "https://www.instagram.com/silkanaomi",
        tiktok: "https://www.tiktok.com/@saosnomat",
        youtube: "https://www.youtube.com/@nomnom7789",
        donasi: "https://tako.id/NomNom",
        deskripsi: "Makhluk laparpok, makannya beling-beling neraka sampe kenyang."
    },
    {
        nama: "TomoyTom",
        foto: "./assets/img/tomytom.jpg",
        ig: "https://www.instagram.com/tommy_xuu/",
        tiktok: "/",
        youtube: "https://www.youtube.com/@TomoyTom",
        donasi: "https://tako.id/TomoyTom",
        deskripsi: "Tukang gedor pintu neraka yang gak pernah dibukain. Mengerikan karena keselnya nular."
    },
    {
        nama: "Hummybby",
        foto: "./assets/img/humyby.jpg",
        ig: "https://www.instagram.com/im.rin/",
        tiktok: "https://www.tiktok.com/@hummybby",
        youtube: "https://www.youtube.com/@hummybby",
        donasi: "https://tako.id/Hummybby",
        deskripsi: "Lebah neraka yang sengatannya bikin mimpi buruk seumur hidup, tapi lucu karena gaya terbangnya oleng."
    },
    {
        nama: "FX FM",
        foto: "./assets/img/fx.jpg",
        ig: "https://www.instagram.com/fxave_rius/",
        tiktok: "https://www.tiktok.com/@fxave_rius",
        youtube: "https://www.youtube.com/@fxaverius",
        donasi: "https://tako.id/Epekk",
        deskripsi: "Radio setan dengan suara serak seperti amplas. Siaran tengah malam isinya promosi jurusan neraka."
    },
    {
        nama: "Daniel Bong",
        foto: "./assets/img/dak.jpg",
        ig: "https://www.instagram.com/daniel.bong5/",
        tiktok: "https://www.tiktok.com/@danielbong4",
        youtube: "https://www.youtube.com/@danielbong6856",
        donasi: "https://tako.id/Danielbong",
        deskripsi: "Hantu yang kalau mangap keluar asap rokok. Racunnya nular, jangan cium napasnya."
    },
    // {
    //     nama: "Luthfi Al",
    //     foto: "./assets/img/",
    //     ig: "https://www.instagram.com/luthfiiall/",
    //     tiktok: "https://www.tiktok.com/@luthfiialll",
    //     youtube: "https://www.youtube.com/@luthfiiall",
    //     donasi: "https://tako.id/luthfiiall",
    //     deskripsi: "Alphabet iblis yang suka ngegas kalau liat huruf 'S'. Serem apalagi pas marah keluar huruf 'F'."
    // },
    {
        nama: "rannunn",
        foto: "./assets/img/ranun.jpg",
        ig: "https://www.instagram.com/rannunn",
        tiktok: "https://www.tiktok.com/@rannunn",
        youtube: "https://www.youtube.com/@mommyrannunn",
        donasi: "https://tako.id/rannunn",
        deskripsi: "Mommy hantu yang galaknya minta ampun, sekali maruh langsung matiin listrik seluruh neraka."
    },
    {
        nama: "Kawai Tristie",
        foto: "./assets/img/kawai.jpg",
        ig: "https://www.instagram.com/kawaitristie__",
        tiktok: "https://www.tiktok.com/@kawaitristie__",
        youtube: "https://www.youtube.com/@kawai_tristie",
        donasi: "https://tako.id/kawaitristie",
        deskripsi: "Setan imut yang suka mancing dengan pancingan tulang. Gemes sekaligus bikin merinding."
    },
    {
        nama: "Nugraha Kamsaa",
        foto: "./assets/img/kamsa.jpg",
        ig: "https://www.instagram.com/nugrahakamsa/",
        tiktok: "https://www.tiktok.com/@kamsa001",
        youtube: "https://www.youtube.com/@Kamsaax",
        donasi: "https://tako.id/Kamsa",
        deskripsi: "Preman neraka yang jualan minyak angin di depan pintu siksa. Dagangan paling laris."
    },
    {
        nama: "Lea Lee",
        foto: "./assets/img/lea.jpg",
        ig: "https://www.instagram.com/lealiioo/",
        tiktok: "https://www.tiktok.com/@lealioo",
        youtube: "https://www.youtube.com/@lealioo",
        donasi: "https://tako.id/lealioo",
        deskripsi: "Kuntilanak yang suka belanja online, barangnya dikirim pake jasa kurir siluman."
    },
    {
        nama: "margeaux",
        foto: "./assets/img/mita.jpg",
        ig: "https://www.instagram.com/mittamarvella",
        tiktok: "https://www.tiktok.com/@itsmargeaux",
        youtube: "https://www.youtube.com/@itsmargeaux",
        donasi: "https://tako.id/margeaux",
        deskripsi: "Bidadari neraka yang modusnya bikin nyesek, sekaligus bikin jantung copot."
    },
    {
        nama: "onigirilda",
        foto: "./assets/img/oni.jpg",
        ig: "https://www.instagram.com/onigirilda",
        tiktok: "https://www.tiktok.com/@onigirilda",
        youtube: "https://www.youtube.com/@onigirilda",
        donasi: "https://tako.id/onigirilda",
        deskripsi: "Hantu penjual onigiri isi beling, enak di mulut pedih di perut."
    },
    {
        nama: "Wellend",
        foto: "./assets/img/wellend.jpg",
        ig: "https://www.instagram.com/wellendd",
        tiktok: "https://www.tiktok.com/@wellendd",
        youtube: "https://www.youtube.com/@Wellenddd",
        donasi: "https://tako.id/Wellend",
        deskripsi: "Tukang servis AC neraka, dinginnya setara freezer rusak."
    },
    {
        nama: "Daniel Ivan",
        foto: "./assets/img/ivan.jpg",
        ig: "https://www.instagram.com/bbdan_ivan",
        tiktok: "https://www.tiktok.com/@bbdan123",
        youtube: "https://www.youtube.com/@DanielIvann",
        donasi: "https://tako.id/BBDan12",
        deskripsi: "Iblis kutu buku, setiap malem baca buku 'Neraka Untuk Pemula'. Bikin ngantuk sekaligus takut."
    },
    {
        nama: "rania",
        foto: "./assets/img/rania.jpg",
        ig: "https://www.instagram.com/raniaacu/",
        tiktok: "https://www.tiktok.com/@raniaacu",
        youtube: "https://www.youtube.com/raniaacu",
        donasi: "https://tako.id/raniaacu",
        deskripsi: "Hantu genit yang kalau ketawa kedengaran kayak sirine ambulans."
    },
    {
        nama: "efkahfajar",
        foto: "./assets/img/fajar.jpg",
        ig: "https://www.instagram.com/efkahfajar/",
        tiktok: "https://www.tiktok.com/@efkahfajar",
        youtube: "https://www.youtube.com/@efkahfajar",
        donasi: "https://tiptap.gg/efkahfajar",
        deskripsi: "Juru masak neraka, masakan khasnya 'Rawon Daging Setan'. Dijamin bikin lidah panas 7 hari 7 malam."
    },
    {
        nama: "Jekzy",
        foto: "./assets/img/jek.jpg",
        ig: "https://www.instagram.com/se_jekzy",
        tiktok: "https://www.tiktok.com/@se_jekzy",
        youtube: "https://www.youtube.com/jekzy",
        donasi: "https://tako.id/Jekzy",
        deskripsi: "Klown neraka yang balonnya dari kulit manusia. Lucu tapi pas dipencet berisik kayak jeritan."
    }
];

// // Database Streamer Party Neraka
    // const streamerData = [
    //     {
    //         nama: "Ghost Rider",
    //         foto: "https://i.pravatar.cc/300?img=12", // Ganti dengan link foto asli
    //         ig: "https://instagram.com/example",
    //         tiktok: "#",
    //         youtube: "#",
    //         donasi: "https://tako.id/example",
    //         deskripsi: "Pencari jiwa di malam hari."
    //     },
    //     {
    //         nama: "Satanic Gamer1",
    //         foto: "https://i.pravatar.cc/300?img=15",
    //         ig: "https://i.pravatar.cc/300?img=15",
    //         tiktok: "https://i.pravatar.cc/300?img=15",
    //         youtube: "#",
    //         donasi: "#",
    //         deskripsi: "Top global neraka jahanam."
    //     },
    //     {
    //         nama: "Satanic Gamer2",
    //         foto: "https://i.pravatar.cc/300?img=15",
    //         ig: "https://i.pravatar.cc/300?img=15",
    //         tiktok: "https://i.pravatar.cc/300?img=15",
    //         youtube: "#",
    //         donasi: "#",
    //         deskripsi: "Top global neraka jahanam."
    //     },
    //     {
    //         nama: "Satanic Gamer4",
    //         foto: "https://i.pravatar.cc/300?img=15",
    //         ig: "https://i.pravatar.cc/300?img=15",
    //         tiktok: "https://i.pravatar.cc/300?img=15",
    //         youtube: "#",
    //         donasi: "#",
    //         deskripsi: "Top global neraka jahanam."
    //     },
    //     {
    //         nama: "Satanic Gamer5",
    //         foto: "https://i.pravatar.cc/300?img=15",
    //         ig: "https://i.pravatar.cc/300?img=15",
    //         tiktok: "https://i.pravatar.cc/300?img=15",
    //         youtube: "#",
    //         donasi: "#",
    //         deskripsi: "Top global neraka jahanam."
    //     },
    //     // Copy-paste objek di atas sampai 30+ streamer
    // ];

