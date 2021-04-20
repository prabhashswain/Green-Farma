const homeController = (req,res)=>{
    return res.render('Home/home',{'title':'home'});
}

module.exports = {
    homeController
}