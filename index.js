const server = require('./server/server');

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

server.get('/', (req, res) => {
  const messageOfTheDay = process.env.MOTD || 'Hello World!';
  res.status(200).json({ motd: messageOfTheDay });
});