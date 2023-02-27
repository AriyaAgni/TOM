import express from 'express';
const router = express.Router();

import {DisplayMovieList}from "../Controllers/movie-list";

/* temp*/
router.get('/movie-list',DisplayMovieList);

export default router;