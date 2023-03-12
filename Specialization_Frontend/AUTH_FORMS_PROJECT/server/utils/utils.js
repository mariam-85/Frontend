import bcrypt from "bcrypt";

const hashPassword = password => {
    const salt = bcrypt.genSaltSync();// min 4, 
    return bcrypt.hashSync(password, salt)
};

const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

export { hashPassword, comparePassword };