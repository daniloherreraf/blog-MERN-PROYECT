import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

export const createPost = async (req, res) => {
  const { tittle, description } = req.body;
  const newPost = new Post({ tittle, description });
  await newPost.save();
  return res.json(newPost);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(post);
};

export const deletePost = async (req, res) => {
  const postRemoved = await Post.findByIdAndDelete(req.params.id);

  if (!postRemoved) return res.sendStatus(404);

  return res.sendStatus(204);
};

export const getByIdPost = (req, res) => res.send('getting a post');
