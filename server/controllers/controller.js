
async function addToWaitlist(req,res)
{
    try{
        const email = req.body.email;
        //dodaj usera u bazu
        return res.status(200).json("Nice")
    }catch(e){
        res.status(200).json("Not nice")
    }
}

module.exports={
    addToWaitlist
}