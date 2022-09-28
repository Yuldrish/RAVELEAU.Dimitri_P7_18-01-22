// Création des actions pour le modèle "user"
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Importation des modules bcrypt et jsonwebtoken
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Création d'un compte utilisateur avec cryptage du mdp
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      prisma.user
        .create({
          data: {
            email: req.body.email,
            password: hash,
            name: req.body.name,
            firstname: req.body.firstname,
            department: req.body.department,
          },
        })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// Connexion à un compte utilisateur avec un token
exports.login = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Mot de passe incorrect !" });
    }
    res.status(200).json({
      userId: user.id,
      token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// Récupération des informations de toutes les users
exports.getAllUser = (req, res, next) => {
  prisma.user
    .findMany()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// Récupération des informations d'un user
exports.getOneUser = (req, res, next) => {
  prisma.user
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

// Suppression d'un user
exports.deleteUser = (req, res, next) => {
  prisma.user
    .findUnique({
      where: {
        id: req.params.id,
      },
    })
    .then((user) => {
      prisma.user
        .delete({ _id: req.params.id })
        .then(() =>
          res.status(200).json({ message: "Utilisateur supprimée !" })
        )
        .catch((error) => res.status(400).json({ error }));
    });
};
