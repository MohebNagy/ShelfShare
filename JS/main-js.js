const books = [
  { title: "أرض زيكولا", author: "عمرو عبد الحميد", type: "Novel", category: "خيال علمي  مغامرة", description: "وصف قصير عن أرض زيكولا.", owner: "Library Al-Shorouk", cover: "https://cdn3.iconfinder.com/data/icons/infinity-ink-office/48/005_034_image_photo_picture-512.png" },
  { title: "أماريتا", author: "عمرو عبد الحميد", type: "Novel", category: "خيال علمي  مغامرة", description: "وصف قصير عن أماريتا.", owner: "El-Maktaba", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "إيكيجاي", author: "هيكتور غارسيا", type: "Book", category: "Self Development", description: "وصف قصير عن إيكيجاي.", owner: "Cairo Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أنت لي", author: "منى المرشود", type: "Novel", category: "رومانسية  دراما", description: "وصف قصير عن أنت لي.", owner: "Ahmed Ali", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "في قلبي أنثى عبرية", author: "خولة حمدي", type: "Novel", category: "رومانسية  دراما", description: "وصف قصير عن في قلبي أنثى عبرية.", owner: "Mona Khaled", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أحببتك أكثر مما ينبغي", author: "أثير عبد الله النشمي", type: "Novel", category: "Romance", description: "وصف قصير عن أحببتك أكثر مما ينبغي.", owner: "Omar Hassan", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "هيبتا", author: "محمد صادق", type: "Novel", category: "رومانسية  دراما", description: "وصف قصير عن هيبتا.", owner: "Omar Hassan", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الفيل الأزرق", author: "أحمد مراد", type: "Novel", category: "غموض  رعب", description: "وصف قصير عن الفيل الأزرق.", owner: "Ahmed Ali", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "1919", author: "أحمد مراد", type: "Novel", category: "تاريخي  مغامرة", description: "وصف قصير عن 1919.", owner: "Mona Khaled", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "تراب الماس", author: "أحمد مراد", type: "Novel", category: "غموض  جريمة", description: "وصف قصير عن تراب الماس.", owner: "Mohamed Mahmoud", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "غربة الياسمين", author: "خولة حمدي", type: "Novel", category: "دراما  رومانسية", description: "وصف قصير عن غربة الياسمين.", owner: "Tarek Salah", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الرحلة", author: "فرانسيس كولينز", type: "Book", category: "تنمية بشرية  سيرة ذاتية", description: "وصف قصير عن الرحلة.", owner: "Ahmed Ali", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "سيدة القمر", author: "جوخة الحارثي", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن سيدة القمر.", owner: "Dar Al-Kitab", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "بيت القبطية", author: "أشرف العشماوي", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن بيت القبطية.", owner: "El-Maktaba", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أولاد حارتنا", author: "Naguib Mahfouz", type: "Novel", category: "فلسفة  دراما", description: "وصف قصير عن أولاد حارتنا.", owner: "Sara Ibrahim", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "اللص والكلاب", author: "Naguib Mahfouz", type: "Novel", category: "جريمة  دراما", description: "وصف قصير عن اللص والكلاب.", owner: "Library Al-Shorouk", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الحرافيش", author: "Naguib Mahfouz", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن الحرافيش.", owner: "Library Al-Shorouk", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الطريق", author: "Naguib Mahfouz", type: "Novel", category: "دراما", description: "وصف قصير عن الطريق.", owner: "Amina Nabil", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "ثرثرة فوق النيل", author: "Naguib Mahfouz", type: "Novel", category: "فلسفة  دراما", description: "وصف قصير عن ثرثرة فوق النيل.", owner: "Cairo Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "خان الخليلي", author: "Naguib Mahfouz", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن خان الخليلي.", owner: "Fatma Yousry", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الرجال من المريخ والنساء من الزهرة", author: "جون غراي", type: "Book", category: "تنمية بشرية  علاقات", description: "وصف قصير عن الرجال من المريخ والنساء من الزهرة.", owner: "Mohamed Library", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "العادات السبع للناس الأكثر فعالية", author: "ستيفن كوفي", type: "Book", category: "Self Development", description: "وصف قصير عن العادات السبع للناس الأكثر فعالية.", owner: "Al-Ahram Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "نظرية الفستق", author: "فهد عامر الأحمدي", type: "Book", category: "Self Development", description: "وصف قصير عن نظرية الفستق.", owner: "Hany Adel", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "خوارق اللاشعور", author: "علي الوردي", type: "Book", category: "تنمية بشرية  فلسفة", description: "وصف قصير عن خوارق اللاشعور.", owner: "Youssef Karim", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "البداية", author: "إبراهيم الفقي", type: "Book", category: "Self Development", description: "وصف قصير عن البداية.", owner: "Hany Adel", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "قوة الآن", author: "إيكهارت تول", type: "Book", category: "تنمية بشرية  روحية", description: "وصف قصير عن قوة الآن.", owner: "Al-Ahram Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "من صفر إلى واحد", author: "بيتر ثيل", type: "Book", category: "إدارة  ريادة أعمال", description: "وصف قصير عن من صفر إلى واحد.", owner: "Al-Ahram Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الأب الغني والأب الفقير", author: "روبرت كيوساكي", type: "Book", category: "إدارة  تنمية بشرية", description: "وصف قصير عن الأب الغني والأب الفقير.", owner: "Ramy's Store", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "إدارة الأولويات", author: "ستيفن كوفي", type: "Book", category: "إدارة  تنمية بشرية", description: "وصف قصير عن إدارة Firstويات.", owner: "Tarek Salah", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "السر", author: "روندا بايرن", type: "Book", category: "تنمية بشرية  روحية", description: "وصف قصير عن السر.", owner: "El-Maktaba", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "دع القلق وابدأ الحياة", author: "ديل كارنيجي", type: "Book", category: "Self Development", description: "وصف قصير عن دع القلق وابدأ الحياة.", owner: "Mohamed Library", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "كيف تكسب الأصدقاء", author: "ديل كارنيجي", type: "Book", category: "تنمية بشرية  علاقات", description: "وصف قصير عن كيف تكسب الأصدقاء.", owner: "Nourhan Samir", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "العالم كما هو", author: "بن رودس", type: "Book", category: "سياسة  سيرة ذاتية", description: "وصف قصير عن العالم كما هو.", owner: "Ramy's Store", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "حياتي", author: "أحمد زويل", type: "Book", category: "سيرة ذاتية  علم", description: "وصف قصير عن حياتي.", owner: "Youssef Karim", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أنا قبل كل شيء", author: "الجوهرة الرمال", type: "Novel", category: "دراما  رومانسية", description: "وصف قصير عن أنا قبل كل شيء.", owner: "El-Maktaba", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "بعد", author: "آنا تود", type: "Novel", category: "رومانسية  دراما", description: "وصف قصير عن بعد.", owner: "Khaled Said", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "بين القصرين", author: "Naguib Mahfouz", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن بين القصرين.", owner: "Youssef Karim", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "قصر الشوق", author: "Naguib Mahfouz", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن قصر الشوق.", owner: "Library Al-Shorouk", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "السكرية", author: "Naguib Mahfouz", type: "Novel", category: "دراما  اجتماعية", description: "وصف قصير عن السكرية.", owner: "Sara Ibrahim", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أرض زيكولا", author: "عمرو عبد الحميد", type: "Novel", category: "خيال علمي  مغامرة", description: "وصف قصير عن أرض زيكولا.", owner: "Maktabat Al-Nahda", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "خوف", author: "Osama AlMuslim", type: "Novel", category: "Horror/Fantasy", description: "Novel من الأدب السعودي المعاصر.", owner: "Mohamed Mahmoud", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "بساتين عربستان", author: "Osama AlMuslim", type: "Novel", category: "Fantasy", description: "الPart First من Series بساتين عربستان.", owner: "Maktabat Al-Nahda", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "عصبة الشياطين", author: "Osama AlMuslim", type: "Novel", category: "Fantasy", description: "الPart Second من Series بساتين عربستان.", owner: "BookHouse", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "رياح هجر", author: "Osama AlMuslim", type: "Novel", category: "Fantasy", description: "الPart Third من Series بساتين عربستان.", owner: "Mohamed Library", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "العرجاء", author: "Osama AlMuslim", type: "Novel", category: "Fantasy", description: "الPart Fourth من Series بساتين عربستان.", owner: "Ahmed's Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الساحرة الهجينة", author: "Osama AlMuslim", type: "Novel", category: "Fantasy", description: "الPart Fifth من Series بساتين عربستان.", owner: "Salma Fathy", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "عرين الأسد", author: "Osama AlMuslim", type: "Novel", category: "Fantasy", description: "الPart Sixth من Series بساتين عربستان.", owner: "Salma Fathy", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "لج", author: "Osama AlMuslim", type: "Novel", category: "Adventure/Fantasy", description: "الPart First من ملحمة البحور السبعة.", owner: "Library Al-Shorouk", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "ملكة الغرانيق", author: "Osama AlMuslim", type: "Novel", category: "Adventure/Fantasy", description: "الPart Second من ملحمة البحور السبعة.", owner: "Layla Mostafa", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "ثورة الحور", author: "Osama AlMuslim", type: "Novel", category: "Adventure/Fantasy", description: "الPart Third من ملحمة البحور السبعة.", owner: "Dar Al-Kitab", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "صراع الملكات", author: "Osama AlMuslim", type: "Novel", category: "Adventure/Fantasy", description: "الPart Fourth من ملحمة البحور السبعة.", owner: "Ramy's Store", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "فجر السايرينات", author: "Osama AlMuslim", type: "Novel", category: "Adventure/Fantasy", description: "الPart Fifth من ملحمة البحور السبعة.", owner: "Fatma Yousry", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أبابيل", author: "Ahmed AlHamdan", type: "Novel", category: "Fantasy", description: "الPart First من Series ملحمة الطين والنار.", owner: "Mohamed Mahmoud", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "الجساسة", author: "Ahmed AlHamdan", type: "Novel", category: "Fantasy", description: "الPart Second من Series ملحمة الطين والنار.", owner: "Ahmed Ali", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "جمانا", author: "Ahmed AlHamdan", type: "Novel", category: "Fantasy", description: "الPart Third من Series ملحمة الطين والنار.", owner: "Sara Ibrahim", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "السِجيل", author: "Ahmed AlHamdan", type: "Novel", category: "Fantasy", description: "الPart Fourth من Series ملحمة الطين والنار.", owner: "Dar Al-Kitab", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "آرسس", author: "Ahmed AlHamdan", type: "Novel", category: "Fantasy", description: "Novel Famousة لأحمد آل حمدان.", owner: "Cairo Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "آزر", author: "Ahmed AlHamdan", type: "Novel", category: "Fantasy", description: "Novel آزر: ابن ذئبة الوادي.", owner: "Khaled Said", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "مدينة الحب لا يسكنها العقلاء", author: "Ahmed AlHamdan", type: "Novel", category: "Romance", description: "من أكثر أعماله شهرة.", owner: "Hany Adel", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "أنت كل أشيائي الجميلة", author: "Ahmed AlHamdan", type: "Novel", category: "Romance", description: "Novel وجدانية.", owner: "Ibrahim Adel", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "ردني إليك", author: "Ahmed AlHamdan", type: "Novel", category: "Romance", description: "Novel رومانسية مؤثرة.", owner: "Al-Ahram Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "تلاقي الأرواح", author: "Ahmed AlHamdan", type: "Novel", category: "Romance/Philosophy", description: "Novel أدبية Famousة.", owner: "El-Maktaba", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Pride and Prejudice", author: "Jane Austen", type: "Novel", category: "Classic Romance", description: "A classic novel of manners and courtship.", owner: "Ahmed's Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "1984", author: "George Orwell", type: "Novel", category: "Dystopian", description: "A chilling vision of totalitarian control.", owner: "Maktabat Al-Nahda", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", type: "Novel", category: "Historical Fiction", description: "A story of justice and compassion.", owner: "Mona Khaled", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", type: "Novel", category: "Classic", description: "A critique of the American Dream.", owner: "Ramy's Store", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Moby-Dick", author: "Herman Melville", type: "Novel", category: "Adventure", description: "An obsession with a white whale.", owner: "Omar Hassan", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "War and Peace", author: "Leo Tolstoy", type: "Novel", category: "Historical", description: "An epic set during the Napoleonic wars.", owner: "Ahmed's Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", type: "Novel", category: "Psychological", description: "A study of guilt and conscience.", owner: "Dar Al-Kitab", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", type: "Novel", category: "Young Adult", description: "A teen's struggle with identity.", owner: "El-Maktaba", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Brave New World", author: "Aldous Huxley", type: "Novel", category: "Dystopian", description: "A society controlled by technology.", owner: "BookHouse", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", type: "Novel", category: "Fantasy", description: "A heroic journey and unexpected adventure.", owner: "Tarek Salah", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Anna Karenina", author: "Leo Tolstoy", type: "Novel", category: "Classic", description: "A tragic tale of love and society.", owner: "Al-Ahram Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Odyssey", author: "Homer", type: "Epic", category: "Mythology", description: "The long journey of Odysseus.", owner: "Al-Ahram Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Frankenstein", author: "Mary Shelley", type: "Novel", category: "Gothic", description: "A scientist's dangerous experiment.", owner: "Ibrahim Adel", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Dracula", author: "Bram Stoker", type: "Novel", category: "Horror", description: "The classic vampire tale.", owner: "Omar Hassan", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", type: "Novel", category: "Magic Realism", description: "A multi-generational saga.", owner: "Fatma Yousry", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Alchemist", author: "Paulo Coelho", type: "Novel", category: "Philosophical", description: "A young shepherd's search for meaning.", owner: "Hany Adel", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Road", author: "Cormac McCarthy", type: "Novel", category: "Post-Apocalyptic", description: "A father and son in a devastated world.", owner: "Maktabat Al-Nahda", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "The Kite Runner", author: "Khaled Hosseini", type: "Novel", category: "Contemporary", description: "Friendship and redemption in Afghanistan.", owner: "Mohamed Library", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Life of Pi", author: "Yann Martel", type: "Novel", category: "Adventure", description: "Survival at sea with a Bengal tiger.", owner: "Ahmed's Books", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
  { title: "Dune", author: "Frank Herbert", type: "Novel", category: "Science Fiction", description: "Politics and power on a desert planet.", owner: "Mohamed Library", cover: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
];

document.getElementById("login-btn").addEventListener("click" , function() {
    window.location.href = "login.html";
})
document.getElementById("signup-btn").addEventListener("click" , function() {
    window.location.href = "Signup.html";
})

const booksPerPage = 16;
let currentPage = 1;
let selectedType = "";
let wishlist = [];

const prev_btn = document.getElementById("prev-btn");
const next_btn = document.getElementById("next-btn");


function displayBooks() {
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    const booksToDisplay = books.slice(start, end);

    const container = document.getElementById("store");
    container.innerHTML = '';

    booksToDisplay.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    let w ="";
    if(wishlist.includes(book)){
        w= "♥";
    } else {
        w = "♡";
    }
    bookCard.innerHTML = `
        <div class="wishlist-btn">${w}</div>
        <img src="${book.cover}" alt="${book.title}" class="book-image">
        <div class="book-content">
        <span class="discount-tag">36% off</span>
        <h2 class="book-title">${book.title}</h2>
        <p class="book-desc">${book.description}</p>
        <p class="book-owner">📖 ${book.owner}</p>
        </div>
    `;
    container.appendChild(bookCard);
    });
    
    if (currentPage === 1){
        prev_btn.style.display = "none";
    } else {
        prev_btn.style.display = "flex";
    }
    if (booksToDisplay.length < 16){
        next_btn.style.display = "none";
    } else {
        next_btn.style.display = "flex";
    }
    
document.querySelectorAll(".wishlist-btn").forEach((btn,index) => {
    btn.addEventListener("click" , () => {
        let book = booksToDisplay[index];

        if(wishlist.includes(book)){
            wishlist = wishlist.filter(item => item !== book);
            btn.classList.remove("active");
            btn.innerText = "♡";
        } else {
            wishlist.push(book);
            btn.classList.add("active");
            btn.innerText = "♥";   
        }
        
    console.log("Wish List:", wishlist);
    })
})

}

