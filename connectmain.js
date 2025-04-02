const connectDiv = document.getElementById('connect-mainpage');
connectDiv.style.cursor = 'pointer';
connectDiv.onclick = () => {
  window.location.href = 'mailto:satyamission6@gmail.com';
};

const connectDiv2 = document.getElementById('donate-mainpage');
connectDiv2.style.cursor = 'pointer';
connectDiv2.onclick = () => {
  window.location.href = 'donate.html';
};

const connectDiv3 = document.getElementById('volunteer-mainpage');
connectDiv3.style.cursor = 'pointer';
connectDiv3.onclick = () => {
  window.open('https://forms.gle/ccTsiY5cKMrbyAku5', '_blank');
};