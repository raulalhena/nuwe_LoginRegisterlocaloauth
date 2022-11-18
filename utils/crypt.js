import bcrypt from "bcrypt";

/**
 * Encription the password from the user
 * @param {*} password 
 * @param {*} saltRounds 
 * @returns hashed password
 */

const hashingPassword = async (password, saltRounds = 10) => {
   
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, salt);

        return pass;
    }catch(err){
        console.log(err);
    }

}

/**
 * Compare the password from user with the password stored in DB
 */

const comparePasswords = async (password, hash) => {
   
    try{
         return await bcrypt.compare(password, hash);
    }catch(err){
        console.error(err);
    }

}

export { 
    hashingPassword,
    comparePasswords 
};