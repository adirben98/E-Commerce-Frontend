import axios from "axios";

const BASE_URL = "http://localhost:3000/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YmRmNTBiOGMxYmJlMGVmYWU1NTU5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MDczODk4MSwiZXhwIjoxNzQwOTk4MTgxfQ._xiEp2X7YEwZMzqKA410ZJR15Ot4DtNwjRA40aiDOrE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `bearer ${TOKEN}` },
});
