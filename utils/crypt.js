import bcrypt from "bcrypt";

/**
 * 
 * @param {*} password 
 * @param {*} saltRounds 
 * @returns 
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