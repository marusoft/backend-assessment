const validateContact = (req, res, next) => {
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
  if (
    !firstname ||
    !lastname ||
    !companyname ||
    !address ||
    !emailaddress ||
    !telephone ||
    !mobile ||
    !faxnumber
  ) {
    return res.status(400).json({
      error: "Please supply all the fields",
    });
  }
  next();
};
export default validateContact;
