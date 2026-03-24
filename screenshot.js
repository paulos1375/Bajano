const puppeteer = require('puppeteer');

const url = process.argv[2] || 'http://localhost:3000/nl';
const out = process.argv[3] || '/tmp/screenshot.png';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  console.log(out);
})();
