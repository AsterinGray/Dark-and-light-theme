// Using documentElement setproperty
// to change css variable on button changes

let darkTheme = {
  primary: '#262859',
  text: '#F4F4F4',
};

let lightTheme = {
  primary: '#EAEAEA',
  text: '#949494',
};

function changeTheme(theme) {
  document.documentElement.style.setProperty('--primary-color', theme.primary);
  document.documentElement.style.setProperty('--text-color', theme.text);
}

$('#theme-btn').click(function () {
  let theme = $('#theme');
  console.log(theme.attr('src'));
  if ($('#theme').attr('src') == 'Asset/darkm.svg') {
    console.log('lighttheme');
    changeTheme(lightTheme);
    $('#technoscape').css('filter', 'invert(1)');
    $('#theme').attr('src', 'Asset/lightm.svg');
    document.cookie = 'light';
  } else {
    changeTheme(darkTheme);
    console.log('darktheme');
    $('#theme').attr('src', 'Asset/darkm.svg');
    document.cookie = 'dark';
  }
});

if (document.cookie != 'dark') {
  changeTheme(lightTheme);
} else {
  changeTheme(darkTheme);
}
