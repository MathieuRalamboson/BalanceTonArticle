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
  // console.log('-------- Query ---------')
  // console.log('Recuperation Database')
  // console.log('Reponse: ', data)
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

app.put('/api/data/detail', (req, res) => {
  console.log('-------- Query ---------')
  console.log('-------- Modif article ---------')
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  console.log('req.body.idx', req.body.idx)
  console.log('Data1', data)
  // Remplie data avec les nouvelle valeurs
  // data = [...data, req.body]
  data[req.body.idx] = req.body
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
  statusAdmin: false
}, {
  username: 'admin',
  password: 'admin',
  statusAdmin: true
},
{
  username: 'user',
  password: 'user',
  statusAdmin: false
}]
// ---------- Base de donnée --------------
var data = [{
  titre: 'Superman',
  description: 'Superman est un super-héros de bande dessinée américaine appartenant au monde imaginaire de l’Univers DC. Ce personnage est considéré comme une icône culturelle américaine.Créé en janvier 1933 par le scénariste américain Jerry Siegel et le dessinateur canadien Joe Shuster alors quils habitaient tous deux à Cleveland, le personnage fut vendu à Detective Comics. Il apparaît pour la première fois dans un Action Comics en juin 1938. Le personnage est ensuite repris dans plusieurs pièces radiophoniques, émissions de télévision, films, comic strips et jeux vidéo. Au vu du succès et de la notoriété de ses aventures, Superman est essentiel dans la création d’un genre propre aux super-héros.L’apparence du personnage est particulièrement iconique : un costume composé d’un justaucorps rouge, bleu et jaune, de collants et de bottes moulantes, d’une ceinture, avec une cape et sur le torse, le dessin d’un ‘S’ rouge sur un écu jaune. Cet écu est maintenant très souvent utilisé pour symboliser le personnage. ',
  status: 'news',
  url: 'https://i.dlpng.com/static/png/318222_thumb.png'
},
{
  titre: 'Batman',
  description: 'Bruce Wayne, alias Batman, est un super-héros de fiction appartenant à lunivers de DC Comics. Créé par le dessinateur Bob Kane et le scénariste Bill Finger, il apparaît pour la première fois dans le comic book Detective Comics no 27 (date de couverture : mai 1939 mais la date réelle de parution est le 30 mars 1939) sous le nom de The Bat-Man. Bien que ce soit le succès de Superman qui ait amené sa création, il se détache de ce modèle puisquil na aucun pouvoir surhumain. Batman nest quun simple humain qui a décidé de lutter contre le crime après avoir vu ses parents se faire abattre par un voleur dans une ruelle de Gotham City, la ville où se déroulent la plupart de ses aventures. Malgré sa réputation de héros solitaire, il sait sentourer dalliés, comme Robin, son majordome Alfred Pennyworth ou encore le commissaire de police James Gordon. ',
  status: 'sante',
  url: 'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png'
},
{
  titre: 'Wonderwoman',
  description: 'Wonder Woman est une super-héroïne de bande dessinée américaine créée par William Moulton Marston (sous le pseudonyme de Charles Moulton), qui apparaît pour la première fois en décembre 1941 dans All Star Comics #8. Elle est, à cette époque, lune des premières super-héroïnes et demeure la plus célèbre dentre elles. Dans la plupart des adaptations, Wonder Woman est la princesse Diana dune tribu dAmazones dont les origines sont liées à la mythologie grecque. Ambassadrice amazone dans notre monde, elle possède différents pouvoirs surnaturels ainsi que des cadeaux des dieux grecs, comme un lasso magique et des bracelets à lépreuve des balles. Elle fait aussi partie de la Ligue des justiciers dAmérique. ',
  status: 'doc',
  url: 'https://vignette.wikia.nocookie.net/wonderwoman/images/b/ba/Rebirth_Wonder_Woman_design.jpg/revision/latest?cb=20161107173806'
},
{
  titre: 'Robin',
  description: 'Robin est un personnage créé par Bob Kane, Bill Finger et Jerry Robinson en 1940. Le personnage est en partie imaginé par ses créateurs dans le but daccompagner Batman dans ses aventures, mais aussi afin de permettre aux jeunes lecteurs de sidentifier au héros."Robin" signifie "rouge-gorge" en anglais. Mais le pseudonyme attribué au justicier fait également référence à Robin des Bois.',
  status: 'news',
  url: 'https://www.universdescomics.com/wp-content/uploads/2018/05/Robin.png'
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
      res.json({ admin: user.statusAdmin })
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
