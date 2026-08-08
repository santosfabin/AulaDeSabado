const config = require('./config');
const express = require('express');
const app = express();
const port = config.PORT || 3000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const routes = require('./routes');
const { createDefaultsUsers } = require('./seed/users');
app.use('/api', routes);

async function startServer() {
  try {
    await createDefaultsUsers();

    app.listen(port, () => {
      console.log(`Servidor iniciado na porta: ${port}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor: ', err);
  }
}

startServer();
