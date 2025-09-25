    document.getElementById("login-btn").addEventListener("click" , function() {
        window.location.href = "login.html";
    })
    document.getElementById("signup-btn").addEventListener("click" , function() {
        window.location.href = "Signup.html";
    })
    let backToTop = document.getElementById("back_to_top");

    window.addEventListener("scroll" , () => {
        if(window.scrollY > 200){
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    })
    backToTop.addEventListener("click" , () => {
        window.scrollTo({top : 0 , behavior : "smooth"});
    });


    document.getElementById("bookmark1").addEventListener("click" , () => {
        window.scrollTo({top : 700 , behavior : "smooth"});
    })
    document.getElementById("bookmark2").addEventListener("click" , () => {
        window.scrollTo({top : 1350 , behavior : "smooth"});
    })        
    document.getElementById("bookmark3").addEventListener("click" , () => {
        window.scrollTo({top : 2740 , behavior : "smooth"});
    })       

    let faqs = [
        { question: "What is this platform about?", answer: "It is a digital library system where you can browse, borrow, and manage books online." },
        { question: "How do I create an account?", answer: "Click on the 'Sign Up' button on the homepage, fill in the required details, and verify your email." },
        { question: "Is the service free to use?", answer: "Yes, browsing and basic features are free. Some advanced features may require a subscription." },
        { question: "How can I borrow a book?", answer: "Open the book’s details page and click 'Borrow'. If the book is available, it will be added to your borrowed list." },
        { question: "Can I buy books here?", answer: "Yes, if the book is marked as 'Available for Sale', you can purchase it directly from the platform." },
        { question: "How do I return a borrowed book?", answer: "Go to your account’s 'Borrowed Books' section and click on 'Return'." },
        { question: "What file formats are supported?", answer: "We support CSV for importing/exporting data, along with images in JPG and PNG for book covers." },
        { question: "Can I upload my own books?", answer: "Yes, registered users can upload books with details like title, description, and cover image." },
        { question: "How can I search for a book?", answer: "Use the search bar on the homepage to look for books by title, author, or category." },
        { question: "Is there a limit to how many books I can borrow?", answer: "Yes, free accounts can borrow up to 5 books at a time. Premium accounts have no limit." },
        { question: "Can I edit or delete a book I uploaded?", answer: "Yes, go to 'My Books' in your profile and you’ll find options to edit or remove your uploads." },
        { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email." },
        { question: "Does the platform support mobile devices?", answer: "Yes, the website is mobile-friendly and can be accessed from any smartphone or tablet." },
        { question: "How do I donate to support the platform?", answer: "Go to the 'Donations' page and choose your preferred payment method." },
        { question: "What happens if I forget to return a book?", answer: "You’ll receive reminder notifications. Repeated delays may limit your borrowing privileges." },
        { question: "Can I join study groups?", answer: "Yes, you can create or join Bible study groups or reading groups from the 'Groups' section." },
        { question: "Are there daily notifications?", answer: "Yes, you’ll receive daily verses, event reminders, and updates on borrowed books." },
        { question: "How can I contact support?", answer: "Go to the 'Contact Us' page and fill out the form or email us directly." },
        { question: "Can I change my profile details later?", answer: "Yes, you can update your personal information anytime from your account settings." },
        { question: "What browsers are supported?", answer: "The platform works best on the latest versions of Chrome, Edge, Firefox, and Safari." }
    ];

    const faq_container = document.getElementById("faq-container");

    faqs.forEach(faq => {
        let item = document.createElement("div");
        item.className = "faq-item";

        item.innerHTML = `
            <p class="faq-question">
                ${faq.question}
                <span class="arrow">&#9660;</span>
            </p>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>`;

        const answer = item.querySelector(".faq-answer");

        item.addEventListener("click", () => {
            item.classList.toggle("active");
            if (item.classList.contains("active")){
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            } 
        });

        faq_container.appendChild(item);

    })

    function searchfaq() {
        const query = document.getElementById("search").value.toLowerCase().trim();

        let filteredquestions = [];

        if (query !== "") {
            filteredquestions = faqs.filter(faq => 
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query)
            );
        } else {
            filteredquestions = faqs;
        }


        const container = document.getElementById("faq-container");
        container.innerHTML = '';

        if (filteredquestions.length === 0) {
            container.innerHTML = `<p>No results for "${query}"</p>`;
            return;
        }

        filteredquestions.forEach(q => {
            let item = document.createElement("div");
            item.className = "faq-item";

            item.innerHTML = `
                <p class="faq-question">
                    ${q.question}
                    <span class="arrow">&#9660;</span>
                </p>
                <div class="faq-answer">
                    <p>${q.answer}</p>
                </div>`;

            const answer = item.querySelector(".faq-answer");

            item.addEventListener("click", () => {
                item.classList.toggle("active");
                if (item.classList.contains("active")){
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                } 
            });
            faq_container.appendChild(item);
        });
    }

    document.querySelector("#faq-search button").addEventListener("click", searchfaq);

    document.getElementById("search").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchfaq();
    }
    });

    document.getElementById("chat").addEventListener("click" , function() {
        window.location.href = "https://web.whatsapp.com/";
    })
