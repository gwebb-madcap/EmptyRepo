var events = [
  {'Date': new Date(2022, 4, 24), 'Title': 'Post partial shipments'},
  {'Date': new Date(2022, 4, 24), 'Title': '10:00 am ET', 'Link': 'https://gpc.webex.com/gpc/k2/j.php?MTID=t52fe04d5fa6a46b0adee26a5e9cf0b0d'},
  {'Date': new Date(2022, 4, 24), 'Title': '3:00 pm ET', 'Link': 'https://gpc.webex.com/gpc/k2/j.php?MTID=t52fe04d5fa6a46b0adee26a5e9cf0b0d'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);