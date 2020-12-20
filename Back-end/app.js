const express=require("express")
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const cors=require('cors')
const cookieParser=require("cookie-parser")
const multer = require("multer");
const nodemailer=require('nodemailer')

const HttpError=require("./models/http-error")
const router = express.Router();
const userRoute=require("./routes/User-route")

const EfillingRoute=require("./routes/EFilling-routes");
const EmailRoute=require("./routes/Email-routes")


const recordRoute=require("./routes/caserecord");
const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
app.use("/api/record",recordRoute)
app.use("/api/users",userRoute)
app.use("/api/lawyer",EfillingRoute)
//app.use("/api",EmailRoute)



app.use('/public', express.static('public'));

//notifying email

app.post("/api/mail",(req,res)=>{
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail=`
        <h3>Contact detail</h3>
        <ul>
        <li>Name:${req.body.name}</li>
        <li>Email:${req.body.email}</li>
        <li>To:${req.body.to}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `
let trasporter=nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'muqaddasshaaban@gmail.com',
        pass: 'vejulrhditiysqds'
    }
})
let mailOption={
    from:"muqaddasshaaban@gmail.com",
    to:req.body.to,
    // to:"horainnoor735@gmail.com,ahmadali280298@gmail.com",
    replyTo:"muqaddasshaaban@gmail.com",
    subject:"New message",
    text:req.body.message,
    html:htmlEmail

}
trasporter.sendMail(mailOption,(err,info)=>{
    if(err){
        return console.log(err);
    }
    console.log("Msg sent")
    console.log("Msg url:%s",nodemailer.getTestMessageUrl(info()))
})

    })
  
})






//unknwn route
app.use((req,res,next)=>{
    const error=new HttpError("could not found such route",404);

    throw error;

})

//error occured
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);

    }
    res.status(error.code || 500)
    res.json({message:error.message || 'An unknow error occured'})
    
})
//testing


/////////////////////////////////////////////////


//creating db connection
mongoose.connect('mongodb+srv://muqaddas123:pr8x7n39jMK8wORp@cluster0.48lgo.mongodb.net/ECourt?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Isolated%20Edition&ssl=true')
.then(()=>{
    app.listen(2000);
}).catch(()=>{
    console.log("unable to connect");
})

