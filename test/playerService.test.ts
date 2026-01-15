import {
    calculateRating,
    getPlayerById,
    Player
} from "../src/services/playerService";

describe("calculateRating", () => {

    it("should calculate rating for a normal player", () => {
        // ARRANGE: set up test data
        const player: Player = {
            id: 1,
            name: "TestPlayer",
            wins: 10,
            losses: 10,
            totalScore: 2000
        };

        // ACT: call the function under test
        const rating = calculateRating(player);

        // ASSERT: verify the result
        expect(rating).toBe(150);
    });

    it("should return 0 when player has 0 total games", () => {
        // ARRANGE
        const player: Player = {
            id: 2,
            name: "NoGames",
            wins: 0,
            losses: 0,
            totalScore: 0
        };

        // ACT
        const rating = calculateRating(player);

        // ASSERT
        expect(rating).toBe(0);
    });

    it("should calculate rating correctly when player has only wins", () => {
        // ARRANGE
        const player: Player = {
            id: 3,
            name: "OnlyWins",
            wins: 5,
            losses: 0,
            totalScore: 500
        };

        // ACT
        const rating = calculateRating(player);

        // ASSERT
        expect(rating).toBe(200);
    });

    it("should round rating to 2 decimal places", () => {
        // ARRANGE
        const player: Player = {
            id: 99,
            name: "TwoDecimalTest",
            wins: 3,
            losses: 4,
            totalScore: 1000
        };

        // ACT
        const rating = calculateRating(player);

        // ASSERT
        expect(rating).toBe(185.71);
    });
});

describe("getPlayerById", () => {
    it("should return a player when the ID exists", () => {
        // ARRANGE
        const existingId = 1;

        // ACT
        const player = getPlayerById(existingId);

        // ASSERT: player is found and has correct data
        expect(player).toBeDefined();
        expect(player?.id).toBe(1);
        expect(player?.name).toBe("ShadowStrike");
    });

    it("should return undefined when the player does not exist", () => {
        // ARRANGE

        // ACT: attempt to find the player
        const player = getPlayerById(999);

        // ASSERT: no player is found
        expect(player).toBeUndefined();
    });
});