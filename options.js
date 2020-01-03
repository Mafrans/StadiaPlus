// Get current option state
function get_options() {
  var forceVP9_state = document.getElementById('forceVP9').checked;
  var options = {
    forceVP9: forceVP9_state
  }
  return options;
}

// provide default values for each option
const default_options = {
    forceVP9: false
}

// set options (called with chrome.storage.sync.get in save_options)
function set_options(items) {
  document.getElementById('forceVP9').checked = items.forceVP9;
}

// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set(get_options(),
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
  });
}

// Restores option state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(default_options, set_options);
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
