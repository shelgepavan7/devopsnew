const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('this me pavan reddy i am from latur!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
