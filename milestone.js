const milestoneData = {
    'first-words': {
        title: 'First Words',
        icon: '🗣️',
        date: 'A Precious Moment',
        description: 'The magical moment when Siya spoke her first words! It was a day filled with excitement and joy as we heard her sweet voice for the first time. Her first words were "Mama" and "Dada", bringing tears of happiness to our eyes. This milestone marked the beginning of her beautiful journey of communication and expression.',
        highlights: [
            'First word: "Mama" said with perfect clarity',
            'Followed by "Dada" the very next day',
            'Started babbling and trying to copy sounds',
            'Learned to say "hi" and "bye" with cute waves',
            'Began understanding simple commands'
        ],
        quote: "A baby\'s first words are the sweetest sounds a parent will ever hear."
    },
    'first-steps': {
        title: 'First Steps',
        icon: '👶🚶',
        date: 'Walking into Independence',
        description: 'The incredible day when Siya took her first steps! After months of crawling and pulling herself up, she finally gathered the courage to let go and walk on her own. Those wobbly first steps were the beginning of her journey toward independence, and we captured every precious moment on camera.',
        highlights: [
            'First independent steps taken at 11 months',
            'Walked from Mama to Dada with huge smiles',
            'Fell down multiple times but kept trying',
            'Started exploring the house with newfound freedom',
            'Graduated from crawling to walking within weeks'
        ],
        quote: "Every step forward is a milestone worth celebrating, no matter how small."
    },
    'first-outings': {
        title: 'First Outings',
        icon: '🌳',
        date: 'Exploring the World',
        description: 'Siya\'s first adventures outside the home! From her first trip to the park to her first visit to the zoo, each outing was filled with wonder and discovery. Her eyes would light up at every new sight, sound, and smell, making even simple trips to the grocery store exciting adventures.',
        highlights: [
            'First park visit - loved the swings and slide',
            'Trip to the zoo - fascinated by colorful birds',
            'Beach day - played with sand and watched waves',
            'First restaurant experience - tried new foods',
            'Visit to grandparents\' house - special family time'
        ],
        quote: "The world is a book, and those who do not travel read only one page."
    },
    'first-foods': {
        title: 'First Foods',
        icon: '🍎',
        date: 'Culinary Adventures',
        description: 'The exciting journey of introducing Siya to solid foods! From her first taste of mashed bananas to exploring different flavors and textures, mealtime became an adventure. Her facial expressions when trying new foods were absolutely priceless and made every mealtime entertaining.',
        highlights: [
            'First food: mashed bananas - loved it instantly',
            'Avocado became an instant favorite',
            'Made funny faces at sour lemon taste',
            'Learned to self-feed with finger foods',
            'Enjoyed trying foods from Mama\'s plate'
        ],
        quote: "Food is symbolic of love when words are inadequate."
    },
    'first-laugh': {
        title: 'First Laugh',
        icon: '😄',
        date: 'The Sound of Joy',
        description: 'The most beautiful sound in the world - Siya\'s first genuine laugh! It started as a giggle and grew into the most infectious, joyful laughter that could brighten anyone\'s day. Her laughter became the soundtrack to our happiest moments together.',
        highlights: [
            'First real laugh during peek-a-boo game',
            'Laughed at Daddy\'s silly faces',
            'Giggles when seeing her own reflection',
            'Found the dog\'s antics hilarious',
            'Laughter became her way of showing happiness'
        ],
        quote: "A baby\'s laughter is the most beautiful music in the world."
    },
    'first-tooth': {
        title: 'First Tooth',
        icon: '🦷',
        date: 'A Tiny Milestone',
        description: 'The arrival of Siya\'s first tooth! After months of drooling and teething discomfort, we finally saw that tiny white pearl emerge. It was a bittersweet moment - exciting to see her grow, but also a reminder that our baby was becoming a toddler.',
        highlights: [
            'First tooth appeared at 6 months',
            'Bottom front tooth was the first to emerge',
            'Lots of drooling and chewing on everything',
            'Teething toys became essential items',
            'Sweet gummy smile with one tiny tooth'
        ],
        quote: "Every tooth that appears is a reminder of how quickly they grow."
    },
    'first-birthday': {
        title: 'First Birthday',
        icon: '🎂',
        date: 'One Year of Joy',
        description: 'Celebrating Siya\'s first birthday was a magical affair filled with love, laughter, and of course, cake! Though she may not remember it, we captured every moment of this special day. From her first taste of birthday cake to the joy of opening presents, it was a day to remember forever.',
        highlights: [
            'Beautiful pink themed birthday party',
            'First taste of birthday cake - messy but fun',
            'Smashed cake with both hands enthusiastically',
            'Loved playing with wrapping paper more than toys',
            'Surrounded by loving family and friends'
        ],
        quote: "The first birthday is not just a celebration of life, but of the love that surrounds it."
    },
    'first-friends': {
        title: 'First Friends',
        icon: '👭',
        date: 'Social Beginnings',
        description: 'Watching Siya make her first friends was heartwarming. From shy glances to shared toys and giggles, we saw her social skills blossom. These early friendships taught her about sharing, kindness, and the joy of having special friends to play with.',
        highlights: [
            'First playdate with neighborhood babies',
            'Learned to share toys (with some guidance)',
            'Made friends at baby music classes',
            'Developed special bond with cousin',
            'Started showing preference for certain playmates'
        ],
        quote: "Friendship is born at that moment when one person says to another, \'What! You too?\'"
    }
};

const milestones = Object.keys(milestoneData);

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentMilestone = urlParams.get('milestone') || 'first-words';
    
    loadMilestone(currentMilestone);
    setupNavigation(currentMilestone);
});

function loadMilestone(milestoneId) {
    const data = milestoneData[milestoneId];
    if (!data) return;
    
    document.getElementById('milestoneIcon').textContent = data.icon;
    document.getElementById('milestoneTitle').textContent = data.title;
    document.getElementById('milestoneDate').textContent = data.date;
    document.getElementById('milestoneDescription').textContent = data.description;
    document.getElementById('milestoneQuote').textContent = `"${data.quote}"`;
    
    // Load highlights
    const highlightsList = document.getElementById('milestoneHighlights');
    highlightsList.innerHTML = '';
    data.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });
    
    // Update URL without page reload
    const newUrl = `milestone.html?milestone=${milestoneId}`;
    window.history.replaceState({}, '', newUrl);
}

function setupNavigation(currentMilestone) {
    const currentIndex = milestones.indexOf(currentMilestone);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Previous button
    if (currentIndex > 0) {
        prevBtn.style.display = 'block';
        prevBtn.onclick = () => {
            loadMilestone(milestones[currentIndex - 1]);
            setupNavigation(milestones[currentIndex - 1]);
        };
    } else {
        prevBtn.style.display = 'none';
    }
    
    // Next button
    if (currentIndex < milestones.length - 1) {
        nextBtn.style.display = 'block';
        nextBtn.onclick = () => {
            loadMilestone(milestones[currentIndex + 1]);
            setupNavigation(milestones[currentIndex + 1]);
        };
    } else {
        nextBtn.style.display = 'none';
    }
}
