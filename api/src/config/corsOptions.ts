const whiteListed = process.env.FRONT_END_URL;
//if whiteListd is comma seperate diffirent values in of domain
// for example http://localhost:5173,https://thoughts-9s85.onrender.com
//const whiteListed : string[] = process.env.FRONT_END_URL?.split(',') || [];

export const corsOptions = {
  credentials: true,
  origin: whiteListed,
  methods: ["GET", "PUT", "POST", "DELETE"],
};
