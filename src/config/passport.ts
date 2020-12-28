import LocalStrategy from "passport-local";
import { User } from "@/entities/User"
import { getRepository } from "typeorm/index";
import { UserService } from "@services/UserService";
import { PassportStatic } from "passport";

const passportSetup = (passport: PassportStatic) => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    const user = (await UserService.instance.getUsers({ id }))[0];

    done(null, user);
  })


  passport.use(
    "local",
    new LocalStrategy.Strategy({
        usernameField: "login",
        passwordField: "password",
      }, async (email, password, done) => {
      let user = (await UserService.instance.getUsers({
          email
        }))[0];

        if (!user || !user.isPasswordValid(password)) {
          return done(null, false, { message: "Nieprawidłowa nazwa użytkownika lub hasło." });
        } else {
          return done(null, user);
        }
      }
    )
  )
}


export default passportSetup;