displayBooks();



function nextPage() {
    if ((currentPage * booksPerPage) < books.length) {
    currentPage++;
    displayBooks();
    }
}

function prevPage() {
    if (currentPage > 1) {
    currentPage--;
    displayBooks();
    }
}
let filteredBooks = books;

function searchBooks() {
const query = document.getElementById("search").value.toLowerCase().trim();

filteredBooks = books;
if(selectedType !== ""){
    filteredBooks = filteredBooks.filter(book => book.type.toLowerCase() === selectedType);
}

if (query !== "") {
    filteredBooks = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.owner.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query) ||
        book.type.toLowerCase().includes(query)
    );
}


const container = document.getElementById("store");
container.innerHTML = '';

if (filteredBooks.length === 0) {
    container.innerHTML = `<p>No results for "${query}"</p>`;
    next_btn.style.display = "none";
    return;
}

filteredBooks.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    let w ="";
    if(wishlist.includes(book)){
        w= "♥";
    } else {
        w = "♡";
    }
    
    bookCard.innerHTML = `
        <div class="wishlist-btn">${w}</div>
        <img src="${book.cover}" alt="${book.title}" class="book-image">
        <div class="book-content">
            <span class="discount-tag">36% off</span>
            <h2 class="book-title">${book.title}</h2>
            <p class="book-desc">${book.description}</p>
            <p class="book-owner">📖 ${book.owner}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
    container.appendChild(bookCard);
});

document.querySelectorAll(".wishlist-btn").forEach((btn,index) => {
    btn.addEventListener("click" , () => {
        let book = filteredBooks[index];

        if(wishlist.includes(book)){
            wishlist = wishlist.filter(item => item !== book);
            btn.classList.remove("active");
            btn.innerText = "♡";
        } else {
            wishlist.push(book);
            btn.classList.add("active");
            btn.innerText = "♥";   
        }
        
    console.log("Wish List:", wishlist);
    })
})

}

const q_nov = document.getElementById("nov"); 
const q_boo = document.getElementById("boo");
document.querySelectorAll(".filter-type button").forEach(btn => {
    btn.addEventListener("click", () => {
        let type = btn.value.toLowerCase();

        if(selectedType === type){
            selectedType = "";
            if(type === "novel"){
                q_nov.classList.remove("active");
            } else {
                q_boo.classList.remove("active");
            }
        } else {
            selectedType = type;
            q_nov.classList.remove("active");
            q_boo.classList.remove("active");

            if(type === "novel"){
                q_nov.classList.add("active");
            } else {
                q_boo.classList.add("active");
            }
        }
        searchBooks();
    })
});

let backToTop = document.getElementById("back_to_top");

function  checkForScroll() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}
window.onload = checkForScroll();
window.addEventListener("scroll" , () => {
    checkForScroll();
});

backToTop.addEventListener("click" , () => {
    window.scrollTo({top : 0 , behavior : "smooth"});
});


document.querySelector(".search button").addEventListener("click", searchBooks);

document.getElementById("search").addEventListener("keypress", function(e) {
if (e.key === "Enter") {
    searchBooks();
}
});


