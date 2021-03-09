const scriptName = "Milk Choco";


const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init('3ec83a6de844b575e244d3b3b5af0ad0'); //자스키
Kakao.login('ckrgksqns333@gmail.com','wlsWkckrgksqns123'); //아디•비번

var m = [];


const allsee = "\u200d".repeat(500);

const n = "\n";
const nn = "\n".repeat(2);

//밀크초코 - 네이버api
let milksite = "https://apis.naver.com/cafe-web/cafe2/ArticleList.json?search.clubid=28993811&search.queryType=lastArticle&search.menuid=137&search.page=1&search.perPage=50&ad=true";




function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if (msg == ".내이름") replier.reply(sender +"!");
  
  if (msg.startsWith(".레벨")) {
  try {
    //replier.reply(m);
    
Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 48199,
                  "template_args" : {
                    SizsX: 400,
                    SizeY: 400,
                    ImgLink: "/0Chd7rN/image.jpg",
                    Timetable: "https://i.ibb.co/0Chd7rN/image.jpg"
                 }
                 }, "custom");

} catch(e) {
  replier.reply(e);
}
}
  
  if (msg.startsWith(".클랜레벨")) {
  try {
    //replier.reply(m);
    
Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 48199,
                  "template_args" : {
                    SizsX: 800,
                    SizeY: 800,
                    ImgLink: "/TKnKqDg/image.jpg",
                    Timetable: "https://i.ibb.co/TKnKqDg/image.jpg"
                 }
                 }, "custom");

} catch(e) {
  replier.reply("일시적인 오류입니다!\n컴파일을 완료하였습니다.");
  Api.reload("Milk Choco");
}
}

  
  if (room == "카톡봇 테스트방" && sender == "방장봇") {
    try {
    switch (msg) {
      case "낮 12시":
        replier.reply("");
        break;
      case "오후 5시":
        replier.reply("사탕칼리버 클랜방","오후 5시!\n클전할 시간이에요~");
        break;
    }
    } catch(e) { replier.reply(""); }
} 



    if (msg == ".패치노트 밀초") {
      var date = new Date();
      var Y = String(date.getFullYear());
      var M = String(date.getMonth()+1);
      if (M.length == 1) M = "0" + M;
      var D = String(date.getDate());
      if (D.length == 1) D = "0" + D;
      
        var main = JSON.parse(org.jsoup.Jsoup.connect(milksite).ignoreContentType(true).ignoreHttpErrors(true).get().text()).message.result.articleList;
    var sum = [];
    for (i=0; i<10; i++) {
      var milk = main[i].item;
      sum.push(""
        +"["+milk.subject+"]" +n
        +"writer: "+milk.writerNickname+"("+main[i].item.writerId+")" +n
        +"views "+milk.readCount
        +", comment "+milk.commentCount
        +", like "+milk.likeItCount +n
        +"link: https://m.cafe.naver.com/milkchoko1/"+main[i].item.articleId +n
      );
    }
    replier.reply(
        "최근 10개의 패치노트!"+n+
        "("+Y+"."+M+"."+D+") 기준   "+allsee +n+ sum.join("\n"));
    sum = [];
  } 
    
    
    

  



}
