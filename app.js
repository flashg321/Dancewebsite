const express = require("express");
const path = require("path");
const { KeyObject } = require("crypto");
// const fs = require("fs"); nahi chahiye abhi is wale k liye
const app = express();
const port = 8000;

//tut 88 variable declared
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port = 8000;

//express specific stuff
app.use('/static', express.static('static'));//for serving static files
app.use(express.urlencoded());

//pug specific stuff
app.set('view engine', 'pug');//set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//set the views directory

//endpoints
app.get('/', (req, res)=>{
    const con = "This is the best content on net";
//     const params = {'title': "This is the best Dance Website",
// "content": con };  pichle me cahhiye tha par ab ye andar eala portion nahi chahiye
const params = {};
res.status(200).render('index.pug', params);
});

// contactUs k liye end point below tut79 4 blow
app.get('/contactUs', (req, res)=>{
    const con = "This is the best content on net";
//     const params = {'title': "This is the best Dance Website",
// "content": con };  pichle me cahhiye tha par ab ye andar eala portion nahi chahiye
const params = {};
res.status(200).render('contactUs.pug', params);
});

//start the server
app.listen(port, ()=> {
    console.log(`The application started successfully at ${port}`)
}); 


//yahan kaara hai define mongoose schema ko 88 2
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

app.post('/contactUs', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item wasnot saved to the database")
    });
});
//88 2 ends

//1. sabse pehle aap ne kya karna hai ki chizo ko samajhna hai ratna nahi hai. or isliye ham references leke chalenge bohot sare jahan se bhi mile hame. or ye npm project hai isiliye sabse pehle app.js file banai hai. or badi hi interesting baat batayi hai sir ne ki css tak ki properties bhi refeerece leke dekhenge or pug ki docuumentation bhi taki hame references lena aaye. kehte aaj yaad hai font weight kya karta hai par kya pata kal ko pata na rahe to ye chize bani rehte hain. isliye hi reference ko hi use karen. pug ki tarah hi express ka bhi reference lenge isliye wo bhi khol lo. or sabse pehle hamne start hi ek code copy karne se ki hai jisse ki exress,fs vagarah import hojaye.terminal khol lete hain ab. taki in sabko install kar sake express vagarah packages ko. uske liye terminal me pehle likho npm init. bas fir pehle ki hi tarah package k name,description author deke kardo package.json vagarah install. fir npm install express kardo. pug ka bhi install asie hi uske baad node_modules bhi aagaya folder.ab kaise pug ko isme leke aaye kaise set karna hai ise express se related kya jruri kaam karne hai wo ya to official documentation se dekhlo inki ya fir sir ne jaise pehle karaya hua vahin se copy paste maarlo ye wale code. sir ne apne last project se copy kara endpoints and start the server wale code ko. par pichle wale me  kuch chize extra thi jinki hame jarurat nahi hai to unhe comment out karte chalenge. is baar port bhi alag rakhenge taki change ho.
//2. ab hamne pug ki documentation khol li. usme main yahi hai ki pug easy banata hai hamare kaam ko or bilkul bhi difficult nahi banata. jo hamne index.pug banayi hai usme kaam karenge ham ab kyunki hmne pug likhna hai ab jo ki hamne views me index.pug bananya hua hai or isme apni html wala kaam karenge. documentation me dhundne par includes me template mila hai or ise dekhne se hi pata chal raha hai ki "indentation" k hisab se chalega. kaafi had tak python ki trah hi code chal raha iska.isme 2 files include karani hai hamne "../static/style.css" and "../static/index.js". or ab thoda sa dekhna ki kaise aaya hai ye likha hua google chrome me and thenn jab aap view source code karoge to dekhoge ki kaise render hua hai aapka code single line me without any styling. sir ne kaha hai ki jo hmari templates hoti hain(yani jo views ka samaan hoga), unme jada likhna nahi hota. or ham jada js and css hi likhenge. ab pug hai actually ek smart html ka way kyunki aapko minimal syntax likhna hai or kaam hota chala jyaega khud hi. isme id class dena sab bohot easy hai. or jab aap likhte rahegne to source code me check karte rehna ki sab aa raha ho sahi se.
//3. point m shuru karte hain apni html pug me likhni. h1 and p ko commnet out kar rahe or aapko pata hi hai ki max html body me hi jati hai to apne navbar vagarah se start karte hai(semantic tags search karke dekh lena chrome ki page structure kaise sahi rakhe). ab jo li likhe hain kyunki hmane inko links banana hai to iske liye documentation se search karo ki pug me aise kaise karte hain. to dhunda kaafi ki list items me kaise sabko links banana hai or khud dhund liya or sir k tareeke se alag. to isse pata chala hai ki doucmentatin ka use karna is very imp. fir section soche ke 3 rakhne hain or pipe character se text likha apni html ka.
//4. bas ab style.css ka kaam shuru.

//tut76 shuru
// 1. #sponsorSection and #ourMission section ki css alg alg  ki hai. ab ham 4 cards banayenge our mission section me. uske liye div.card banalo or usme p likhdo ek.ab style sheet me jake border vagarah dedo. ab kyunki hamne isko card banana hai to isko height dedo or 3 card rakhne hain to width 33% k karib kar dena. baaki margin se control ho jayega ki kaise dikh rhaa ahi. ab 3 baar duplicate krlo index.pug me 3 cards banane k liye. ab ek line m lane k liye display block kardo inko or agar margin padding cahnge karni hai to kardo or inko ek line me le aao.
//tut 76 khatam

