export function whatsapp(name="test",email="test",phone="test",date="test",message="test"){
   
     
    var url = "https://wa.me/966502699023?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Date :* "+date+"%0a"
    +"*Message :* "+message;
     
    window.open(url,'_blank').focus();
    }