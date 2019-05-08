var request = require("request");

describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
        request.get("http://localhost:3000/", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
    it("Body", () => {
        expect(data.body).toBe("The Polyglot Developer");
    });
});
