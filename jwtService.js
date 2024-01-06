import jwt from "jsonwebtoken";
export const getToken = async (payload) => {
  try {
    const token = await new Promise((resolve, reject) => {
      jwt.sign(payload, "jwt_124", { expiresIn: "5 days" }, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });

    return token;
  } catch (err) {
    console.log(err.message);
  }
};
