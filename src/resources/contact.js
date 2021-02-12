import Contact from "../controllers/contact";
import verifyToken from "../utils/token.verify";
import contactValidation from "../middleware/contact.validate"

module.exports = (app) => {
  app.route("/contact/createContact").post(contactValidation, verifyToken, Contact.createContact);
  app.route("/contact/getAllContact").get(verifyToken, Contact.getAllContact);
  app.route("/contact/getAContact/:_id").get(verifyToken, Contact.getAContact);
  app.route("/contact/updateContact/:_id").put(contactValidation, verifyToken, Contact.updateContact);
  app
    .route("/contact/removeContact/:_id")
    .delete(verifyToken, Contact.removeContact);
};
