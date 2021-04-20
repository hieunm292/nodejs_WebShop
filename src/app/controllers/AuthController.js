class AuthController{
    login(req, res,next){
        res.render('me/login')

    }
}

module.exports=new AuthController()