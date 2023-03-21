import { User, USER_ROLES } from "../../src/model/user";

export const userMock = new User(
   "id_mock_admin",
   "astrodev",
   "astrodev@gmail.com",
   USER_ROLES.ADMIN
)