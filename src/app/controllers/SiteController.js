class SiteController{

    //GET/
    index(req, res){ 
        res.render('home');
    }

    //GET/search
    search(req, res){
        console.log(res.query);
        res.render('search');
    }
}

module.exports=new SiteController;
