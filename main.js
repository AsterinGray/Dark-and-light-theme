let theme = localStorage.getItem('theme');
const theme_btn = $('#theme');
const theme_img = $('#theme-img');
const theme_inp = $('#theme-inp');
const technoscape_logo = $('#technoscape-logo');
const social_media = $('#social-media');

const lightTheme = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
  theme_img.attr('src', 'Asset/moon.svg');
  social_media.css('filter', 'invert(0)');
  technoscape_logo.css('filter', 'invert(0)');
};

const darkTheme = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  theme_img.attr('src', 'Asset/lightm.svg');
  social_media.css('filter', 'invert(1)');
  technoscape_logo.css('filter', 'invert(1)');
};

if (theme) {
  document.documentElement.setAttribute('data-theme', 'theme');
  if (theme == 'dark') {
    darkTheme();
  } else {
    lightTheme();
  }
}

const changeTheme = (e) => {
  if (e.checked == true) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const submitForm = document.getElementById('submit-form');
const session = $('.session');

submitForm.onsubmit = function (e) {
  const message = $('#message');
  const formData = {
    email: $('input[name=email]').val(),
  };
  $.ajax({
    type: 'POST',
    url: '/api/subscribe',
    data: formData,
    dataType: 'json',
    encode: true,
    success: function (data, text) {
      message.html(data.message);
      session.fadeOut(100, function () {
        session.addClass('success');
      });
      session.removeClass('error');
      session.show('slow');
    },
    error: function (request, status, error) {
      message.html(request.responseJSON.message);
      session.fadeOut(100, function () {
        session.addClass('error');
      });
      session.removeClass('success');
      session.show('slow');
    },
  });
  e.preventDefault();
};

const closeAlert = () => {
  session.hide('slow');
};

// if (/Mobi/i.test(navigator.userAgent)) {
//   $('html').css({ overflow: 'auto' });
//   $('body').css({ height: 'auto' });
//   $('body').css({ overflow: 'auto' });
//   $('.scrollable').css({ position: 'inherit' });
// }
