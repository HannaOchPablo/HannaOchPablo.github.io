

// Define the Guest object constructor
function Guest(name, canBringPlusOne) {
  this.name = name;
  this.canBringPlusOne = canBringPlusOne;
}

// Example usage:
const guest1 = new Guest("Hanna Pettersson Nyman", true);
const guest2 = new Guest("Pablo Ahava Pizarro", false);

  
  // Dummy guest list for testing
  const guestList = [guest1, guest2];

  function toggleMobileMenu() {
    const navLinksMobile = document.querySelector('.mobile-dropdown');
    navLinksMobile.classList.toggle('show-dropdown');
  }

function checkName() {
  const guestName = document.getElementById('guestName').value;
  const bringPlusOneCheckbox = document.getElementById('bringPlusOneCheckbox');
  const foundYouMessage = document.getElementById('foundYouMessage');
  const personalizedMessage = document.getElementById('message');
  const submitButton = document.getElementById('submitBtn');

  // Search among the objects in guestList for a guest with the given name
  
  const foundGuest = guestList.find(guest => guest.name === guestName);

  if (foundGuest) {
    // Display "Found you!" message in green text
    foundYouMessage.style.color = 'green';
    foundYouMessage.textContent = 'Found you!';

    // Show/hide the "I will bring a plus one!" checkbox based on canBringPlusOne value
    if (foundGuest.canBringPlusOne) {
      bringPlusOneCheckbox.style.display = 'block';
    } else {
      bringPlusOneCheckbox.style.display = 'none';
    }

    personalizedMessage.style.display = 'block';
    submitButton.disabled = false;

  } else {
    // If the name is not found, display a message in red text
    foundYouMessage.style.color = 'red';
    foundYouMessage.textContent = 'Name not found in the guest list.';

    // Hide the "I will bring a plus one!" checkbox
    bringPlusOneCheckbox.style.display = 'none';
  }
}
