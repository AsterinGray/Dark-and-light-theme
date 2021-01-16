const theme = document.cookie;
const theme_btn = $('#theme');
const theme_img = $('#theme-img');

if (theme) {
  document.documentElement.setAttribute('data-theme', 'theme');
  if (document.cookie == 'dark') {
    darkTheme();
    s;
  } else {
    lightTheme();
  }
}

function changeTheme(e) {
  if (e.checked == true) {
    darkTheme();
  } else {
    lightTheme();
  }
}

function lightTheme() {
  document.documentElement.setAttribute('data-theme', 'light');
  document.cookie = 'light';
  $('#theme-img').attr('src', 'Asset/moon.svg');
  $('#techoscape-logo').css('filter', 'invert(1)');
}

function darkTheme() {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.cookie = 'dark';
  $('#theme-img').attr('src', 'Asset/lightm.svg');
  $('#techoscape-logo').css('filter', 'invert(0)');
}
