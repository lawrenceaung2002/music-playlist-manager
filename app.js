// ========================================
// MUSIC PLAYLIST MANAGER
// ========================================

// ========================================
// 1. PLAYLIST DATA
// ========================================

// Our playlist is an array of song objects.

let playlist = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Pop",
  },
  {
    id: 2,
    title: "As It Was",
    artist: "Harry Styles",
    genre: "Pop",
  },
  {
    id: 3,
    title: "Starboy",
    artist: "The Weeknd",
    genre: "R&B",
  },
];

// ========================================
// 2. DOM ELEMENTS
// ========================================

const songForm = document.querySelector("#songForm");

const songTitle = document.querySelector("#songTitle");
const songArtist = document.querySelector("#songArtist");
const songGenre = document.querySelector("#songGenre");

const playlistContainer = document.querySelector("#playlist");

const songCount = document.querySelector("#songCount");

const searchInput = document.querySelector("#searchInput");

const emptyState = document.querySelector("#emptyState");

const formError = document.querySelector("#formError");

// ========================================
// 3. RENDER PLAYLIST
// ========================================

function renderPlaylist(songs) {
  playlistContainer.innerHTML = "";

  // Update song count
  songCount.textContent = songs.length;

  // Show empty state when there are no songs
  if (songs.length === 0) {
    emptyState.style.display = "block";

    return;
  }

  emptyState.style.display = "none";

  // Display every song
  songs.forEach(function (song) {
    const songElement = document.createElement("div");

    songElement.classList.add("song");

    songElement.innerHTML = `
      <div class="song-cover">
        ♫
      </div>

      <div class="song-info">

        <div class="song-title">
          ${song.title}
        </div>

        <div class="song-artist">
          ${song.artist}
        </div>

      </div>

      <div class="song-meta">

        <span class="genre">
          ${song.genre}
        </span>

        <button
          class="remove-button"
          onclick="removeSong(${song.id})"
        >
          Remove
        </button>

      </div>
    `;

    playlistContainer.appendChild(songElement);
  });
}

// ========================================
// CHALLENGE 1
// ========================================
//
// ADD A NEW SONG
//
// Students need to:
// 1. Get values from the form.
// 2. Validate the inputs.
// 3. Create a song object.
// 4. Add it to the playlist.
// 5. Render the updated playlist.
// 6. Clear the form.
//
// ========================================

songForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = songTitle.value.trim();
  const artist = songArtist.value.trim();
  const genre = songGenre.value;

  if (!title || !artist || !genre) {
    formError.textContent = "Please complete all fields.";
    return;
  }
  formError.textContent = "";

  const newSong = {
    id: Date.now(),
    title: title,
    artist: artist,
    genre: genre,
  };

  playlist = [...playlist, newSong];

  renderPlaylist(playlist);

  songForm.reset();
});

// ========================================
// CHALLENGE 2
// ========================================
//
// SEARCH SONGS (Playlists)
//
// Students need to:
// 1. Get the search text.
// 2. Filter the playlist.
// 3. Search by title OR artist.
// 4. Display the filtered songs.
//
// ========================================
searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredSongs = playlist.filter(function (song) {
    const title = song.title.toLowerCase();
    const artist = song.artist.toLowerCase();

    return title.includes(searchText) || artist.includes(searchText);
  });

  renderPlaylist(filteredSongs);
});

// ========================================
// CHALLENGE 3
// ========================================
//
// REMOVE A SONG
//
// Students need to:
// 1. Receive the song ID.
// 2. Filter the playlist by ID.
// 3. Keep every song except the selected song.
// 4. Update the playlist.
// 5. Render the playlist again.

function removeSong(songId) {
  playlist = playlist.filter(function (song) {
    return song.id !== songId;
  });

  renderPlaylist(playlist);
}

// ========================================
// INITIAL RENDER
// ========================================

renderPlaylist(playlist);
