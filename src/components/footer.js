import data from '../services/version.json';

const { version } = data;

const createFooter = () => {
  return `
    <footer class="footer">
      <a href="https://github.com/ageraowls" class="footer__link" target="_blank">
        <svg class="link__github">
          <use xlink:href="./assets/images/icons/sprite.svg#github"></use>
        </svg>
      </a>
      <span class="version">version: ${version}</span>
    </footer>
  `;
};

export { createFooter };
