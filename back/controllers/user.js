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
          },
        })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// Connexion à un compte utilisateur avec un token
exports.login = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    console.log(
      "🚀 ~ file: user.js ~ line 33 ~ exports.login= ~ user.password",
      user.password
    );
    console.log("password", req.body.password);
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Mot de passe incorrect !" });
    }
    res.status(200).json({
      userId: user._id,
      token: jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    console.log("🚀 ~ file: user.js ~ line 56 ~ error", error);
    return res.status(500).json({ error });
  }
};
