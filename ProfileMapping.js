// Assuming you have a list of profiles with their addresses
const profiles = [
  { name: "Profile 1", address: "123 Main Street" },
  { name: "Profile 2", address: "456 Elm Avenue" },
  // Add more profiles here...
];

// Function to display the map with a marker
function displayMapWithMarker(address) {
  // Replace this with your actual map component integration
  // Initialize your map component, e.g., Google Maps, and show a marker at the provided address.
  // You would typically have your own code to handle this.
  console.log(`Displaying map with marker for address: ${address}`);
}

// Create "Summary" buttons for each profile
profiles.forEach((profile) => {
  const summaryButton = document.createElement("button");
  summaryButton.textContent = "Summary";
  
  summaryButton.addEventListener("click", () => {
    displayMapWithMarker(profile.address);
  });
  
  // Assuming you have a container for each profile
  const profileContainer = document.createElement("div");
  profileContainer.textContent = `Profile Name: ${profile.name}`;
  profileContainer.appendChild(summaryButton);
  
  // Append the profile container to your page
  document.body.appendChild(profileContainer);


});
