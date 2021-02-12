import Contact from "../entities/contact";
/**
 * A simple CRUD controller for contacts
 */

// create a single contact
const createContact = async (req, res) => {
  const {
    firstname,
    lastname,
    companyname,
    address,
    emailaddress,
    telephone,
    mobile,
    faxnumber,
  } = req.body;
  try {
    const contact = new Contact({
      firstname,
      lastname,
      companyname,
      address,
      emailaddress,
      telephone,
      mobile,
      faxnumber,
    });
    const saveContact = await contact.save();
    return res.status(201).json({
      saveContact,
      message: "Contact Address created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
// get all contacts for a user
const getAllContact = async (req, res) => {
  try {
    const AllContact = await Contact.find();
    return res.status(200).json({
      AllContact,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get a single contact
const getAContact = async (req, res) => {
  try {
    const oneContact = await Contact.findById(req.params._id);
    if (!oneContact) {
      return res.status(404).json({
        message: "Contact address not found",
      });
    }
    return res.status(200).json({
      oneContact,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        message: `Contact not found with id ${req.params._id}`,
      });
    }
    return res.status(500).json({
      message: `Error retrieving note with id ${req.params._id}`,
    });
  }
};


// update a single contact
const updateContact = async (req, res) => {
  try {
    const updateContact = await Contact.findByIdAndUpdate(
      req.params._id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        companyname: req.body.companyname,
        address: req.body.address,
        emailaddress: req.body.emailaddress,
        telephone: req.body.telephone,
        mobile: req.body.mobile,
        faxnumber: req.body.faxnumber,
      },
      {
        new: true,
      }
    );
    if (!updateContact) {
      return res.status(404).jsob({
        message: `Contact not found with _id ${req.params._id}`,
      });
    }
    return res.status(200).json({
      updateContact,
      message: "Contact successfully updated",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        message: `Contact not found with _id ${req.params._id}`,
      });
    }
    return res.status(500).json({
      message: `Error updating Contact with _id  ${req.params._id}`,
    });
  }
};
// remove a single contact
const removeContact = async (req, res) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete(req.params._id);
    if (!deleteContact) {
      return res.status(404).jsob({
        message: `Contact not found with _id ${req.params._id}`,
      });
    }
    return res.status(200).json({
      message: "Contact successfully deleted",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        message: `Contact not found with _id ${req.params._id}`,
      });
    }
    return res.status(500).json({
      message: `Could not delete Contact with _id  ${req.params._id}`,
    });
  }
};

export default {
  createContact,
  getAllContact,
  getAContact,
  updateContact,
  removeContact,
};
