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
  cookie: { secure: false } // ne changez que si vous avez activé le https
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
app.get('/api/data', (req, res) => {
  console.log('-------- Query ---------')
  console.log('Recuperation Database')
  console.log('Reponse: ', data)
  res.json(data)
})

app.get('/api/data/detail', (req, res) => {
  console.log('-------- Query ---------')
  console.log('Recuperation un article')
  console.log('req.query', req.query)
  console.log('req.query.idx', req.query.idx)
  console.log('Reponse: ', data[req.query.idx])
  res.json(data[req.query.idx])
})

app.post('/api/data', (req, res) => {
  console.log('-------- Query ---------')
  console.log('-------- Ajout POST ---------')
  console.log('req.body', req.body)
  console.log('Data1', data)
  // Remplie data avec les nouvelle valeurs
  data = [...data, req.body]
  console.log('Data2', data)
})

app.delete('/api/data', (req, res) => {
  console.log('-------- Query ---------')
  console.log('-------- Suppression POST ---------')
  console.log('req.query', req.query)
  console.log('req.query.idx', req.query.idx)
  console.log('Data1', data)
  data.splice(req.query.idx, 1)
  console.log('Data2', data)
})

// ---------- Gestion User --------------
const users = [{
  username: 'lol',
  password: 'lol',
  active: false
}, {
  username: 'admin',
  password: 'admin',
  active: false
}]
// ---------- Base de donnée --------------
var data = [{
  titre: 'superman',
  description: 'héro',
  due: 'Mathieu.R',
  date: '2nd Jan 2019',
  status: 'news'
},
{
  titre: 'batman',
  description: 'héro',
  due: 'Mathieu.R',
  date: '2nd Jan 2019',
  status: 'sante'
},
{
  titre: 'wonderwoman',
  description: 'héro',
  due: 'Mathieu.R',
  date: '2nd Jan 2019',
  status: 'doc'
},
{
  titre: 'cochon',
  description: 'héro',
  due: 'Mathieu.R',
  date: '2nd Jan 2019',
  status: 'news'
}
]

app.post('/api/login', (req, res) => {
  console.log('-------- Query ---------')
  console.log('req.query', req.query)
  console.log('req.body', req.body)
  if (!req.session.userId) { // Recherche utilisateur
    const user = users.find(u =>
      u.username === req.body.username &&
        u.password === req.body.password
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
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        message: 'connected with id =' + req.session.userId
      })
      console.log(' Utilisateur trouvé ! ')
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
    console.log('Vous etes deja connecter')
  }
  console.log('-------- Fin Processus ---------')
})

app.get('/api/logout', (req, res) => {
  console.log('-------- Query ---------')
  if (!req.session.userId) {
    console.log('Vous etes deja déconnecter')
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
    console.log('Vous venez de vous déconnecter')
  }
  console.log('-------- Fin Processus ---------')
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