// tut77- ab hmne photo or logo lagane hain
//1. navbar me logo daalna hai. to iske ul me ek li daal do.img(src="../static/img/card2.png") (indentation sahi rakhna.). ab image bhoht badi aayi hai to iski styling karte hai. image ki styling m best proerty thi filter:invert wali jisse  black logo white hogya.
//2. ab apni images daalte hain cards me.

//tut78 adding sponsors wali images
// done sab styling thi

//tut79 contact form

//. contact us ka page banayenbe isme. or dusra ham isme template inheritance ke bare me dekhenge. pug documentation me inheritance wlal  dekhna ki kaise karna hai. block or extends se use karte hian ise.vaise jab bhi ye extend idea wala kaam hota hai to iska principal universally same hi hota hia ki karo jada likho kam. yani repititive code ap na llikhe. yani aapka koi bhi page hoga to usme index.pug ki tarah navbar, footer etc. to chahiye hi, to ise kaise achieve karte hain ye dekhenge.
//1. to template inheritance ka basic idea hota hai ki ek base.pug file(template) hoti hai. home.pug and contact.pug or banalo. documentation me base.pug ko index.pug se diya hua hai par wo aapki marji hai jo naam rakhna hai. ab basic template iske liye hamne copy paste kar diya base.pug me. baaki isko ham kaise banayenge wo dekhte hain layout.pug ka usekarke. 
//2. sabse pehle index.pug se doctype html copy paste kardo kyunki hamara document to html hoga hi har page pe. fir title copy paste kardo kyunki wo bhi same reahegea.
//2(a) base.pug me sahi files ki setting ksrlo.or ab home.pug me aajao extends base.pug kardo. extends ka matlb hai ki main base.pug k template ko bhar raha hum home.pug me. to vs code bol raha ki badhiya bhai aap bhar to rahe ho template ko par jo aapka scripts ka block hai base.pug me usme kya bhar rahe ho. to use batate hain ki hamari script hai index.js. 2(b) me dekho kya kara hi home.pug me. aise hi block style me kya daloge to aapko pata hi hai ki css wali script daal do 2(c) me home.pug me. fir home.pug bolega ki aapne base.pug me body content bhi banaya hai to usme kya dalu, to ham 2(d) wala sammaan daal denge isme index.pug se copy karke.2 (e) me footer wala samman bhardo.

//3. ab home.pug ne basically kaha ki ye jo base.pug hai isi ko main serve karunga ya yahin se apna chiz extend karunga ise madde nazar rakhte hue, par jo jo blocks hamne home.pug me hi define kiye hain, unke content ko ham replace kr denge is content se jo hamne yahan likha hai home.pug. to "base.pug" hamara form hai jisme ki sab column jaise name, roll no. ,address etc. all fields bhari hui hain placeholder ki tarah pehle hi or hame ise bas apni details se fill karna hai naki saara form dubara banana hai.

//4. to ab hamen iske faida yahi hua ki baar baar ye bharne ki jarurat nahi hai or siddha contact form me upar ka samaan jo hamne set kiya hai home.pug me use karlo paste kardo. isme bas jo block content hai wo likhdo and done. ab block content se pehle hai navbar hi use paste kardo taki navbar har page pe aajaye jis bhi page p extend lagao. aise hi footer wala portion bhi paste kardo base.pug me. to ab jab ham koi bhi page banayenge to aise hi extend ki help se use bharte chalenge.Note- par vaise ye dhyaan rakhkna ki jo hamari styling hai base.pug ki wo alag stylesheet me rakho jab final banao website aise hi contact.pug ki alag banao stylesheet, home.pug ki alag sheet etc.hlanki kaafi halki file hoti hai css ki to koi jada farak nahi padega agar ek hi sheet me de bhi di saari styling aapne as a begineer. isiliye eg k liye styleContact.css banalo taki contactUs ki styling isme ho.
//5 ab sabse pehle hi contact us likhdo..or styling me text-align center kardo. uske baad form banado. uska action rakhte hain "/contact" filhaal and method "post" or input(type="text" class="myInput" name="name" placeholder="Enter your name"), fir 4 copy kardo unko.to ek hi line me char box aa jayenge. myInput ko styling dedo ab. par ise center nahi kar pa rahe hai. iske liye agar ham is form ko hi display flex kardo to asaani se center l aayenge ise. uske baad bohot saari styling ki hai .btn tak or fir last me apne form ko ek container me daal diya hai jiski ham height width vagarah set kar sake.

// tut 88- ab backend ka kaam shuru is website ka
// 1.ab hamne mngoose ki baat ki thi ki kaise mongoose use ho sakta hi hamare backend me data bhejne k liye. to ab banda jab form me name email etc sab enter kare to data mongo db me pohonch jaye. contactUs.pug me dekhlo ki kya kya naam diye hain fields Key. to ab ham basically post request ko handle karenge in fields k nam ki help se. par usse pehle hame apne mongod ko start krana padega. ye process hai hamari main database ki jo start ho chuki hai or is process ko ham use karne wale hain apne mongodb database ko. npm install mongoose kardo.

//2. mongoose k documentation me jake use karne ka samaan dekhlo. pehle const mongoose declare kardo var karke bhi kar sakte the jaise documentation me tha iski par kyuki ham change nahi karege isko to hamne var ki jagah const kar diya ise.fir mongoose.connect ka use karke apne db se connect karlo. fir hamne port ek select kar liya ki jispe ham saari application use karna chahte hain.ham mongoose ka schema/model banayenge ab yani aapka data kis format me save hoga. sabhi fields likhke string likhdo. Note hamne ye clear kar diya ki agar koi get request marta hai contact us pe to ye form dikha denge usko par agar koi post request marta hai to my data ko save karlo or request.body ka data hame dedo or usko save/store karlo save mehtod ka use karke..