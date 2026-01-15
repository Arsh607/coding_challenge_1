import express, { Express, Request, Response } from "express";

import {
    getAllPlayers,
    getPlayerById,
    calculateRating
} from "./services/playerService";

const app: Express = express();

app.get("/api/v1/health", (req: Request, res: Response) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/players", (req: Request, res: Response) => {
    const players = getAllPlayers();

    res.json({
        players,
        count: players.length,
    });
});

app.get("/api/v1/players/:id", (req: Request<{ id: string }>, res: Response) => {
    const playerID = parseInt(req.params.id);
    const player = getPlayerById(playerID);

    if (!player) {
        return res.status(404).json({ error: "Player not found." });
    }

    res.json(player);
});

app.get("/api/v1/players/:id/rating", (req: Request<{ id: string }>, res: Response) => {
    const playerID = parseInt(req.params.id);
    const player = getPlayerById(playerID);

    if (!player) {
        return res.status(404).json({ error: "Player not found." });
    }

    const rating = calculateRating(player);

    res.json({
        playerId: player.id,
        name: player.name,
        rating
    });
});

export default app;