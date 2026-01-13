import express, { Express,Request,Response } from "express";

const app: Express = express();

interface Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;

}

const players: Player[] = [
    {
        id: 1,
        name: "ShadowStrike",
        wins: 15,
        losses: 5,
        totalScore: 28500

    },
    {
        id: 2,
        name: "NoobMaster",
        wins: 3,
        losses: 12,
        totalScore: 4200

    },
    {
        id: 3,
        name: "ProGamer99",
        wins: 0,
        losses: 0,
        totalScore: 0

    }

]

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});
export default app;