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

  // 1. Get values from the form.
  // Get the value from each input.
  // Remove extra spaces from title and artist.
  // ( Which already provided in below )
  const title = songTitle.value.trim();
  const artist = songArtist.value.trim();
  const genre = songGenre.value;

  // 2. Validate the inputs.
  //
  // If title OR artist OR genre is empty:
  // - Show this error message:
  //   formError.textContent = "Please complete all fields.";
  // - Use return to stop the function.
  //
  // If validation passes:
  // - Clear the error message.
  // - Uncomment the code below.
  // formError.textContent = "";

  // 3. Create a song object.
  //
  // Use the starter object below.
  // Add the necessary properties using the values above.
  //
  // const newSong = {
  //   id: Date.now(),
  // };

  // 4. Add the new song to the playlist.
  //
  // Use the spread operator to create a new array.
  //
  // Example:
  // playlist = [...playlist, newSong];

  // 5. Render the updated playlist.
  //
  // Uncomment the code below.
  //
  // renderPlaylist(playlist);

  // 6. Clear the form.
  //
  // Uncomment the code below.
  //
  // songForm.reset();
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
  // 1. Get the search text.
  //
  // Get the value from the search input.
  // Convert it to lowercase and remove extra spaces.

  const searchText = searchInput.value.toLowerCase().trim();

  // 2. Filter the playlist.
  //
  // Create a new variable called filteredSongs.
  // Use filter() to create a new array from playlist.

  // 3. Search by title OR artist.
  //
  // Inside filter():
  // - Convert playlist.title to lowercase.
  // - Convert playlist.artist to lowercase.
  // - Check if searchText is included in the title OR artist.
  //
  // Hint:
  // Use includes()
  //
  // Example structure:
  //
  // const filteredSongs = playlist.filter(function (song) {
  //
  //   const title = song.title.toLowerCase();
  //   const artist = song.artist.toLowerCase();
  //
  //   return __________________________;
  //
  // });

  // 4. Display the filtered songs.
  //
  // Uncomment the code below.
  //
  // renderPlaylist(filteredSongs);
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
//
// ========================================

function removeSong(songId) {
  // 1. Receive the song ID.
  //
  // songId is already provided as a function parameter.
  // Use it to identify the song that should be removed.
  // 2. Filter the playlist by ID.
  //
  // Create a new playlist using filter().
  //
  // Keep the songs whose ID is NOT equal to songId.
  //
  // Example structure:
  //
  // playlist = playlist.filter(function (song) {
  //
  //   return __________________________;
  //
  // });
  // 3. Update the playlist.
  //
  // The playlist variable should now contain
  // the updated array.
  // 4. Render the playlist again.
  //
  // Uncomment the code below.
  //
  // renderPlaylist(playlist);
}

// ========================================
// INITIAL RENDER
// ========================================

renderPlaylist(playlist);
