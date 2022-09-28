// Création des actions pour le modèle "comment"
const fs = require("fs");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Ajout d'une comment dans la BDD
exports.createComment = (req, res, next) => {
  const commentObject = JSON.parse(req.body.comment);
  delete commentObject._id;

  prisma.comment
    .create({
      data: {
        ...commentObject,
        multimedia: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      },
    })
    .then(() => res.status(201).json({ message: "Comment enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Récupération des informations d'une seule comment
exports.getOneComment = (req, res, next) => {
  prisma.comment
    .findUnique({
      where: {
        id: req.params.id,
      },
    })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

// Modification des informations d'une seule comment
exports.modifyComment = (req, res, next) => {
  if (req.file) {
    console.log("if");
    prisma.comment
      .update({
        where: {
          id: req.params.id,
        },
        data: {
          ...JSON.parse(req.body.comment),
          multimedia: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        },
      })
      .then(() => res.status(200).json({ message: "Comment modifiée!" }))
      .catch((error) => res.status(400).json({ error }));
  } else {
    console.log("else");
    const commentObject = { ...req.body };
    prisma.Comment.update(
      { _id: req.params.id },
      { ...commentObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Comment modifiée!" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

// Suppression d'une seule comment
exports.deleteComment = (req, res, next) => {
  prisma.Comment.findUnique({ _id: req.params.id })
    .then((comment) => {
      const filename = comment.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        prisma.Comment.deleteComment({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Comment supprimée !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

// Récupération des informations de toutes les Comments
exports.getAllComment = (req, res, next) => {
  prisma.comment
    .findMany()
    .then((Comments) => {
      res.status(200).json(Comments);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
