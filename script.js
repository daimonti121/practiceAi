// Elements
const mainImage = document.getElementById('mainImage').querySelector('img');
const thumbnails = document.querySelectorAll('#thumbnails img');

let currentIndex = 0;

// Change main image with fade
function showImage(index) {
    if (currentIndex === index) return;
    currentIndex = index;

    thumbnails.forEach((t) => t.classList.remove('active'));
    thumbnails[index].classList.add('active');

    // Fade-out, change src, fade-in
    mainImage.classList.add('fade');
    setTimeout(() => {
        mainImage.src = thumbnails[index].dataset.full;
        mainImage.classList.remove('fade');
    }, 200);
}

// Events for thumbnails
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => showImage(index));
});

// Fullscreen slider
const fullscreenSlider = document.getElementById('fullscreenSlider');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeFullscreen = document.getElementById('closeFullscreen');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

// Open fullscreen on main image click
mainImage.addEventListener('click', () => {
    fullscreenSlider.style.display = 'flex';
    fullscreenImage.src = thumbnails[currentIndex].dataset.full;
});

// Update fullscreen image with fade
function updateFullscreen() {
    fullscreenImage.classList.add('fade');
    setTimeout(() => {
        fullscreenImage.src = thumbnails[currentIndex].dataset.full;
        fullscreenImage.classList.remove('fade');
    }, 200);
}

// Prev/Next controls
prevSlide.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateFullscreen();
});

nextSlide.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateFullscreen();
});

closeFullscreen.addEventListener('click', () => {
    fullscreenSlider.style.display = 'none';
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (fullscreenSlider.style.display === 'flex') {
        if (e.key === 'ArrowLeft') prevSlide.click();
        if (e.key === 'ArrowRight') nextSlide.click();
        if (e.key === 'Escape') fullscreenSlider.style.display = 'none';
    }
});

// Accordion
document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const all = document.querySelectorAll('.accordion-item');
        all.forEach((i) => {
            if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

function selectSize(button) {
    // убираем выделение со всех кнопок
    document.querySelectorAll('.size-button').forEach((btn) => {
        btn.classList.remove('selected');
    });

    // добавляем класс только на текущую кнопку
    button.classList.add('selected');
}

// modal

let isInches = false;
const toggle = document.querySelector('.toggle');

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function toggleUnits() {
    isInches = !isInches;
    toggle.classList.toggle('active');
    var sizes = {
        cm: {
            s: [106, 68, 63, 48],
            m: [112, 71, 65, 50],
            l: [124, 77, 69, 54],
            xl: [130, 80, 71, 56],
        },
        in: {
            s: [41.7, 26.8, 24.8, 18.9],
            m: [44.1, 28.0, 25.6, 19.7],
            l: [48.8, 30.3, 27.2, 21.3],
            xl: [51.2, 31.5, 28.0, 22.0],
        },
    };

    if (isInches) {
        document.getElementById('sChest').textContent =
            sizes.in.s[0].toFixed(1);
        document.getElementById('sLength').textContent =
            sizes.in.s[1].toFixed(1);
        document.getElementById('sSleeve').textContent =
            sizes.in.s[2].toFixed(1);
        document.getElementById('sShoulder').textContent =
            sizes.in.s[3].toFixed(1);
        document.getElementById('mChest').textContent =
            sizes.in.m[0].toFixed(1);
        document.getElementById('mLength').textContent =
            sizes.in.m[1].toFixed(1);
        document.getElementById('mSleeve').textContent =
            sizes.in.m[2].toFixed(1);
        document.getElementById('mShoulder').textContent =
            sizes.in.m[3].toFixed(1);
        document.getElementById('lChest').textContent =
            sizes.in.l[0].toFixed(1);
        document.getElementById('lLength').textContent =
            sizes.in.l[1].toFixed(1);
        document.getElementById('lSleeve').textContent =
            sizes.in.l[2].toFixed(1);
        document.getElementById('lShoulder').textContent =
            sizes.in.l[3].toFixed(1);
        document.getElementById('xlChest').textContent =
            sizes.in.xl[0].toFixed(1);
        document.getElementById('xlLength').textContent =
            sizes.in.xl[1].toFixed(1);
        document.getElementById('xlSleeve').textContent =
            sizes.in.xl[2].toFixed(1);
        document.getElementById('xlShoulder').textContent =
            sizes.in.xl[3].toFixed(1);
    } else {
        document.getElementById('sChest').textContent = sizes.cm.s[0];
        document.getElementById('sLength').textContent = sizes.cm.s[1];
        document.getElementById('sSleeve').textContent = sizes.cm.s[2];
        document.getElementById('sShoulder').textContent = sizes.cm.s[3];
        document.getElementById('mChest').textContent = sizes.cm.m[0];
        document.getElementById('mLength').textContent = sizes.cm.m[1];
        document.getElementById('mSleeve').textContent = sizes.cm.m[2];
        document.getElementById('mShoulder').textContent = sizes.cm.m[3];
        document.getElementById('lChest').textContent = sizes.cm.l[0];
        document.getElementById('lLength').textContent = sizes.cm.l[1];
        document.getElementById('lSleeve').textContent = sizes.cm.l[2];
        document.getElementById('lShoulder').textContent = sizes.cm.l[3];
        document.getElementById('xlChest').textContent = sizes.cm.xl[0];
        document.getElementById('xlLength').textContent = sizes.cm.xl[1];
        document.getElementById('xlSleeve').textContent = sizes.cm.xl[2];
        document.getElementById('xlShoulder').textContent = sizes.cm.xl[3];
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
