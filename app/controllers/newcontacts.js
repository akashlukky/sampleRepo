import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        addTocontact(){
                 var fname=this.get('firstname');
                 var sname=this.get('secondname');
                var email=this.get('emailid');
                var pnum=this.get('phonenumber');
                var Nicname=this.get('nickname');
                var birthday=this.get('birthday');
                var relation=this.get("relation");

    let newContact=this.store.createRecord("contactstoring",{
            fname:fname,
            sname:sname,
            email:email,
            pnum:pnum,
            Nicname:Nicname,
            birthday:birthday,
            relation:relation

           

    });
    newContact.save();
  
    this.setProperties({
        fname:"",
        sname:"",
        email:"",
        pnum:"",
        Nicname:"",
        birthday:"",
        relation:""

    });

        },

    }
});
