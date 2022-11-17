import bcrypt from "bcrypt";

const hashedPassword = async (password, saltRounds = 10) => {
   
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
    hashedPassword,
    comparePasswords 
};