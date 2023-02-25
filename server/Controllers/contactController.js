const sendEmail=require('../utils/sentEmail')


 const contact_controller=async(req,res)=>{

    try {
        const option= {
            name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
        };

        //calling send mail function.
        
      const d= await sendEmail(option);
    
     console.log(d);
    
        res.status(201).json({
            success:true
        }) 
    } catch (error) {
        res.status(201).json({
            success:false
        }) 
    }
}

module.exports=contact_controller