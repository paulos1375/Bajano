const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Language routing
app.get('/', (req, res) => {
  const lang = req.acceptsLanguages('nl', 'en', 'es') || 'nl';
  res.redirect(`/${lang}`);
});

app.get('/:lang', (req, res, next) => {
  const { lang } = req.params;
  const file = path.join(__dirname, 'views', `index-${lang}.html`);
  res.sendFile(file, err => { if (err) next(); });
});

app.get('/:lang/:page', (req, res, next) => {
  const { lang, page } = req.params;
  const file = path.join(__dirname, 'views', `${page}-${lang}.html`);
  res.sendFile(file, err => { if (err) next(); });
});

app.listen(PORT, () => console.log(`Villa Bajano running on http://localhost:${PORT}`));
