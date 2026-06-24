var nav = document.querySelector('nav.sidebar');
nav.innerHTML =
  '<a href="storageflow.html"          class="lang nav-home" id="Nav0"></a>' +
  '<a href="1-essentials.html"         class="lang"          id="Nav1"></a>' +
  '<a href="2-login.html"              class="lang"          id="Nav2"></a>' +
  '<a href="3-dashboard.html"          class="lang"          id="Nav3"></a>' +
  '<a href="4-my-settings.html"        class="lang"          id="Nav4"></a>' +
  '<a href="5-storage-management.html" class="lang"          id="Nav5"></a>' +
  '<a href="6-reports.html"            class="lang"          id="Nav6"></a>' +
  '<a href="7-users-management.html"   class="lang"          id="Nav7"></a>' +
  '<a href="8-tools.html"              class="lang"          id="Nav8"></a>' +
  '<a href="9-lists-management.html"   class="lang"          id="Nav9"></a>';

var currentPage = window.location.pathname.split('/').pop();
nav.querySelectorAll('a').forEach(function(a) {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
