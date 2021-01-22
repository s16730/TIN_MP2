import LocalStrategy from "passport-local";
import { User } from "@/entities/User"
import { getRepository } from "typeorm/index";
import { UserService } from "@services/UserService";
import { PassportStatic } from "passport";

// @ts-ignore
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { passportConfig } from "@/config/passportConfig";


const passportSetup = (passport: PassportStatic) => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    const user = (await UserService.instance.getUsers({ id }))[0];

    done(null, user);
  })

  let opts = {} as any;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer');
  opts.secretOrKey = passportConfig.secret;
  passport.use(new Strategy(opts, function (jwt_payload: any, done: VerifiedCallback) {
    UserService.instance.getUsers({ email: jwt_payload.email }).then((users) => {
      if (users[0]) {
        return done(null, users[0]);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    }).catch(err => done(err, false))
  }));
}


export default passportSetup;
