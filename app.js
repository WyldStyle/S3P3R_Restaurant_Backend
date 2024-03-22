import express from 'express'
import restaurantRouter from "./routes/routes_3.json"
const app = express();

app.use(express.json());

// app.use('/hotels',hotelRoutes);
// app.use('/users',userRoutes);
// app.use('route')

app.use("/restaurant/meals",restaurantRouter)
app.get("/",(req,res)=>{
  const data = {
    key: "Yo! Hello World"
  }
  res.status(200).json(data);
})
export default app