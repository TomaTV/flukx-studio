(() => {
  const path = window.location.pathname;
  if (path.match(/^\/(fr|en)($|\/)/)) return;

  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith("fr") ? "fr" : "en";
  window.location.replace(`/${lang}${path === "/" ? "" : path}`);
})();
