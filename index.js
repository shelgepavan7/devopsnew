const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello this me pavan reddy at 3RI!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
