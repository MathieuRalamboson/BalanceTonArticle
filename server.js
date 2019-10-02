/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * npm install -g nodemon
 * nodemon server.js
 *
 * example app: https://github.com/Musinux/first-vue-app
 */

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))
app.use(session({
  secret: 'blablabla', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('ceci est un message de log')
  res.json({
    message: 'vous êtes à la racine de mon serveur'
  })
})

// ----------------Coter API -----------------
app.get('/api/todo', (req, res) => {
  console.log('coucou')
  res.json([{
    title: 'faire ses devoirs',
    content: 'travailler le projet de web'
  }])
})

// ---------- Gestion User --------------
const users = [{
  username: 'lol',
  password: 'lol',
  active: false
}, {
  username: 'admin',
  password: 'changethispassword',
  active: false
}]

app.post('/api/login', (req, res) => {
  console.log('req.query', req.query)
  console.log('req.body', req.body)
  console.log('req.body.username', req.body.username)
  const userId = '123'
  console.log('req.session.userId', req.session.userId)

  if (!req.session.userId) { // Recherche utilisateur
    const user = users.find(user =>
      user.username === req.body.username &&
        user.password === req.body.password
    )
    console.log('Recherche Utilisateur')
    if (!user) { // Utilisateur non trouver
      res.status(401)
      res.json({
        message: 'did not find any user with these credentials'
      })
      console.log('Utilisateur Non trouvé')
    } else {
      // connect the user
      req.session.userId = user.id // connect the user, and change the id
      res.json({
        message: 'connected with id =' + this.userId
      })
      console.log('Connection Reussi')
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
    console.log('Vous etes deja connecter')
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
