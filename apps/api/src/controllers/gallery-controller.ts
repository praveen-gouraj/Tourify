import { GalleryModel } from "../models/gallery.js";
import { createCrudController } from "../utils/crud.js";

export const galleryController = createCrudController(GalleryModel);
