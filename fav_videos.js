const videos = [
    {
        title: "PETSCOP: The Darkest Game You Cannot Play",
        url: "https://www.youtube.com/watch?v=A_rK2tAIFLA",
        tags: ["vgs"],
        length: 10139,
    },
    {
        title: "DELTARUNE and the Fourth Wall || THE DEVICE THEORY [PART 2: DEMO]",
        url: "https://www.youtube.com/watch?v=dbu5MfJ9V0c",
        tags: ["vgs"],
        length: 9146,
    },
    {
        title: "My FULL DELTARUNE PREDICTIONS Before Chapter 3&4 (Analysis/Theory Discussion)",
        url: "https://www.youtube.com/watch?v=YU2XoFYmjTg",
        tags: ["vgs"],
        length: 7104,
    },
    {
        title: "MyHouse.WAD - Inside Doom's Most Terrifying Mod",
        url: "https://www.youtube.com/watch?v=5wAo54DHDY0",
        tags: ["vgs"],
        length: 6121,
    },
    {
        title: "PETSCOP: A Virtual Void of Misery",
        url: "https://www.youtube.com/watch?v=a5kDs8I7brs",
        tags: ["vgs"],
        length: 6041,
    },
    {
        title: "Steven Universe Future: Misunderstood, Misrepresented, and Magnificent",
        url: "https://www.youtube.com/watch?v=W9JKd8UJMho",
        tags: ["tvs"],
        length: 5777,
    },
    {
        title: "The man who tried to fake an element",
        url: "https://www.youtube.com/watch?v=Qe5WT22-AO8",
        tags: ["irl"],
        length: 4764,
    },
    {
        title: "The AI Revolution is Rotten to the Core",
        url: "https://www.youtube.com/watch?v=-MUEXGaxFDA",
        tags: ["web"],
        length: 4719,
    },
    {
        title: "POLYBIUS - The Video Game That Doesn't Exist",
        url: "https://www.youtube.com/watch?v=_7X6Yeydgyg",
        tags: ["web"],
        length: 4114,
    },
    {
        title: "My Take On Alving Knight Theory",
        url: "https://www.youtube.com/watch?v=hdJS4pc5p2g",
        tags: ["vgs"],
        length: 3800,
    },
    {
        title: "YIIK: The Worst Game Ever and Why I Love It",
        url: "https://www.youtube.com/watch?v=avX7hqzT7ag",
        tags: ["vgs"],
        length: 3793,
    },
    {
        title: "Lake City Quiet Pills: An Internet Mystery",
        url: "https://www.youtube.com/watch?v=DHWYTwY0hiw",
        tags: ["web"],
        length: 3658,
    },
    {
        title: "Marvel Studios' Assembled: The Making of Agatha All Along",
        url: "https://www.youtube.com/watch?v=G0LxA8vGSGo",
        tags: ["tvs"],
        length: 3606,
    },
    {
        title: "Why Spooky's Jumpscare Mansion is Horror PERFECTION",
        url: "https://www.youtube.com/watch?v=e0pPrDXLDQY",
        tags: ["vgs"],
        length: 3420,
    },
];

const videoList = document.getElementById('videoList');
const tagFilter = document.getElementById('tagFilter');
const sortVideos = document.getElementById('sortVideos');

function renderVideos() {
    let filteredVideos = videos;

    // Filter by tag
    const tag = tagFilter.value;
    if (tag !== "all") {
        filteredVideos = videos.filter(v => v.tags.includes(tag));
    }

    // Sort videos
    const sortBy = sortVideos.value;
    filteredVideos.sort((a, b) => {
        switch (sortBy) {
            case "alphabetical":
                return a.title.localeCompare(b.title); //alphabetical
            case "length_s":
                return a.length - b.length;       // smallest first
            case "length_l":
                return b.length - a.length;       // largest first
            default:
                return 0;
        }
    });

    // Render list
    videoList.innerHTML = '';
    for (const video of filteredVideos) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${video.url}" target="_blank">${video.title}</a> `;
        videoList.appendChild(li);
    }
}

// Set defaults
tagFilter.value = 'all';
sortVideos.value = 'alphabetical';
renderVideos();

// Event listeners
tagFilter.addEventListener('change', renderVideos);
sortVideos.addEventListener('change', renderVideos);
