const entriesContainer = document.getElementById('entries-container');
const newEntryForm = document.getElementById('new-entry-form');

// Simulate some initial entries (replace with logic to fetch from storage)
const entries = [
  { title: 'Day 1', content: 'This is my first journal entry.', date: new Date().toISOString().substring(0, 10) },
  { title: 'Day 2', content: 'Some interesting things happened today.', date: new Date().toISOString().substring(0, 10) },
];

// Function to display an entry
function displayEntry(entry) {
  const entryElement = document.createElement('div');
  entryElement.classList.add('entry');
  entryElement.innerHTML = `<h3>${entry.title}</h3>
  <p>${entry.content}</p>
  <p>Date: ${entry.date}</p>`;
  entriesContainer.appendChild(entryElement);
}

// Display initial entries
entries.forEach(entry => displayEntry(entry));

// Handle form submission
newEntryForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const date = document.getElementById('date').value;

  // Simple validation (replace with more robust validation)
  if (!title || !content || !date) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new entry object (replace with logic to store data)
  const newEntry = { title, content, date };

  // Add new entry to the list and display it
  entries.push(newEntry);
  displayEntry(newEntry);

  // Clear the form
  this.reset();
});
