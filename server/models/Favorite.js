const S = require("sequelize");
const db = require("../db");

class Fav extends S.Model {}

Fav.init(
  {
    Title: { type: S.STRING },
    Year: { type: S.INTEGER },
    Poster: { type: S.STRING },
    Type: { type: S.STRING },
    imdbID: { type: S.STRING },
    owner: { type: S.INTEGER },
  },
  { sequelize: db, modelName: "fav" }
);

module.exports = Fav;
