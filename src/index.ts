import { Map } from "./Map";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const gMap = new Map("gMap");

gMap.addMarkerForUser(user);
gMap.addMarkerForUser(company);
