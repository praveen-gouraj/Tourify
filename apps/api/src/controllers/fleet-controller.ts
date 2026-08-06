import { FleetModel } from "../models/fleet.js";
import { createCrudController } from "../utils/crud.js";

export const fleetController = createCrudController(FleetModel);
