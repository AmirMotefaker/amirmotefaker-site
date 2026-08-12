export default function ThemeBoot() {
  const script = `
    (function(){
      try {
        var key = "am-theme";
        var stored = localStorage.getItem(key);
        var theme = stored === "light" || stored === "dark"
          ? stored
          : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        document.documentElement.dataset.theme = theme;
      } catch (e) {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}