import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserName } from "./endpoints/getUserName";
import { getUsersOrder } from "./endpoints/getUsersOrder";
import { getUserType } from "./endpoints/getUserType"
import { getUsersPage } from "./endpoints/getUsersPage"
import { getUserTotal } from "./endpoints/getUserTotal"

app.get("/users", getAllUsers)
app.get("/users/:type", getUserType)
app.get("/username", getUserName)
app.get("/usersorder", getUsersOrder)
app.get("/userpage", getUsersPage)
app.get("/usertotal", getUserTotal)