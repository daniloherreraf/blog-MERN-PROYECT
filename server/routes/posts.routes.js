import { Router } from 'express';
const router = Router();

router.get('/posts', (req, res) => res.send([]));
router.post('/posts', (req, res) => res.send('New post created'));
router.put('/posts', (req, res) => res.send('Updating a post'));
router.delete('/posts', (req, res) => res.send('deleting a post'));
router.get('/posts/:id', (req, res) => res.send('getting a post'));

export default router;
