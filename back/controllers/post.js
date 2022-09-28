// Création des actions pour le modèle "post"
const fs = require("fs");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Ajout d'une post dans la BDD
exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;

  prisma.post
    .create({
      data: {
        ...postObject,
        multimedia: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      },
    })
    .then(() => res.status(201).json({ message: "Post enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Récupération des informations d'une seule post
exports.getOnePost = (req, res, next) => {
  prisma.post
    .findUnique({
      where: {
        id: req.params.id,
      },
    })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

// Modification des informations d'une seule post
exports.modifyPost = (req, res, next) => {
  if (req.file) {
    console.log("if");
    prisma.post
      .update({
        where: {
          id: req.params.id,
        },
        data: {
          ...JSON.parse(req.body.post),
          multimedia: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        },
      })
      .then(() => res.status(200).json({ message: "Post modifiée!" }))
      .catch((error) => res.status(400).json({ error }));
  } else {
    console.log("else");
    const postObject = { ...req.body };
    Post.updateOne(
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Post modifiée!" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

// Suppression d'une seule post (son image reste sur le serveur)
exports.deletePost = (req, res, next) => {
  prisma.Post.findUnique({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Post supprimée !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

// Récupération des informations de toutes les posts
exports.getAllPost = (req, res, next) => {
  prisma.post
    .findMany()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// Ajout des likes et dislikes pour chaque post
exports.likePost = (req, res) => {
  /* Si un utilisateur Like un post */
  if (req.body.like === 1) {
    Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: 1 }, $push: { usersLiked: req.body.userId } }
    )
      .then(() => res.status(200).json({ message: "Like ajouté !" }))
      .catch((error) => res.status(400).json({ error }));

    /* Si un utilisateur disike un post */
  } else if (req.body.like === -1) {
    Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { dislikes: 1 }, $push: { usersDisliked: req.body.userId } }
    )
      .then(() => res.status(200).json({ message: "Dislike ajouté !" }))
      .catch((error) => res.status(400).json({ error }));

    /* Si un utilisateur annule son choix */
  } else {
    Post.findOne({ _id: req.params.id }).then((resultat) => {
      if (resultat.usersLiked.includes(req.body.userId)) {
        Post.findOneAndUpdate(
          { _id: req.params.id },
          { $inc: { likes: -1 }, $pull: { usersLiked: req.body.userId } }
        )
          .then(() => res.status(200).json({ message: "like retiré !" }))
          .catch((error) => res.status(400).json({ error }));
      } else if (resultat.usersDisliked.includes(req.body.userId)) {
        Post.findOneAndUpdate(
          { _id: req.params.id },
          { $inc: { dislikes: -1 }, $pull: { usersDisliked: req.body.userId } }
        )
          .then(() => res.status(200).json({ message: "dislike retiré !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    });
  }
};
