const slides = [
    {
      image: 'Shadycanyon.png',
      comment: 'This one spot not really in irvine but its the canyon near rsm'
    },
    {
      image: 'landslide.png',
      comment: 'There’s an abandoned house that’s falling apart about half a mile down the Yale bike road. They haven’t demolished it yet, so sometimes I used to just hang out there.'
    },
    {
      image: 'image3.jpg',
      comment: 'i won’t tell u cause it’s a secret 😉'
    },
    {
        image: 'basement.png',
        comment: 'My dads basement'
      },
      {
        image: 'resturant.png',
        comment: 'Fukada. It iss my secret place because not many people know this restaurant. I have been going to Fukada since I was really little, like my parents have been going to this restaurant for a long time (maybe before I was born). Fukada is a Japanese restaurant near the Irvine Spectrum and it is such good food.'
      },
      {
        image: 'image3.jpg',
        comment: 'Uhm it is a secret 🤨 but as to why I keep it secret, I enjoy have the opportunity to escape into a place only I know and where I can feel comfortable to relax.'
      },
      {
        image: 'olivegrove.png',
        comment: 'Olive Grove: quiet, not a lot of places, good taste, American restaurant, $20-30 per person (cheap for Irvine)'
      },
      {
        image: 'trail.png',
        comment: 'Shady Canyon Trail spot where I can see the sand canyon reservoir. I can see the open space, green golf course and lake at a glance.'
      },
      {
        image: 'universitypark.png',
        comment: 'There is a specific area in university park that no one goes to'
      },
      {
        image: 'bridge.png',
        comment: 'There is a nice place to be able to see the shopping mall at a glance from the bridge between the buildings. If you get tired of shopping, you can sit on the bench on the bridge and have a cup of coffee and spend some leisurely time.'
      },
      {
        image: 'hill.png',
        comment: 'Turtle Rock Viewpoint trail. This is a place I found out about by chance while walking. Those who know will know that it is not a famous place with a specific name. If you climb up here, you can see the UCI at a glance, and the quiet and open view makes you feel better and relieves stress.'
      },
      {
        image: 'basketball.png',
        comment: 'Basketball court at las lomas. Mostly empty courts and lights are on til 10 pm'
      },
  ];

  let currentIndex = 0;

  function showSlide(index) {
    const imageBox = document.getElementById('imageBox');
    const commentText = document.getElementById('commentText');

    imageBox.style.backgroundImage = `url('${slides[index].image}')`;
    commentText.textContent = slides[index].comment;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initialize
  showSlide(currentIndex);

  function showSlide(index) {
    const imageBox = document.getElementById('imageBox');
    const commentText = document.getElementById('commentText');
    const homeButton = document.getElementById('homeButton');
  
    imageBox.style.backgroundImage = `url('${slides[index].image}')`;
    commentText.textContent = slides[index].comment;
  
    // Show home button only on the last slide
    if (index === slides.length - 1) {
      homeButton.style.display = 'block';
    } else {
      homeButton.style.display = 'none';
    }
  }
  
  function goHome() {
    window.location.href = 'file:///Users/jinnykim/Documents/core%202%20studio/Irvine/entry1/index1.html'; // Change this to your home page URL
  }
  