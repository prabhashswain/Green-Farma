const signupController = (req,res)=>{
    return res.render('auth/signup',{'title':'signup'})
}
module.exports = {
    signupController
}