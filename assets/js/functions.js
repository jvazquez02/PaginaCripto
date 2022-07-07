let mySidebar = document.getElementById("mySidebar");

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("caption").innerHTML = element.alt;


}
// Toggle between showing and hiding the sidebar when clicking the menu icon
function openSidebar() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function closeSidebar() {
    mySidebar.style.display = "none";
}