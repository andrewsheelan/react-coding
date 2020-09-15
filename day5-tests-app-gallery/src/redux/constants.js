export const HOST = ["test", "development"].includes(process.env.NODE_ENV)
  ? "http://localhost:9000"
  : "https://picsum.photos/";
