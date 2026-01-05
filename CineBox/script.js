// Configuration
const CONFIG = {
    API_KEY: '4007d9cf37991d01eab5490b26cded4a',
    TMDB_BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    IMAGE_SIZES: {
        backdrop: 'w1280',
        poster: 'w500',
        profile: 'w185',
        logo: 'w300'
    },
    CATEGORIES: [
        { id: 'originals', title: 'CineBox Originals', type: 'tv', params: 'with_networks=213', isLarge: true },
        { id: 'kannada', title: 'Kannada Blockbusters', type: 'movie', params: 'with_original_language=kn', isLarge: false },
        { id: 'hindi', title: 'Hindi Superstars', type: 'movie', params: 'with_original_language=hi', isLarge: false },
        { id: 'english', title: 'Hollywood Hits', type: 'movie', params: 'with_original_language=en', isLarge: false },
        { id: 'trending', title: 'Trending Now', type: 'all', params: 'time_window=week', isLarge: false },
        { id: 'toprated', title: 'Top Rated', type: 'movie', params: '', isLarge: false },
        { id: 'tv_shows', title: 'Trending TV Shows', type: 'tv', params: 'with_genres=10759', isLarge: false },
        { id: 'action', title: 'Action Movies', type: 'movie', params: 'with_genres=28', isLarge: false },
        { id: 'comedy', title: 'Comedy Movies', type: 'movie', params: 'with_genres=35', isLarge: false },
        { id: 'horror', title: 'Horror Movies', type: 'movie', params: 'with_genres=27', isLarge: false },
        { id: 'mystery_tv', title: 'Mystery & Sci-Fi TV', type: 'tv', params: 'with_genres=10765', isLarge: false },
        { id: 'romance', title: 'Romance', type: 'movie', params: 'with_genres=10749', isLarge: false },
        { id: 'channels', title: 'Premium Channels', type: 'channel', params: '', isLarge: true },
        { id: 'documentary', title: 'Documentaries', type: 'movie', params: 'with_genres=99', isLarge: false }
    ],
    HERO_MOVIES: [
        {
            id: 1,
            title: 'Stranger Things',
            description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
            year: 2024,
            match: 92,
            rating: 'TV-14',
            seasons: 4,
            quality: 'HD',
            backdrop: 'https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
            logo: 'https://fontmeme.com/permalink/240117/4c3be12e8b9d4ab532615f17692cf3d3.png',
            cast: [
                { name: 'Millie Bobby Brown', img: 'https://image.tmdb.org/t/p/w185/8GId8S0B998lU866Wz671D6K4.jpg' },
                { name: 'Finn Wolfhard', img: 'https://image.tmdb.org/t/p/w185/n87X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Winona Ryder', img: 'https://image.tmdb.org/t/p/w185/k8IthpxT5S9v9vU8v9An3mY8k7i.jpg' },
                { name: 'David Harbour', img: 'https://image.tmdb.org/t/p/w185/ch3pxT5S9v9vU8v9An3mY8k7i.jpg' }
            ],
            genres: ['Drama', 'Fantasy', 'Horror'],
            trailerId: 'mnd7sFt5c3A'
        },
        {
            id: 2,
            title: 'Dune: Part Two',
            description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.',
            year: 2024,
            match: 96,
            rating: 'PG-13',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Dune_Logo.png',
            cast: [
                { name: 'Timothée Chalamet', img: 'https://image.tmdb.org/t/p/w185/BE7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Zendaya', img: 'https://image.tmdb.org/t/p/w185/zA7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Rebecca Ferguson', img: 'https://image.tmdb.org/t/p/w185/rf7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Austin Butler', img: 'https://image.tmdb.org/t/p/w185/ab7X6vYmpxYf6Fto9An3mY8k7i.jpg' }
            ],
            genres: ['Sci-Fi', 'Action', 'Adventure'],
            trailerId: 'Way9Dexny3w'
        },
        {
            id: 3,
            title: 'Oppenheimer',
            description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
            year: 2023,
            match: 95,
            rating: 'R',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Oppenheimer_Logo.png',
            cast: [
                { name: 'Cillian Murphy', img: 'https://image.tmdb.org/t/p/w185/cm7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Emily Blunt', img: 'https://image.tmdb.org/t/p/w185/eb7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Matt Damon', img: 'https://image.tmdb.org/t/p/w185/md7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Robert Downey Jr.', img: 'https://image.tmdb.org/t/p/w185/rd7X6vYmpxYf6Fto9An3mY8k7i.jpg' }
            ],
            genres: ['Drama', 'History', 'Thriller'],
            trailerId: 'uYPbbksJxIg'
        },
        {
            id: 4,
            title: 'Deadpool & Wolverine',
            description: 'Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.',
            year: 2024,
            match: 93,
            rating: 'R',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Deadpool_Logo.png',
            cast: [
                { name: 'Ryan Reynolds', img: 'https://image.tmdb.org/t/p/w185/rr7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Hugh Jackman', img: 'https://image.tmdb.org/t/p/w185/hj7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Emma Corrin', img: 'https://image.tmdb.org/t/p/w185/ec7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Matthew Macfadyen', img: 'https://image.tmdb.org/t/p/w185/mm7X6vYmpxYf6Fto9An3mY8k7i.jpg' }
            ],
            genres: ['Action', 'Comedy', 'Superhero'],
            trailerId: '73_1biulkYk'
        },
        {
            id: 5,
            title: 'The Batman',
            description: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
            year: 2022,
            match: 91,
            rating: 'PG-13',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/5P8IudnxarSraErols01mO9zfbM.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Batman_Logo.png',
            cast: [
                { name: 'Robert Pattinson', img: 'https://image.tmdb.org/t/p/w185/rp7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Zoë Kravitz', img: 'https://image.tmdb.org/t/p/w185/zk7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Paul Dano', img: 'https://image.tmdb.org/t/p/w185/pd7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Jeffrey Wright', img: 'https://image.tmdb.org/t/p/w185/jw7X6vYmpxYf6Fto9An3mY8k7i.jpg' }
            ],
            genres: ['Action', 'Crime', 'Drama'],
            trailerId: 'mqqft2x_Aa4'
        },
        {
            id: 6,
            title: 'Avatar: The Way of Water',
            description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started...',
            year: 2022,
            match: 94,
            rating: 'PG-13',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/8rpD7mQXpLYAFYpS6gRdtP3ki4E.jpg',
            logo: 'https://fontmeme.com/permalink/240121/78a9c8b7f8c0e2a2c8b7f8c0e2a2c8b7.png',
            cast: [
                { name: 'Sam Worthington', img: 'https://image.tmdb.org/t/p/w185/sw7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Zoe Saldaña', img: 'https://image.tmdb.org/t/p/w185/zs7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Sigourney Weaver', img: 'https://image.tmdb.org/t/p/w185/sv7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Stephen Lang', img: 'https://image.tmdb.org/t/p/w185/sl7X6vYmpxYf6Fto9An3mY8k7i.jpg' }
            ],
            genres: ['Sci-Fi', 'Action', 'Adventure'],
            trailerId: 'd9MyW72ELq0'
        },
        {
            id: 7,
            title: 'Barbie',
            description: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
            year: 2023,
            match: 89,
            rating: 'PG-13',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Barbie_Logo.png',
            cast: [
                { name: 'Margot Robbie', img: 'https://image.tmdb.org/t/p/w185/mr7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Ryan Gosling', img: 'https://image.tmdb.org/t/p/w185/rg7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'America Ferrera', img: 'https://image.tmdb.org/t/p/w185/af7X6vYmpxYf6Fto9An3mY8k7i.jpg' },
                { name: 'Will Ferrell', img: 'https://image.tmdb.org/t/p/w185/wf7X6vYmpxYf6Fto9An3mY8k7i.jpg' }
            ],
            genres: ['Comedy', 'Fantasy', 'Adventure'],
            trailerId: 'pBk4NYhWNMM'
        },
        {
            id: 8,
            title: 'Spider-Man: Across the Spider-Verse',
            description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
            year: 2023,
            match: 97,
            rating: 'PG',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/iiXliCeykkS86yjnYpk7E8Lp9Yv.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Spiderman_Logo.png',
            cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac', 'Jake Johnson'],
            genres: ['Animation', 'Action', 'Adventure'],
            trailerId: 'shW9i6k8cB0'
        },
        {
            id: 9,
            title: 'John Wick: Chapter 4',
            description: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.',
            year: 2023,
            match: 95,
            rating: 'R',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/h8gH9uJaY9ZpZ9uY9ZpZ9uY9ZpZ.jpg',
            logo: 'https://fontmeme.com/permalink/240121/JohnWick_Logo.png',
            cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård', 'Laurence Fishburne'],
            genres: ['Action', 'Crime', 'Thriller'],
            trailerId: 'qEVUrkHuok8'
        },
        {
            id: 10,
            title: 'The Dark Knight',
            description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
            year: 2008,
            match: 98,
            rating: 'PG-13',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/nMKdUU7pDYisAd46N0YI054f9vL.jpg',
            logo: 'https://fontmeme.com/permalink/240121/DarkKnight_Logo.png',
            cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Maggie Gyllenhaal'],
            genres: ['Action', 'Crime', 'Drama'],
            trailerId: 'EXeTwQWaywY'
        },
        {
            id: 11,
            title: 'Inception',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            year: 2010,
            match: 96,
            rating: 'PG-13',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Inception_Logo.png',
            cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy'],
            genres: ['Action', 'Sci-Fi', 'Thriller'],
            trailerId: 'YoHD9XEInc0'
        },
        {
            id: 12,
            title: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            year: 2014,
            match: 97,
            rating: 'PG-13',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Interstellar_Logo.png',
            cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
            genres: ['Sci-Fi', 'Drama', 'Adventure'],
            trailerId: 'zSWdZVtXT7E'
        },
        {
            id: 13,
            title: 'The Queen\'s Gambit',
            description: 'In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.',
            year: 2020,
            match: 88,
            rating: 'TV-MA',
            seasons: 1,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg',
            logo: 'https://fontmeme.com/permalink/240117/b38ed48dc6ba6d8c224b185e8c4846e8.png',
            cast: ['Anya Taylor-Joy', 'Bill Camp', 'Marielle Heller', 'Thomas Brodie-Sangster'],
            genres: ['Drama'],
            trailerId: 'CDrieqwSdgI'
        },
        {
            id: 14,
            title: 'Top Gun: Maverick',
            description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN\'s elite graduates on a mission that demands the ultimate sacrifice.',
            year: 2022,
            match: 94,
            rating: 'PG-13',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
            logo: 'https://fontmeme.com/permalink/240121/TopGun_Logo.png',
            cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm'],
            genres: ['Action', 'Drama'],
            trailerId: 'giXcoGaXegM'
        },
        {
            id: 15,
            title: 'Everything Everywhere All At Once',
            description: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.',
            year: 2022,
            match: 93,
            rating: 'R',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
            logo: 'https://fontmeme.com/permalink/240121/EEAAO_Logo.png',
            cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan', 'Jamie Lee Curtis'],
            genres: ['Action', 'Adventure', 'Comedy'],
            trailerId: 'wxN1T1uxQ2g'
        },
        {
            id: 16,
            title: 'Guardians of the Galaxy Vol. 3',
            description: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
            year: 2023,
            match: 90,
            rating: 'PG-13',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
            logo: 'https://fontmeme.com/permalink/240121/GOTG_Logo.png',
            cast: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Karen Gillan'],
            genres: ['Action', 'Adventure', 'Comedy'],
            trailerId: 'u3V5KDHRQvk'
        },
        {
            id: 17,
            title: 'The Last of Us',
            description: 'Twenty years after a fungal outbreak ravages the planet, survivors Joel and Ellie embark on a brutal journey through a post-apocalyptic America.',
            year: 2023,
            match: 96,
            rating: 'TV-MA',
            seasons: 1,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            logo: 'https://fontmeme.com/permalink/240121/TLOU_Logo.png',
            cast: ['Pedro Pascal', 'Bella Ramsey', 'Anna Torv', 'Gabriel Luna'],
            genres: ['Drama', 'Action', 'Sci-Fi'],
            trailerId: 'uLtkt8BonwM'
        },
        {
            id: 18,
            title: 'Mission: Impossible - Dead Reckoning',
            description: 'Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands.',
            year: 2023,
            match: 92,
            rating: 'PG-13',
            seasons: null,
            quality: 'IMAX',
            backdrop: 'https://image.tmdb.org/t/p/w1280/628Dep6AxEtDxjZoGP78TsOxYbK.jpg',
            logo: 'https://fontmeme.com/permalink/240121/MI_Logo.png',
            cast: ['Tom Cruise', 'Hayley Atwell', 'Ving Rhames', 'Simon Pegg'],
            genres: ['Action', 'Thriller', 'Adventure'],
            trailerId: 'avz06PDqDbM'
        },
        {
            id: 19,
            title: 'The Mandalorian',
            description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
            year: 2023,
            match: 94,
            rating: 'TV-14',
            seasons: 3,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/9ijMGlJKqcslswWUzTEwScm82Gs.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Mando_Logo.png',
            cast: ['Pedro Pascal', 'Katee Sackhoff', 'Carl Weathers', 'Giancarlo Esposito'],
            genres: ['Action', 'Adventure', 'Sci-Fi'],
            trailerId: 'aOC8E8z_ifw'
        },
        {
            id: 20,
            title: 'Wonka',
            description: 'The story will focus specifically on a young Willy Wonka and how he met the Oompa-Loompas on one of his earliest adventures.',
            year: 2023,
            match: 87,
            rating: 'PG',
            seasons: null,
            quality: '4K',
            backdrop: 'https://image.tmdb.org/t/p/w1280/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
            logo: 'https://fontmeme.com/permalink/240121/Wonka_Logo.png',
            cast: ['Timothée Chalamet', 'Olivia Colman', 'Hugh Grant', 'Keegan-Michael Key'],
            genres: ['Family', 'Fantasy', 'Comedy'],
            trailerId: 'wYSrHRnELNk'
        }
    ]
};

// State Management
const AppState = {
    currentHeroIndex: 0,
    moviesData: {},
    modalOpen: false,
    notificationOpen: false,
    searchOpen: false,
    isLoading: true,
    isLoggedIn: false,
    registeredUsers: [],
    userProfile: {
        name: 'Guest User',
        avatar: 'https://i.pravatar.cc/150?img=68',
        plan: 'Premium'
    },
    notifications: [],
    currentPlayingMovie: null,
    currentModalMovie: null,
    myList: []
};

// DOM Elements
const DOM = {
    // Core elements
    loadingScreen: document.getElementById('loadingScreen'),
    navbar: document.getElementById('navbar'),
    mainContent: document.getElementById('mainContent'),

    // Nav elements
    searchBtn: document.getElementById('searchBtn'),
    searchInput: document.getElementById('searchInput'),
    notificationBtn: document.getElementById('notificationBtn'),
    notificationCenter: document.getElementById('notificationCenter'),
    notificationClose: document.getElementById('notificationClose'),

    // Hero elements
    hero: document.getElementById('hero'),
    heroLogo: document.getElementById('heroLogo'),
    heroTitle: document.getElementById('heroTitle'),
    heroDescription: document.getElementById('heroDescription'),
    heroIndicators: document.getElementById('heroIndicators'),
    heroPrev: document.getElementById('heroPrev'),
    heroNext: document.getElementById('heroNext'),
    playBtn: document.getElementById('playBtn'),
    infoBtn: document.getElementById('infoBtn'),
    listBtn: document.getElementById('listBtn'),

    // Movie rows
    movieRows: document.getElementById('movieRows'),

    // Modal elements
    modalOverlay: document.getElementById('modalOverlay'),
    modal: document.getElementById('modal'),
    modalClose: document.getElementById('modalClose'),
    modalHeader: document.getElementById('modalHeader'),
    modalTitle: document.getElementById('modalTitle'),
    modalDescription: document.getElementById('modalDescription'),
    modalMatch: document.getElementById('modalMatch'),
    modalYear: document.getElementById('modalYear'),
    modalRuntime: document.getElementById('modalRuntime'),
    modalRating: document.getElementById('modalRating'),
    modalQuality: document.getElementById('modalQuality'),
    modalPoster: document.getElementById('modalPoster'),
    modalLogo: document.getElementById('modalLogo'),
    modalGenres: document.getElementById('modalGenres'),
    modalCast: document.querySelector('.cast-grid'),
    modalSimilar: document.querySelector('.similar-grid'),

    // Modal video elements
    modalVideo: document.getElementById('modalVideoContainer'),
    modalPlayBtn: document.getElementById('modalPlayBtn'),
    modalMuteBtn: document.getElementById('modalMuteBtn')
};

// Initialize Application
class CineBoxApp {
    constructor() {
        this.init();
    }

    async init() {
        // Load persisted state first
        this.loadPersistedState();

        // Auto-login as guest if not logged in
        if (!AppState.isLoggedIn) {
            AppState.isLoggedIn = true;
            AppState.userProfile = {
                name: 'Guest User',
                email: 'guest@cinebox.com',
                avatar: 'https://i.pravatar.cc/40?img=68'
            };
            this.saveSession();
        }

        // Show loading screen
        this.showLoading();

        // Setup event listeners
        this.setupEventListeners();

        // Initialize hero section
        this.initHeroSection();

        // Load movie data
        await this.loadMovies();

        // Create movie rows
        this.createMovieRows();

        // Update UI
        this.updateUI();

        // Hide loading screen
        setTimeout(() => {
            this.hideLoading();
        }, 200);

        // Initialize scroll animations
        this.initScrollAnimations();
    }

    showLoading() {
        DOM.loadingScreen.classList.remove('hidden');
        AppState.isLoading = true;
    }

    hideLoading() {
        DOM.loadingScreen.classList.add('hidden');
        AppState.isLoading = false;
    }

    setupEventListeners() {
        // Window events
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));

        // Keyboard shortcuts
        document.addEventListener('keydown', this.handleKeydown.bind(this));

        // Search functionality
        DOM.searchBtn.addEventListener('click', this.toggleSearch.bind(this));
        DOM.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch(DOM.searchInput.value.trim());
            }
        });

        // Live Search
        DOM.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                this.performSearch(query);
            } else {
                this.closeSearchResults();
            }
        });

        // Notification center
        DOM.notificationBtn.addEventListener('click', this.toggleNotificationCenter.bind(this));
        DOM.notificationClose.addEventListener('click', this.closeNotificationCenter.bind(this));

        // Close dropdowns when clicking outside
        document.addEventListener('click', this.handleOutsideClick.bind(this));

        // Hero buttons
        DOM.playBtn.addEventListener('click', this.playCurrentHero.bind(this));
        DOM.infoBtn.addEventListener('click', this.openCurrentHeroModal.bind(this));
        if (DOM.listBtn) {
            DOM.listBtn.addEventListener('click', this.toggleMyList.bind(this));
        }
        DOM.heroPrev.addEventListener('click', () => this.prevHero());
        DOM.heroNext.addEventListener('click', () => this.nextHero());

        // Modal
        DOM.modalClose.addEventListener('click', this.closeModal.bind(this));
        DOM.modalOverlay.addEventListener('click', (e) => {
            if (e.target === DOM.modalOverlay) this.closeModal();
        });

        // Modal Mute Toggle
        if (DOM.modalMuteBtn) {
            DOM.modalMuteBtn.addEventListener('click', this.toggleModalMute.bind(this));
        }

        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });

        // Dropdown links
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const action = item.textContent.trim();
                console.log(`👤 Profile action triggered: ${action}`);
                if (action === 'Sign Out') {
                    this.signOut();
                }
            });
        });
    }

    switchAuthTab(tab) {
        if (tab === 'login') {
            DOM.tabLogin.classList.add('active');
            DOM.tabRegister.classList.remove('active');
            DOM.loginForm.classList.add('active');
            DOM.registerForm.classList.remove('active');
        } else {
            DOM.tabLogin.classList.remove('active');
            DOM.tabRegister.classList.add('active');
            DOM.loginForm.classList.remove('active');
            DOM.registerForm.classList.add('active');
        }
    }

    async handleAuth(e, type) {
        e.preventDefault();
        const btn = e.target.querySelector('.btn-auth');
        const email = type === 'login'
            ? document.getElementById('loginEmail').value
            : document.getElementById('regEmail').value;

        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = type === 'login' ? 'Signing in...' : 'Creating account...';

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (type === 'login') {
            if (!AppState.registeredUsers.includes(email)) {
                this.showToast('Account not found! Please register first.', 'error');
                btn.disabled = false;
                btn.textContent = originalText;
                return;
            }
        } else if (type === 'register') {
            if (AppState.registeredUsers.includes(email)) {
                this.showToast('Account already exists! Please login.', 'warning');
                btn.disabled = false;
                btn.textContent = originalText;
                this.switchAuthTab('login');
                return;
            }
            const name = document.getElementById('regName').value;
            AppState.userProfile.name = name;
            AppState.registeredUsers.push(email);
            this.saveRegisteredUsers();
            this.updateProfileInfo();
            this.showToast('Account created successfully!', 'success');
        }

        this.enterApp();
    }

    loadPersistedState() {
        // Load registered users
        const registered = localStorage.getItem('cinebox_registered_users');
        if (registered) {
            AppState.registeredUsers = JSON.parse(registered);
        }

        // Check for active session
        const session = localStorage.getItem('cinebox_session');
        if (session) {
            const sessionData = JSON.parse(session);
            AppState.isLoggedIn = true;
            AppState.userProfile = sessionData.userProfile;
            AppState.myList = sessionData.myList || [];
        }
    }

    saveSession() {
        localStorage.setItem('cinebox_session', JSON.stringify({
            userProfile: AppState.userProfile,
            myList: AppState.myList
        }));
    }

    clearSession() {
        localStorage.removeItem('cinebox_session');
    }

    saveRegisteredUsers() {
        localStorage.setItem('cinebox_registered_users', JSON.stringify(AppState.registeredUsers));
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icon = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        }[type];

        toast.innerHTML = `
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        `;

        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        toastContainer.appendChild(toast);

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    enterApp() {
        AppState.isLoggedIn = true;
        this.saveSession();
        DOM.authOverlay.classList.add('hidden');
        this.showLoading();

        setTimeout(() => {
            this.hideLoading();
            console.log('✅ Welcome to CineBox!');
        }, 1000);
    }

    signOut() {
        this.showLoading();
        setTimeout(() => {
            AppState.isLoggedIn = false;
            this.clearSession();
            location.reload(); // Full refresh on sign out
        }, 800);
    }

    async handleForgotPassword(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;

        if (!email) {
            this.showToast('Please enter your email address first.', 'info');
            return;
        }

        if (!AppState.registeredUsers.includes(email)) {
            this.showToast('Account not found! Please register first.', 'error');
            return;
        }

        this.showToast('Recovery email sent! Please check your inbox.', 'success');
        console.log(`🔑 Password recovery initiated for: ${email}`);
    }

    async handleSocialAuth(provider) {
        this.showToast(`Connecting to ${provider}...`, 'info');

        // Simulating the "Next Step" cinematic flow
        const authWindow = document.createElement('div');
        authWindow.className = 'social-auth-popup';
        authWindow.innerHTML = `
            <div class="popup-content">
                <i class="fab fa-${provider.toLowerCase()}"></i>
                <h3>Signing in with ${provider}</h3>
                <div class="spinner"></div>
                <p>Establishing secure connection...</p>
            </div>
        `;
        document.body.appendChild(authWindow);

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mocking user data from social provider
        const mockSocialEmail = `user.${provider.toLowerCase()}@gmail.com`;
        const mockSocialName = `CineBox ${provider} User`;

        // Register if not exists
        if (!AppState.registeredUsers.includes(mockSocialEmail)) {
            AppState.registeredUsers.push(mockSocialEmail);
            this.saveRegisteredUsers();
        }

        AppState.userProfile.name = mockSocialName;
        this.updateProfileInfo();

        authWindow.classList.add('closing');
        setTimeout(() => {
            authWindow.remove();
            this.enterApp();
            this.showToast(`Successfully logged in with ${provider}!`, 'success');
        }, 500);
    }

    handleScroll() {
        // Navbar scroll effect
        if (window.scrollY > 100) {
            DOM.navbar.classList.add('scrolled');
        } else {
            DOM.navbar.classList.remove('scrolled');
        }

        // Scroll animations
        this.handleScrollAnimations();
    }

    handleResize() {
        // Adjust UI elements on resize
        this.adjustLayout();
    }

    handleKeydown(e) {
        // Close modal with Escape
        if (e.key === 'Escape' && AppState.modalOpen) {
            this.closeModal();
        }

        // Open search with /
        if (e.key === '/' && !AppState.searchOpen) {
            e.preventDefault();
            this.toggleSearch();
            DOM.searchInput.focus();
        }

        // Navigate hero with arrow keys
        if (e.key === 'ArrowLeft') {
            this.prevHero();
        }
        if (e.key === 'ArrowRight') {
            this.nextHero();
        }
    }

    handleOutsideClick(e) {
        // Close profile dropdown
        if (!DOM.profileBtn.contains(e.target) && !DOM.profileDropdown.contains(e.target)) {
            DOM.profileDropdown.classList.remove('active');
        }

        // Close notification center
        if (!DOM.notificationBtn.contains(e.target) && !DOM.notificationCenter.contains(e.target)) {
            this.closeNotificationCenter();
        }
    }

    toggleSearch() {
        DOM.searchInput.classList.toggle('active');
        AppState.searchOpen = !AppState.searchOpen;

        if (AppState.searchOpen) {
            DOM.searchInput.focus();
        }
    }

    handleSearch(e) {
        const query = DOM.searchInput.value.trim();
        if (query) {
            this.performSearch(query);
            DOM.searchInput.value = '';
            this.toggleSearch();
        }
    }

    performSearch(query) {
        if (!query) {
            this.closeSearchResults();
            return;
        }

        const lowerQuery = query.toLowerCase();
        let allMovies = [...CONFIG.HERO_MOVIES];

        // Collect movies from all categories
        if (AppState.moviesData) {
            Object.values(AppState.moviesData).forEach(categoryMovies => {
                if (Array.isArray(categoryMovies)) {
                    allMovies = [...allMovies, ...categoryMovies];
                }
            });
        }

        // Filter unique movies by ID
        const uniqueMovies = Array.from(new Map(allMovies.map(movie => [movie.id || movie.title, movie])).values());

        // Filter by title, description, or genre
        const results = uniqueMovies.filter(movie => {
            const matchesTitle = movie.title && movie.title.toLowerCase().includes(lowerQuery);
            const matchesDesc = movie.description && movie.description.toLowerCase().includes(lowerQuery);
            const matchesGenre = movie.genres && movie.genres.some(g => g.toLowerCase().includes(lowerQuery));
            return matchesTitle || matchesDesc || matchesGenre;
        });

        // Display results
        this.displaySearchResults(results);
    }

    closeSearchResults() {
        const modal = document.querySelector('.search-results');
        if (modal) modal.remove();
    }

    displaySearchResults(results) {
        let modal = document.querySelector('.search-results');

        const resultsHtml = results.length > 0 ? results.map((item, index) => `
            <div class="search-result-item" data-index="${index}">
                ${item.poster ? `<img src="${item.poster}" alt="${item.title}" class="result-poster">` : ''}
                <div class="result-info">
                    <h4>${item.title}</h4>
                    <div class="result-meta">
                        <span>${item.year}</span>
                        ${item.match ? `<span class="match-score">${item.match}% Match</span>` : ''}
                    </div>
                </div>
                <button class="result-action"><i class="fas fa-play"></i></button>
            </div>
        `).join('') : `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No movies found</h3>
                <p>Try searching for something else or browse our categories.</p>
            </div>
        `;

        if (modal) {
            // Update existing
            modal.querySelector('h3').textContent = `Search Results (${results.length})`;
            modal.querySelector('.search-results-list').innerHTML = resultsHtml;
            this.attachSearchResultListeners(modal, results);
        } else {
            // Create new
            modal = document.createElement('div');
            modal.className = 'search-results';
            modal.innerHTML = `
                <div class="search-results-header">
                    <h3>Search Results (${results.length})</h3>
                    <button class="close-results">&times;</button>
                </div>
                <div class="search-results-list">
                    ${resultsHtml}
                </div>
            `;
            document.body.appendChild(modal);
            this.attachSearchResultListeners(modal, results);

            // Inject CSS only if not present
            if (!document.getElementById('search-results-style')) {
                const style = document.createElement('style');
                style.id = 'search-results-style';
                style.textContent = `
                    .search-results {
                        position: fixed;
                        top: 60px; /* Position below navbar */
                        left: 50%;
                        transform: translateX(-50%);
                        width: 600px;
                        max-width: 90%;
                        max-height: 70vh;
                        background-color: rgba(20, 20, 20, 0.95);
                        border: 1px solid #333;
                        border-radius: 8px;
                        box-shadow: 0 10px 50px rgba(0,0,0,0.8);
                        z-index: 2000;
                        display: flex;
                        flex-direction: column;
                        backdrop-filter: blur(10px);
                    }
                    .search-results-header {
                        padding: 15px 20px;
                        border-bottom: 1px solid #333;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .search-results-header h3 { margin: 0; color: #fff; font-size: 1rem; }
                    .close-results { background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; }
                    .search-results-list { padding: 10px; overflow-y: auto; }
                    .search-result-item {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        padding: 10px;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: background 0.2s;
                    }
                    .search-result-item:hover { background: rgba(255,255,255,0.1); }
                    .result-poster { width: 45px; height: 68px; object-fit: cover; border-radius: 4px; }
                    .result-info { flex: 1; }
                    .result-info h4 { margin: 0 0 5px 0; color: #fff; font-size: 0.95rem; }
                    .result-meta { font-size: 0.75rem; color: #999; display: flex; gap: 10px; }
                    .match-score { color: #46d369; }
                    .result-action {
                        width: 32px; height: 32px; border-radius: 50%; border: 1px solid #fff;
                        background: transparent; color: #fff; display: flex; align-items: center; justify-content: center;
                    }
                    .search-result-item:hover .result-action { background: #e50914; border-color: #e50914; }
                `;
                document.head.appendChild(style);
            }
        }
    }

    attachSearchResultListeners(modal, results) {
        // Close button
        const closeBtn = modal.querySelector('.close-results');
        if (closeBtn) {
            closeBtn.onclick = () => this.closeSearchResults();
        }

        // Item clicks
        modal.querySelectorAll('.search-result-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openMovieModal(results[index]);
                this.closeSearchResults();
            });
        });
    }

    toggleNotificationCenter() {
        DOM.notificationCenter.classList.toggle('active');
        AppState.notificationOpen = !AppState.notificationOpen;

        if (AppState.notificationOpen) {
            // Mark notifications as read
            this.markNotificationsAsRead();
        }
    }

    closeNotificationCenter() {
        DOM.notificationCenter.classList.remove('active');
        AppState.notificationOpen = false;
    }

    markNotificationsAsRead() {
        AppState.notifications.forEach(notification => {
            notification.read = true;
        });

        // Update notification badge
        this.updateNotificationBadge();
    }

    updateNotificationBadge() {
        const unreadCount = AppState.notifications.filter(n => !n.read).length;
        const badge = DOM.notificationBtn.querySelector('.notification-badge');

        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }

    toggleProfileDropdown() {
        DOM.profileDropdown.classList.toggle('active');
    }

    handleNavClick(e) {
        e.preventDefault();
        const section = e.target.dataset.section;

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Filter the content
        this.filterContent(section);
    }

    filterContent(section) {
        const rows = document.querySelectorAll('.movie-row');

        // Brief loading effect
        this.showLoading();

        setTimeout(() => {
            let visibleRows = 0;
            rows.forEach(row => {
                const categoryId = row.id.replace('row-', '');
                const category = CONFIG.CATEGORIES.find(c => c.id === categoryId);

                let shouldShow = false;

                if (section === 'home') {
                    shouldShow = true;
                } else if (section === 'tv') {
                    shouldShow = (category && category.type === 'tv');
                } else if (section === 'movies') {
                    shouldShow = (category && (category.type === 'movie' || category.id === 'toprated'));
                } else if (section === 'new') { // Fixed: Matches HTML data-section
                    shouldShow = (categoryId === 'trending' || categoryId === 'originals');
                } else if (section === 'mylist') {
                    // Filter based on user's list
                    if (row.id === 'row-mylist-display') {
                        shouldShow = true;
                    } else {
                        shouldShow = false;
                    }
                } else if (section === 'posters') {
                    shouldShow = false; // Hide all standard rows
                }

                if (shouldShow) {
                    row.classList.remove('hidden');
                    row.style.display = 'block';
                    visibleRows++;
                } else {
                    row.classList.add('hidden');
                    row.style.display = 'none';
                }
            });

            // Toggle Hero Section
            if (section === 'home') {
                DOM.hero.classList.remove('hidden');
                DOM.hero.style.display = 'block';

                const existingListRow = document.getElementById('row-mylist-display');
                if (existingListRow) existingListRow.remove();

                if (AppState.myList.length > 0) {
                    this.createMovieRow('My List', AppState.myList, false, 'mylist-display');
                    const newRow = document.getElementById('row-mylist-display');
                    if (newRow) DOM.movieRows.prepend(newRow);
                }

            } else {
                DOM.hero.classList.add('hidden');
                DOM.hero.style.display = 'none';
            }

            // Handle Posters section
            const existingPosterRow = document.getElementById('row-posters-display');
            if (existingPosterRow) existingPosterRow.remove();

            if (section === 'posters') {
                let allMovies = [];
                Object.values(AppState.moviesData).forEach(catMovies => {
                    allMovies = [...allMovies, ...catMovies];
                });

                // Unique by title
                const uniqueMovies = Array.from(new Map(allMovies.map(m => [m.title, m])).values());

                this.createMovieRow('All Movie Posters', uniqueMovies, true, 'posters-display');
                visibleRows++;
            }

            // Handle My List content generation
            if (section === 'mylist') {
                const existingListRow = document.getElementById('row-mylist-display');
                if (existingListRow) existingListRow.remove();

                if (AppState.myList.length > 0) {
                    this.createMovieRow('My List', AppState.myList, false, 'mylist-display');
                    visibleRows++;
                } else {
                    const emptyMsg = document.createElement('div');
                    emptyMsg.id = 'row-mylist-display';
                    emptyMsg.className = 'movie-row';
                    emptyMsg.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-heart"></i>
                            <h3>Your list is empty</h3>
                            <p>Add movies to your list from the home screen to see them here!</p>
                        </div>
                    `;
                    DOM.movieRows.prepend(emptyMsg);
                    visibleRows++;
                }
            } else {
                const listRow = document.getElementById('row-mylist-display');
                if (listRow) listRow.remove();

                if (visibleRows === 0 && section !== 'home') {
                    const emptyMsg = document.createElement('div');
                    emptyMsg.id = 'row-empty-category';
                    emptyMsg.className = 'movie-row';
                    emptyMsg.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-film"></i>
                            <h3>No content found</h3>
                            <p>We couldn't find any content for this category. Try another section!</p>
                        </div>
                    `;
                    DOM.movieRows.appendChild(emptyMsg);
                } else {
                    const emptyCat = document.getElementById('row-empty-category');
                    if (emptyCat) emptyCat.remove();
                }
            }

            this.hideLoading();
        }, 300);
    }

    initHeroSection() {
        // Create hero slides
        const heroSlider = document.querySelector('.hero-slider');
        const indicators = DOM.heroIndicators;

        CONFIG.HERO_MOVIES.forEach((movie, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url('${movie.backdrop}')`;
            slide.dataset.index = index;
            heroSlider.appendChild(slide);

            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => this.setHeroMovie(index));
            indicators.appendChild(indicator);
        });

        // Auto rotate hero movies
        setInterval(() => {
            this.nextHero();
        }, 8000);

        // Initialize first hero movie
        this.setHeroMovie(0);
    }

    setHeroMovie(index) {
        AppState.currentHeroIndex = index;
        const movie = CONFIG.HERO_MOVIES[index];

        // Update hero content
        DOM.heroTitle.textContent = movie.title;
        DOM.heroDescription.textContent = movie.description;

        // Update hero video background
        const heroVideo = document.getElementById('heroVideo');
        // In a real app, you would set the video source

        // Update indicators
        document.querySelectorAll('.indicator').forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        // Update hero slides
        document.querySelectorAll('.hero-slide').forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        // Netflix Style: Auto-play muted trailer in hero background
        if (movie.trailerId) {
            const heroVideo = document.getElementById('heroVideo');
            if (heroVideo) heroVideo.remove();

            const existingTrailer = DOM.hero.querySelector('.hero-trailer-iframe');
            if (existingTrailer) existingTrailer.remove();

            const trailerIframe = document.createElement('iframe');
            trailerIframe.className = 'hero-trailer-iframe hero-video';
            trailerIframe.src = `https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${movie.trailerId}&enablejsapi=1`;
            trailerIframe.allow = "autoplay; encrypted-media";
            trailerIframe.style.pointerEvents = 'none'; // Keep controls interactive for the user
            DOM.hero.prepend(trailerIframe);
        }

        // Update hero logo
        const heroLogo = document.querySelector('.hero-title-logo');
        if (heroLogo) {
            heroLogo.src = movie.logo;
            heroLogo.alt = `${movie.title} Logo`;
        }

        // Update hero meta
        this.updateHeroMeta(movie);
    }

    updateHeroMeta(movie) {
        const metaContainer = document.querySelector('.hero-meta');
        if (metaContainer) {
            metaContainer.innerHTML = `
                <span class="match-score"><i class="fas fa-thumbs-up"></i> ${movie.match}% Match</span>
                <span class="year">${movie.year}</span>
                ${movie.seasons ? `<span class="seasons">${movie.seasons} Seasons</span>` : ''}
                <span class="quality"><i class="fas fa-hd"></i> ${movie.quality}</span>
                <span class="rating"><i class="fas fa-user-friends"></i> ${movie.rating}</span>
            `;
        }

        // Update cast
        const castContainer = document.querySelector('.hero-cast');
        if (castContainer) {
            castContainer.innerHTML = `
                ${movie.cast.map(actor => {
                const name = actor.name || actor;
                const img = actor.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
                return `
                        <div class="hero-cast-item">
                            <img src="${img}" alt="${name}" class="hero-cast-thumb">
                            <span class="hero-cast-name">${name}</span>
                        </div>
                    `;
            }).join('')}
            `;
        }
    }

    prevHero() {
        const newIndex = (AppState.currentHeroIndex - 1 + CONFIG.HERO_MOVIES.length) % CONFIG.HERO_MOVIES.length;
        this.setHeroMovie(newIndex);
    }

    nextHero() {
        const newIndex = (AppState.currentHeroIndex + 1) % CONFIG.HERO_MOVIES.length;
        this.setHeroMovie(newIndex);
    }

    playCurrentHero() {
        const movie = CONFIG.HERO_MOVIES[AppState.currentHeroIndex];
        this.playMovie(movie);
    }

    playMovie(movie) {
        console.log(`🎬 Navigating to full-screen player for: ${movie.title}`);

        // Store full movie data in session storage to pass to trailer page
        // This includes real cast, description, etc.
        sessionStorage.setItem('activeMovie', JSON.stringify(movie));

        if (!movie.trailerId) movie.trailerId = 'yQEondeGvKo';

        const trailerUrl = `trailer.html?v=${movie.trailerId}&title=${encodeURIComponent(movie.title)}`;
        window.location.href = trailerUrl;
    }

    toggleModalMute() {
        // Toggle icon state
        const icon = DOM.modalMuteBtn.querySelector('i');
        icon.classList.toggle('fa-volume-mute');
        icon.classList.toggle('fa-volume-up');

        const iframe = DOM.modalVideo.querySelector('iframe');
        if (iframe) {
            // Send message to YT player to mute/unmute if using API, 
            // for now, we'll just toggle the icon as a visual cue
            this.showToast(icon.classList.contains('fa-volume-up') ? 'Unmuted' : 'Muted', 'info');
        }
    }

    openCurrentHeroModal() {
        const movie = CONFIG.HERO_MOVIES[AppState.currentHeroIndex];
        this.openMovieModal(movie);
    }

    toggleMyList() {
        const movie = CONFIG.HERO_MOVIES[AppState.currentHeroIndex];
        this.toggleMovieInList(movie);
        this.updateHeroListBtn();
    }

    updateHeroListBtn() {
        if (!DOM.listBtn) return;

        const movie = CONFIG.HERO_MOVIES[AppState.currentHeroIndex];
        const isInList = AppState.myList.some(m => m.title === movie.title);

        if (isInList) {
            DOM.listBtn.innerHTML = '<i class="fas fa-check"></i> In My List';
        } else {
            DOM.listBtn.innerHTML = '<i class="fas fa-plus"></i> My List';
        }
    }

    toggleMovieInList(movie) {
        const index = AppState.myList.findIndex(m => m.title === movie.title);
        const wasAdded = index === -1;

        if (wasAdded) {
            AppState.myList.push(movie);
            this.showToast(`Added ${movie.title} to My List`, 'success');
        } else {
            AppState.myList.splice(index, 1);
            this.showToast(`Removed ${movie.title} from My List`, 'info');
        }

        this.saveSession();

        // Update Modal button if open
        if (AppState.modalOpen && AppState.currentModalMovie && AppState.currentModalMovie.title === movie.title) {
            const modalListBtn = DOM.modal.querySelector('.btn-list');
            if (modalListBtn) {
                modalListBtn.innerHTML = wasAdded
                    ? '<i class="fas fa-check"></i> Remove from List'
                    : '<i class="fas fa-plus"></i> Add to List';
            }
        }

        // Update Hero button if it's the current hero movie
        if (CONFIG.HERO_MOVIES[AppState.currentHeroIndex].title === movie.title) {
            this.updateHeroListBtn();
        }

        // Update all card buttons that match this movie title
        document.querySelectorAll(`.movie-card`).forEach(card => {
            const titleEl = card.querySelector('.card-info h4');
            if (titleEl && titleEl.textContent === movie.title) {
                const addBtn = card.querySelector('.add-btn');
                if (addBtn) {
                    const icon = addBtn.querySelector('i');
                    if (wasAdded) {
                        icon.className = 'fas fa-check';
                        addBtn.title = 'Remove from My List';
                        addBtn.classList.add('checked');
                    } else {
                        icon.className = 'fas fa-plus';
                        addBtn.title = 'Add to My List';
                        addBtn.classList.remove('checked');
                    }
                }

                // If we are on My List page and removed an item, hide it
                const activeNav = document.querySelector('.nav-link.active');
                if (activeNav && activeNav.dataset.section === 'mylist' && !wasAdded) {
                    card.style.transition = 'opacity 0.3s, transform 0.3s';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.remove();
                        // Check if list is empty
                        if (AppState.myList.length === 0) {
                            const listRowContainer = document.querySelector('#row-mylist-display .row-slider');
                            if (listRowContainer && listRowContainer.children.length === 0) {
                                location.reload(); // Simple reload to show empty state
                            }
                        }
                    }, 300);
                }
            }
        });
    }

    async loadMovies() {
        // In a real app, this would fetch from TMDB API
        // For now, we'll use mock data

        AppState.moviesData = {};

        CONFIG.CATEGORIES.forEach(category => {
            AppState.moviesData[category.id] = this.generateMockMovies(12, category.isLarge, category.id);
        });
    }

    generateMockMovies(count, isLarge, categoryId = '') {
        const movies = [];

        const kannadaTitles = [
            {
                title: "KGF: Chapter 2",
                trailer: "JKa05nyJ83U",
                logo: "https://fontmeme.com/permalink/240121/72a5a58c42a5a58c42a5.png",
                poster: "https://image.tmdb.org/t/p/w500/7WsyChvgySbsTpkzIB6J0S3hxfE.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/8R9jAnK85QitB5v3IByvA95J47U.jpg",
                cast: [
                    { name: "Yash", img: "https://ui-avatars.com/api/?name=Yash&background=random" },
                    { name: "Srinidhi Shetty", img: "https://ui-avatars.com/api/?name=Srinidhi+Shetty&background=random" },
                    { name: "Sanjay Dutt", img: "https://ui-avatars.com/api/?name=Sanjay+Dutt&background=random" }
                ]
            },
            {
                title: "Kantara",
                trailer: "DzYYmTbsN84",
                logo: "https://fontmeme.com/permalink/240121/Kantara_Logo.png",
                poster: "https://image.tmdb.org/t/p/w500/v7idvj8pSfv1S6snvU69pRI876z.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/5M9jAnK85QitB5v3IByvA95J47U.jpg",
                cast: [
                    { name: "Rishab Shetty", img: "https://image.tmdb.org/t/p/w185/eRaOUg2B02XH1l6P4juGzaPDr3u.jpg" },
                    { name: "Sapthami Gowda", img: "https://image.tmdb.org/t/p/w185/kmWJZ7Fz2RCvOcMTuaqIxOhzKGd.jpg" },
                    { name: "Kishore", img: "https://image.tmdb.org/t/p/w185/njLrsTMxiUfnqOvWegFT3e2Sj6T.jpg" }
                ]
            },
            {
                title: "777 Charlie",
                trailer: "J0S3u_vA6H0",
                logo: "https://fontmeme.com/permalink/240121/Charlie_Logo.png",
                poster: "https://image.tmdb.org/t/p/w500/y6LpInKqV5j3H7S8K6n9Xm9Gz3L.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/x6LpInKqV5j3H7S8K6n9Xm9Gz3L.jpg",
                cast: [
                    { name: "Rakshit Shetty", img: "https://ui-avatars.com/api/?name=Rakshit+Shetty&background=random" },
                    { name: "Sangeetha", img: "https://ui-avatars.com/api/?name=Sangeetha&background=random" },
                    { name: "Charlie", img: "https://ui-avatars.com/api/?name=Charlie&background=random" }
                ]
            },
            { title: "Vikrant Rona", trailer: "_N_680v3V8Y" },
            { title: "Raajakumara", trailer: "J93vC7U_OQU" },
            { title: "Kirik Party", trailer: "IfvN9pTAsU8" }
        ];

        const hindiTitles = [
            {
                title: "Pathaan",
                trailer: "vqu4zLiub9w",
                logo: "https://fontmeme.com/permalink/240121/Pathaan_Logo.png",
                poster: "https://image.tmdb.org/t/p/w500/m1b9jAnK85QitB5v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/n1b9jAnK85QitB5v3IByvA95J47U.jpg",
                cast: [
                    { name: "Shah Rukh Khan", img: "https://ui-avatars.com/api/?name=Shah+Rukh+Khan&background=random" },
                    { name: "Deepika Padukone", img: "https://ui-avatars.com/api/?name=Deepika+Padukone&background=random" },
                    { name: "John Abraham", img: "https://ui-avatars.com/api/?name=John+Abraham&background=random" }
                ]
            },
            {
                title: "Brahmastra",
                trailer: "BUjXzrgntDc",
                logo: "https://fontmeme.com/permalink/240121/Brahmastra_Logo.png",
                poster: "https://image.tmdb.org/t/p/w500/6v7bAnK85QitB5v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/7v7bAnK85QitB5v3IByvA95J47U.jpg",
                cast: [
                    { name: "Ranbir Kapoor", img: "https://ui-avatars.com/api/?name=Ranbir+Kapoor&background=random" },
                    { name: "Alia Bhatt", img: "https://ui-avatars.com/api/?name=Alia+Bhatt&background=random" },
                    { name: "Amitabh Bachchan", img: "https://ui-avatars.com/api/?name=Amitabh+Bachchan&background=random" }
                ]
            },
            {
                title: "Jawan",
                trailer: "MWOxlOAsidY",
                logo: "https://fontmeme.com/permalink/240121/Jawan_Logo.png",
                poster: "https://image.tmdb.org/t/p/w500/8v7bAnK85QitB5v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/9v7bAnK85QitB5v3IByvA95J47U.jpg",
                cast: [
                    { name: "Shah Rukh Khan", img: "https://ui-avatars.com/api/?name=Shah+Rukh+Khan&background=random" },
                    { name: "Nayanthara", img: "https://ui-avatars.com/api/?name=Nayanthara&background=random" },
                    { name: "Vijay Sethupathi", img: "https://ui-avatars.com/api/?name=Vijay+Sethupathi&background=random" }
                ]
            },
            { title: "RRR (Hindi)", trailer: "f_vbAtF_c80" },
            { title: "Dangal", trailer: "x_7YlGv9u1g" }
        ];

        const englishTitles = [
            {
                title: "Oppenheimer",
                trailer: "uYPbbksJxIg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Oppenheimer_Movie_Logo_2023.png/800px-Oppenheimer_Movie_Logo_2023.png",
                poster: "https://image.tmdb.org/t/p/w1280/8Gxv8S7eeG0s1Sbw9A3SsxpbSbi.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/fm6t0mcy0eGvXT92S9AzISpD6EO.jpg",
                cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."]
            },
            {
                title: "The Batman",
                trailer: "mqqzhMSkxHE",
                logo: "https://fontmeme.com/permalink/240121/Batman_Logo.png",
                poster: "https://image.tmdb.org/t/p/w1280/5P8IudnxarSraErols01mO9zfbM.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/t7X8mOXpXp9AzISpD6EO.jpg",
                cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright"]
            },
            {
                title: "Dune: Part Two",
                trailer: "Way9Dexny3w",
                poster: "https://image.tmdb.org/t/p/w500/8bBihL7KsS7m7hXi0vUAfQ9SgU1.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
                cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Austin Butler"]
            },
            {
                title: "Spider-Man: Across the Spider-Verse",
                trailer: "shW9i6k8cB0",
                poster: "https://image.tmdb.org/t/p/w500/8Gxv8S7eeG0s1Sbw9A3SsxpbSbi.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/iiXliCeykkS86yjnYpk7E8Lp9Yv.jpg",
                cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson"]
            },
            {
                title: "Deadpool & Wolverine",
                trailer: "73_1biulkYk",
                poster: "https://image.tmdb.org/t/p/w500/8YInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
                cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Matthew Macfadyen"]
            },
            {
                title: "Avatar: The Way of Water",
                trailer: "d9MyW72ELq0",
                poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/8rpD7mQXpLYAFYpS6gRdtP3ki4E.jpg",
                cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"]
            },
            {
                title: "John Wick: Chapter 4",
                trailer: "qEVUrkHuok8",
                poster: "https://image.tmdb.org/t/p/w500/vZloFAK7N3S7XUqQvSzn6sy3UoM.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/h8gH9uJaY9ZpZ9uY9ZpZ9uY9ZpZ.jpg",
                cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård", "Laurence Fishburne"]
            },
            {
                title: "Guardians of the Galaxy Vol. 3",
                trailer: "u3V5KDHRQvk",
                poster: "https://image.tmdb.org/t/p/w500/r2J0VvYnbu6Sj7Uo8YvY6YyY6Yy.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
                cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Karen Gillan"]
            },
            {
                title: "Everything Everywhere All At Once",
                trailer: "wxN1T1uxQ2g",
                poster: "https://image.tmdb.org/t/p/w500/7WsyChvgySbsTpkzIB6J0S3hxfE.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
                cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"]
            },
            {
                title: "Top Gun: Maverick",
                trailer: "giXcoGaXegM",
                poster: "https://image.tmdb.org/t/p/w500/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
                cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"]
            },
            {
                title: "The Lion King",
                trailer: "7TAVV8irKCg",
                poster: "https://image.tmdb.org/t/p/w500/dzP6Sly8SthP9An3mY8k7i.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/nGoXmpxYf6Fto9An3mY8k7i.jpg",
                cast: ["Donald Glover", "Beyoncé", "James Earl Jones", "Seth Rogen"]
            },
            {
                title: "Black Panther: Wakanda Forever",
                trailer: "_Z3QKkl1WyM",
                poster: "https://image.tmdb.org/t/p/w500/psv2UwvUuvS7XUqQvSzn6sy3UoM.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/xD8AnK85QitB5v3IByvA95J47U.jpg",
                cast: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira", "Winston Duke"]
            },
            {
                title: "Spider-Man: No Way Home",
                trailer: "JfVOs4VSpmA",
                poster: "https://image.tmdb.org/t/p/w500/1g0mYqbOW9v7uH9pS7iRMAtq36L.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/14S8mOXpXp9AzISpD6EO.jpg",
                cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"]
            },
            {
                title: "Inception",
                trailer: "YoHD9XEInc0",
                poster: "https://image.tmdb.org/t/p/w500/edv5CZvR4iaS9vYvSzn6sy3UoM.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
                cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
            },
            {
                title: "Stranger Things",
                trailer: "AfQ13jsLDms",
                logo: "https://fontmeme.com/permalink/240117/4c3be12e8b9d4ab532615f17692cf3d3.png",
                poster: "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
                cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"]
            }
        ];

        const titlesWithTrailers = [
            {
                title: "Interstellar", trailer: "zSWdZVtXT7E",
                poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6EwfVnz6P2oEtQOaMCB.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/xJHax9vYv3Z8ABqM8rvea8zKvcI.jpg"
            },
            {
                title: "The Dark Knight", trailer: "EXeTwQWaywY",
                poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDp9s1vSgz9Ir3SETvY.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/nMKdUU7pDYisAd46N0YI054f9vL.jpg"
            },
            {
                title: "Pulp Fiction", trailer: "s7EdQ4FqbhY",
                poster: "https://image.tmdb.org/t/p/w500/d5iIl9h9btztp9kdYv7vC9O86Yf.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/su69mB0WKiSST4uJ6SAqszS1Uc6.jpg"
            },
            {
                title: "Fight Club", trailer: "qtRKdVHc-cE",
                poster: "https://image.tmdb.org/t/p/w500/pB8BM7qnd6XarKW36z9uS0YpTLW.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/rr7X6vYmpxYf6Fto9An3mY8k7i.jpg"
            },
            {
                title: "The Matrix", trailer: "vKQi3bBA1y8",
                poster: "https://image.tmdb.org/t/p/w500/f89U3Y9SJuCYFJpS6GqyDbSmySA.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/l49vBTmUWy3wm9LT69o7uGv9v1Y.jpg"
            },
            {
                title: "Gladiator", trailer: "owK1qxDselE",
                poster: "https://image.tmdb.org/t/p/w500/ty8TGRvSjWq1YvO9z19z9SSETSET.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/rRa6v9vXm89vEAdIDW6fL2XvO.jpg"
            },
            {
                title: "Everything Everywhere All At Once", trailer: "wxN1T1uxQ2g",
                poster: "https://image.tmdb.org/t/p/w500/7WsyChvgySbsTpkzIB6J0S3hxfE.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
            },
            {
                title: "Barbie", trailer: "pBk4NYhWNMM",
                poster: "https://image.tmdb.org/t/p/w500/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/ctM8r2DUi7STz9P9u9PkS7iRMAt.jpg"
            },
            {
                title: "The Wolf of Wall Street", trailer: "iszwuX1AK6A",
                poster: "https://image.tmdb.org/t/p/w500/p9n9jAnK85QitB5v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/br7AnK85QitB5v3IByvA95J47U.jpg"
            },
            {
                title: "Django Unchained", trailer: "_iH0UBYDI4g",
                poster: "https://image.tmdb.org/t/p/w500/7o9AnK85QitB5v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/8o9AnK85QitB5v3IByvA95J47U.jpg"
            },
            {
                title: "The Godfather", trailer: "UaVTIH8mujA",
                poster: "https://image.tmdb.org/t/p/w500/3bhkrjOiERoSTq90U6yP7S1N6L8.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/rSPw7ibpbeOcduXYjSdwmUrb0YP.jpg"
            },
            {
                title: "Titanic", trailer: "fkyLImVZV9I",
                poster: "https://image.tmdb.org/t/p/w500/9xj7r4HclmNadvqN1arS96v9uDf.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/669mtpSfv1S6snvU69pRI876z.jpg"
            },
            {
                title: "Parasite", trailer: "5xH0HfJHsaY",
                poster: "https://image.tmdb.org/t/p/w500/7IiTTjS3vS7YnZqc9TN9DdlZbsi.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/TU9977vSjWq1YvO9z19z9SSETSET.jpg"
            },
            {
                title: "Joker", trailer: "zAGVQLHvwOY",
                poster: "https://image.tmdb.org/t/p/w500/udDcl30HjfmsT30vRRf9QFFgWCL.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/n6bU9vXm89vEAdIDW6fL2XvO.jpg"
            },
            {
                title: "Avengers: Endgame", trailer: "TcMBFSGVi1c",
                poster: "https://image.tmdb.org/t/p/w500/or06MvS6owbiHGVpNuVN9fjUoVT.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/7RyHs7yYvS7YnZqc9TN9DdlZbsi.jpg"
            },
            {
                title: "The Shawshank Redemption", trailer: "6hB3S9bIaco",
                poster: "https://image.tmdb.org/t/p/w500/9O7OhlZ90TzbFh8SbsFTG46pWci.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/k6v9vXm89vEAdIDW6fL2XvO.jpg"
            },
            { title: "Forrest Gump", trailer: "bLvqoHBptjg", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOvAtqZfcSrpz7wtVl.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/3AnK85QitB5v3IByvA95J47U.jpg" },
            { title: "The Silence of the Lambs", trailer: "W6Mm8Sbe__o", poster: "https://image.tmdb.org/t/p/w500/uS9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/vS9mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Jurassic Park", trailer: "lc0UehYemQA", poster: "https://image.tmdb.org/t/p/w500/9i3S86t06yxe9Yms6pSFTq80i0A.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/v6IByvA95J47U.jpg" },
            { title: "Schindler's List", trailer: "gG22XNhtnoY", poster: "https://image.tmdb.org/t/p/w500/sF1u40YwsOi4N29pPZuMTuv49rU.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/wF1u40YwsOi4N29pPZuMTuv49rU.jpg" },
            { title: "The Lord of the Rings: Return of the King", trailer: "r5X-hFf6Bwo", poster: "https://image.tmdb.org/t/p/w500/rCzpSndWorkingInTheFiles.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/l6mB0WKiSST4uJ6SAqszS1Uc6.jpg" },
            { title: "Star Wars: A New Hope", trailer: "VZ3Znzt0gUA", poster: "https://image.tmdb.org/t/p/w500/6FfTJuBEmXvmc5p3PkI1M0S6S8k.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/7FfTJuBEmXvmc5p3PkI1M0S6S8k.jpg" },
            { title: "Back to the Future", trailer: "qvsgGtivCgs", poster: "https://image.tmdb.org/t/p/w500/fN1v60emSMeXpS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/gN1v60emSMeXpS7iRMAtq36L.jpg" },
            { title: "Spirited Away", trailer: "ByXuk9QqQkk", poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUdgG93u9v74.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/49wmItIWsg5sZMyRUdgG93u9v74.jpg" },
            { title: "La La Land", trailer: "0pdqf4P9MB8", poster: "https://image.tmdb.org/t/p/w500/u7iSTz9P9u9PkS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/v7iSTz9P9u9PkS7iRMAtq36L.jpg" },
            { title: "Whiplash", trailer: "7d_jQycdQGo", poster: "https://image.tmdb.org/t/p/w500/7S9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/8S9mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Mad Max: Fury Road", trailer: "hEJnMQG9ev8", poster: "https://image.tmdb.org/t/p/w500/8YInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/9YInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Get Out", trailer: "DzfpyUB60YY", poster: "https://image.tmdb.org/t/p/w500/q9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/r9mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Blade Runner 2049", trailer: "gCcx85zbxz4", poster: "https://image.tmdb.org/t/p/w500/g0mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/h0mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Grand Budapest Hotel", trailer: "1Fg5iWmQjwk", poster: "https://image.tmdb.org/t/p/w500/nXInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/oXInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Her", trailer: "neMJwkN_Y0c", poster: "https://image.tmdb.org/t/p/w500/vXInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/wXInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg" },
            { title: "Arrival", trailer: "tFMo3UJ4B4g", poster: "https://image.tmdb.org/t/p/w500/xXInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg", backdrop: "https://image.tmdb.org/t/p/w1280/yXInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg" }
        ];

        const channelTitles = [
            {
                title: "Marvel Studios",
                trailer: "QwevPajSkaI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Marvel-Studios-Logo.png/640px-Marvel-Studios-Logo.png",
                poster: "https://image.tmdb.org/t/p/w500/uS9mYqbOW9v7uH9pS7iRMAtq36L.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/8YInS9mYqbOW9v7uH9pS7iRMAtq36L.jpg"
            },
            {
                title: "HBO Original",
                trailer: "9ZfM_U8p74Y",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1200px-HBO_logo.svg.png",
                poster: "https://image.tmdb.org/t/p/w500/78AnK85QitB5v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/9AnK85QitB5v3IByvA95J47U.jpg"
            },
            {
                title: "National Geographic",
                trailer: "mYp_H_NfMiw",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National_Geographic_logo.svg/1280px-National_Geographic_logo.svg.png",
                poster: "https://image.tmdb.org/t/p/w500/v3IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/v4IByvA95J47U.jpg"
            },
            {
                title: "Pixar Animation",
                trailer: "h0_8S6EunmY",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pixar_Logo.svg/1200px-Pixar_Logo.svg.png",
                poster: "https://image.tmdb.org/t/p/w500/v5IByvA95J47U.jpg",
                backdrop: "https://image.tmdb.org/t/p/w1280/v6IByvA95J47U.jpg"
            }
        ];

        let targetPool = titlesWithTrailers;
        if (categoryId === 'kannada') targetPool = kannadaTitles;
        else if (categoryId === 'hindi') targetPool = hindiTitles;
        else if (categoryId === 'english') targetPool = englishTitles;
        else if (categoryId === 'channels') targetPool = channelTitles;
        else targetPool = [...titlesWithTrailers, ...englishTitles];

        const genres = [
            ["Action", "Drama"], ["Action", "Adventure"], ["Thriller", "Crime"], ["Drama"], ["Sci-Fi", "Action"]
        ];

        const cast = [
            [
                { name: "Yash", img: "https://image.tmdb.org/t/p/w185/4R7OIkd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Srinidhi Shetty", img: "https://image.tmdb.org/t/p/w185/7uYQ8M9vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Sanjay Dutt", img: "https://image.tmdb.org/t/p/w185/y3vG8M9vXm89vEAdIDW6fL2XvO.jpg" }
            ],
            [
                { name: "Shah Rukh Khan", img: "https://image.tmdb.org/t/p/w185/8E8Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Deepika Padukone", img: "https://image.tmdb.org/t/p/w185/9F9Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "John Abraham", img: "https://image.tmdb.org/t/p/w185/1G1Ikd4vXm89vEAdIDW6fL2XvO.jpg" }
            ],
            [
                { name: "Robert Downey Jr.", img: "https://image.tmdb.org/t/p/w185/5B9Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Scarlett Johansson", img: "https://image.tmdb.org/t/p/w185/2C2Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Chris Evans", img: "https://image.tmdb.org/t/p/w185/3D3Ikd4vXm89vEAdIDW6fL2XvO.jpg" }
            ],
            [
                { name: "Cillian Murphy", img: "https://image.tmdb.org/t/p/w185/4E4Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Emily Blunt", img: "https://image.tmdb.org/t/p/w185/5F5Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Robert Downey Jr.", img: "https://image.tmdb.org/t/p/w185/5B9Ikd4vXm89vEAdIDW6fL2XvO.jpg" }
            ],
            [
                { name: "Timothée Chalamet", img: "https://image.tmdb.org/t/p/w185/6G6Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Zendaya", img: "https://image.tmdb.org/t/p/w185/7H7Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Rebecca Ferguson", img: "https://image.tmdb.org/t/p/w185/8I8Ikd4vXm89vEAdIDW6fL2XvO.jpg" }
            ],
            [
                { name: "Pedro Pascal", img: "https://image.tmdb.org/t/p/w185/9J9Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Bella Ramsey", img: "https://image.tmdb.org/t/p/w185/0K0Ikd4vXm89vEAdIDW6fL2XvO.jpg" },
                { name: "Nick Offerman", img: "https://image.tmdb.org/t/p/w185/1L1Ikd4vXm89vEAdIDW6fL2XvO.jpg" }
            ]
        ];

        // Shuffle the pool to ensure random selection
        const shuffledPool = targetPool.sort(() => 0.5 - Math.random());

        for (let i = 0; i < count; i++) {
            const movieObj = shuffledPool[i % shuffledPool.length];
            // Add a salt to the seed to ensure different images for the same movie content if repeated
            const seedSalt = Math.floor(Math.random() * 1000);
            const genreIndex = Math.floor(Math.random() * genres.length);
            const castIndex = Math.floor(Math.random() * cast.length);

            movies.push({
                id: Math.random().toString(36).substr(2, 9),
                title: movieObj.title,
                trailerId: movieObj.trailer,
                logo: movieObj.logo || null,
                description: "A sensational blockbuster that took the box office by storm with its powerful storytelling and visual grandeur.",
                year: 2018 + Math.floor(Math.random() * 6), // Random year for variety
                match: 85 + Math.floor(Math.random() * 14), // Random match > 85
                rating: ["PG-13", "R", "U/A", "TV-MA"][Math.floor(Math.random() * 4)],
                duration: `${1 + Math.floor(Math.random() * 2)}h ${Math.floor(Math.random() * 59)}m`,
                quality: ["4K", "IMAX", "HD"][Math.floor(Math.random() * 3)],
                poster: movieObj.poster || `https://picsum.photos/seed/${movieObj.title.replace(/\s/g, '')}${seedSalt}/300/450`,
                backdrop: movieObj.backdrop || `https://picsum.photos/seed/${movieObj.title.replace(/\s/g, '')}backdrop${seedSalt}/1920/1080`,
                genres: genres[genreIndex],
                cast: movieObj.cast || cast[castIndex],
                isLarge: isLarge
            });
        }

        return movies;
    }

    createMovieRows() {
        CONFIG.CATEGORIES.forEach(category => {
            const movies = AppState.moviesData[category.id] || [];
            this.createMovieRow(category.title, movies, category.isLarge, category.id);
        });
    }

    createMovieRow(title, movies, isLarge, rowId) {
        const row = document.createElement('div');
        row.className = 'movie-row scroll-animate';
        row.id = `row-${rowId}`;

        row.innerHTML = `
            <div class="row-header">
                <h2 class="row-title">
                    ${title}
                </h2>
                <div class="row-nav">
                    <button class="nav-btn prev-btn" data-row="${rowId}">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="nav-btn next-btn" data-row="${rowId}">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="row-container">
                <div class="row-slider" id="slider-${rowId}">
                    ${movies.map(movie => this.createMovieCardHTML(movie, isLarge)).join('')}
                </div>
            </div>
        `;

        DOM.movieRows.appendChild(row);

        // Add event listeners for navigation
        const prevBtn = row.querySelector('.prev-btn');
        const nextBtn = row.querySelector('.next-btn');
        const slider = row.querySelector('.row-slider');

        prevBtn.addEventListener('click', () => this.scrollRow(slider, -1, rowId));
        nextBtn.addEventListener('click', () => this.scrollRow(slider, 1, rowId));

        // Initialize slider position
        this.updateNavButtons(slider, rowId);

        // Add Event Listeners for Cards
        row.querySelectorAll('.movie-card').forEach((card, index) => {
            const movie = movies[index]; // Because map order is preserved

            // Play Button
            const playBtn = card.querySelector('.play-btn');
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.playMovie(movie);
            });

            // Add to List Button
            const addBtn = card.querySelector('.add-btn');

            // Set initial state
            if (AppState.myList.some(m => m.title === movie.title)) {
                addBtn.querySelector('i').className = 'fas fa-check';
                addBtn.title = 'Remove from My List';
                addBtn.classList.add('checked');
            } else {
                addBtn.title = 'Add to My List';
            }

            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMovieInList(movie);
            });

            // Expand/Info Button
            const expandBtn = card.querySelector('.expand-btn');
            expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openMovieModal(movie);
            });

            // Like Button (Mock)
            const likeBtn = card.querySelector('.like-btn');
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                likeBtn.querySelector('i').classList.toggle('text-green');
                this.showToast('Thanks for rating!', 'success');
            });

            // Card Click (Default to Info)
            card.addEventListener('click', () => {
                this.openMovieModal(movie);
            });
        });
    }

    createMovieCardHTML(movie, isLarge) {
        return `
            <div class="movie-card ${isLarge ? 'large' : ''}" data-movie-id="${movie.id}">
                <div class="card-image-wrapper">
                    <div class="card-badge">
                        <i class="fas ${movie.quality === '4K' ? 'fa-star' : 'fa-hd'}"></i>
                        ${movie.quality}
                    </div>
                    <img src="${isLarge ? movie.poster : movie.backdrop}" alt="${movie.title}" loading="lazy">
                    <div class="card-overlay">
                        <div class="card-actions">
                            <button class="action-btn play-btn" title="Play">
                                <i class="fas fa-play"></i>
                            </button>
                            <button class="action-btn add-btn" title="Add to My List">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="action-btn like-btn" title="Like">
                                <i class="fas fa-thumbs-up"></i>
                            </button>
                            <button class="action-btn expand-btn" title="More Info">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>
                        <div class="card-info">
                            <h4>${movie.title}</h4>
                            <div class="card-meta">
                                <span class="match"><i class="fas fa-thumbs-up"></i> ${movie.match}%</span>
                                <span class="age-rating">${movie.rating}</span>
                                <span class="duration">${movie.duration}</span>
                            </div>
                            <div class="card-genres">
                                ${movie.genres.slice(0, 3).map(g => `<span>${g}</span>`).join('<span class="separator">•</span>')}
                            </div>
                            <div class="card-overview">
                                <p>${movie.description}</p>
                            </div>
                            <div class="card-cast">
                                ${movie.cast.map(c => `
                                    <div class="cast-member" title="${c.name || c}">
                                        <img src="${c.img || 'https://ui-avatars.com/api/?name=' + (c.name || c)}" alt="${c.name || c}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movie-title-static">${movie.title}</div>
            </div>
        `;
    }

    scrollRow(slider, direction, rowId) {
        const card = slider.querySelector('.movie-card');
        if (!card) return;

        const style = window.getComputedStyle(slider);
        const gap = parseFloat(style.gap) || 12;
        const cardWidth = card.offsetWidth + gap;

        // Calculate how many items fit in the view
        const containerWidth = slider.parentElement.offsetWidth;
        const itemsPerScreen = Math.floor(containerWidth / cardWidth);
        const scrollCount = itemsPerScreen > 1 ? itemsPerScreen - 1 : 1; // Scroll one less than visible to show continuity

        const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(slider).transform);
        const currentX = currentTransform.m41;

        let newX = currentX - (cardWidth * scrollCount * direction);

        // Boundary checks
        const maxScroll = -(slider.scrollWidth - containerWidth);

        if (newX > 0) newX = 0;
        if (newX < maxScroll) newX = maxScroll;

        slider.style.transform = `translateX(${newX}px)`;

        // Update buttons state
        this.updateNavButtons(slider, rowId, newX);
    }

    updateNavButtons(slider, rowId, currentX = null) {
        const row = document.getElementById(`row-${rowId}`);
        if (!row) return; // Guard clause

        const prevBtn = row.querySelector('.prev-btn');
        const nextBtn = row.querySelector('.next-btn');

        if (!currentX) {
            const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(slider).transform);
            currentX = currentTransform.m41;
        }

        const containerWidth = slider.parentElement.offsetWidth;
        const maxScroll = -(slider.scrollWidth - containerWidth);

        // Allow some slack for floating point errors
        if (prevBtn) prevBtn.disabled = currentX >= -5;
        if (nextBtn) nextBtn.disabled = currentX <= maxScroll + 5;
    }

    openMovieModal(movie) {
        AppState.currentModalMovie = movie;
        // Update modal content
        DOM.modalTitle.textContent = movie.title;
        DOM.modalDescription.textContent = movie.description;
        DOM.modalMatch.textContent = `${movie.match}% Match`;
        DOM.modalYear.textContent = movie.year;
        DOM.modalRuntime.textContent = movie.duration;
        DOM.modalRating.textContent = movie.rating;
        DOM.modalQuality.textContent = movie.quality;
        DOM.modalPoster.src = movie.poster;
        DOM.modalPoster.alt = movie.title;
        DOM.modalHeader.style.backgroundImage = `url('${movie.backdrop}')`;

        // Handle Logo
        if (movie.logo) {
            DOM.modalLogo.src = movie.logo;
            DOM.modalLogo.style.display = 'block';
            DOM.modalTitle.style.display = 'none';
        } else {
            DOM.modalLogo.style.display = 'none';
            DOM.modalTitle.style.display = 'block';
        }

        // Update genres
        DOM.modalGenres.innerHTML = movie.genres
            ? movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')
            : '';

        // Update cast
        DOM.modalCast.innerHTML = '';
        if (movie.cast && movie.cast.length > 0) {
            movie.cast.forEach(actor => {
                const castMember = document.createElement('div');
                castMember.className = 'cast-member';
                const name = actor.name || actor; // Handle both string and object for backward compatibility
                const img = actor.img || `https://ui-avatars.com/api/?name=${name}&background=random`;

                castMember.innerHTML = `
                    <img src="${img}" alt="${name}" class="cast-img">
                    <div class="cast-name">${name}</div>
                `;
                DOM.modalCast.appendChild(castMember);
            });
        }

        // Update similar movies
        DOM.modalSimilar.innerHTML = '';
        // Generate some similar movies
        const similarMovies = this.generateMockMovies(5, false);
        similarMovies.forEach(similarMovie => {
            const similarCard = document.createElement('div');
            similarCard.className = 'similar-card';
            similarCard.innerHTML = `
                <img src="${similarMovie.poster}" alt="${similarMovie.title}">
                <h4>${similarMovie.title}</h4>
            `;
            similarCard.addEventListener('click', () => this.openMovieModal(similarMovie));
            DOM.modalSimilar.appendChild(similarCard);
        });

        // Add event listeners to modal buttons
        const modalPlayBtn = DOM.modal.querySelector('.btn-play');
        const modalListBtn = DOM.modal.querySelector('.btn-list');
        const modalShareBtn = DOM.modal.querySelector('.btn-share');

        modalPlayBtn.onclick = () => this.playMovie(movie);
        modalListBtn.onclick = () => this.toggleMovieInList(movie);
        if (modalShareBtn) {
            modalShareBtn.onclick = () => this.shareMovie(movie);
        }

        // Show modal
        DOM.modalOverlay.classList.add('active');
        AppState.modalOpen = true;
        document.body.style.overflow = 'hidden';

        // Auto-play trailer in modal header (Netflix Style)
        if (movie.trailerId || movie.id) {
            const tId = movie.trailerId || 'yQEondeGvKo';
            DOM.modalVideo.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${tId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${tId}" 
                    allow="autoplay; encrypted-media" 
                    frameborder="0">
                </iframe>
            `;
        }
    }

    shareMovie(movie) {
        if (navigator.share) {
            navigator.share({
                title: `Check out ${movie.title} on CineBox!`,
                text: movie.description,
                url: window.location.origin
            }).catch(console.error);
        } else {
            console.log(`🔗 Link copied for: ${movie.title}`);
            // Simple alert fallback for demo
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = `${window.location.origin}/movie/${movie.id}`;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
        }
    }

    toggleMovieInList(movie) {
        const isInList = Math.random() > 0.5; // Mock check
        const modalListBtn = DOM.modal.querySelector('.btn-list');

        if (isInList) {
            modalListBtn.innerHTML = '<i class="fas fa-plus"></i> Add to List';
        } else {
            modalListBtn.innerHTML = '<i class="fas fa-check"></i> In My List';
        }
    }

    closeModal() {
        // Stop video
        if (DOM.modalVideo) {
            DOM.modalVideo.innerHTML = '';
        }
        DOM.modalOverlay.classList.remove('active');
        AppState.modalOpen = false;
        document.body.style.overflow = 'auto';
    }

    updateUI() {
        // Update notification badge
        this.updateNotificationBadge();

        // Update profile info
        this.updateProfileInfo();

        // Add event listeners to movie cards
        setTimeout(() => {
            this.setupMovieCardListeners();
        }, 100);
    }

    updateProfileInfo() {
        const profileInfo = document.querySelector('.dropdown-profile-info strong');
        if (profileInfo) {
            profileInfo.textContent = AppState.userProfile.name;
        }
    }

    setupMovieCardListeners() {
        document.querySelectorAll('.movie-card').forEach(card => {
            const movieId = card.dataset.movieId;

            // Click on card (not buttons)
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.action-btn')) {
                    // Find the movie data
                    let movie = null;
                    for (const category in AppState.moviesData) {
                        const found = AppState.moviesData[category].find(m => m.id == movieId);
                        if (found) {
                            movie = found;
                            break;
                        }
                    }

                    if (movie) {
                        this.openMovieModal(movie);
                    }
                }
            });

            // Action buttons
            const playBtn = card.querySelector('.play-btn');
            const addBtn = card.querySelector('.add-btn');
            const likeBtn = card.querySelector('.like-btn');
            const expandBtn = card.querySelector('.expand-btn');

            if (playBtn) {
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Find movie and play it
                    for (const category in AppState.moviesData) {
                        const movie = AppState.moviesData[category].find(m => m.id == movieId);
                        if (movie) {
                            this.playMovie(movie);
                            break;
                        }
                    }
                });
            }

            if (addBtn) {
                addBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addBtn.innerHTML = '<i class="fas fa-check"></i>';
                    addBtn.style.backgroundColor = '#46d369';
                    // In a real app, this would add to user's list
                });
            }

            if (likeBtn) {
                likeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    likeBtn.style.color = '#e50914';
                    // In a real app, this would like the movie
                });
            }

            if (expandBtn) {
                expandBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Find the movie data
                    for (const category in AppState.moviesData) {
                        const movie = AppState.moviesData[category].find(m => m.id == movieId);
                        if (movie) {
                            this.openMovieModal(movie);
                            break;
                        }
                    }
                });
            }
        });
    }

    adjustLayout() {
        // Adjust layout based on screen size
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            // Mobile adjustments
            document.querySelectorAll('.movie-card').forEach(card => {
                card.style.width = '140px';
                card.style.height = '79px';
            });
        } else if (screenWidth < 992) {
            // Tablet adjustments
            document.querySelectorAll('.movie-card').forEach(card => {
                card.style.width = '160px';
                card.style.height = '90px';
            });
        }
    }

    initScrollAnimations() {
        // Add scroll animation to elements
        const animatedElements = document.querySelectorAll('.scroll-animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    handleScrollAnimations() {
        // Handle additional scroll-based animations
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Parallax effect for hero
        if (DOM.hero) {
            const hero = DOM.hero;
            const scrolled = scrollPosition / windowHeight;
            hero.style.transform = `translateY(${scrolled * 50}px)`;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CineBoxApp();
});

// Service Worker for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}