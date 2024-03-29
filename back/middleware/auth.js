// Récupération du modèle jsonwebtoken
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;

    // Vérification de la concordance entre les clés utilisateurs
    if (userId) {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
