import { BookingModel } from "../models/booking.js";
import { createCrudController } from "../utils/crud.js";

export const bookingController = createCrudController(BookingModel);
