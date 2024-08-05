const header = () => {
  return `
    <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Bootstrap demo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <style>
                .card {
                    margin: 10px;
                }
                html, body {
                    height: 100%;
                    margin: 0;
                }
                .container-fluid {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .top-section {
                    flex: 2;
                    background-color: #f8f9fa;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .bottom-section {
                    flex: 3;
                    background-color: #e9ecef;
                } 
                .intro-text {
                    text-align: center;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    max-width: 80%;
                }   
            </style>
            
            </head>
            
    `;
};

const index1 = () => {
    let h2 = "안녕하세요, 저희 팀을 소개합니다!";
    let p = "우리는 열정적이고 창의적인 개발자들로 구성된 팀입니다. 함께 성장하고 혁신적인 솔루션을 만들어가고 있습니다.";
    let list = `<body>
        <div class="container-fluid">
        <div class="top-section d-flex justify-content-center align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="팀 이미지">  
        <div class="intro-text">
            <h2>${h2}</h2>
            <p>${p}</p>
          </div>
      </div>
      <div class="bottom-section d-flex justify-content-center align-items-center">
      `;

    let teamlist = [
        {name: "이승환", position: "팀장", mbti: "ISTJ", hobby: "코딩", link: "https://www.naver.com", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
        {name: "류재준", position: "부팀장", mbti: "INTP", hobby: "코딩", link: "https://www.naver.com", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
        {name: "문진수", position: "팀원", mbti: "ISTP", hobby: "코딩", link: "https://www.naver.com", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
        {name: "허석재", position: "팀원", mbti: "INFP", hobby: "코딩", link: "https://www.naver.com", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
        {name: "김형구", position: "팀원", mbti: "ISTP", hobby: "코딩", link: "https://www.naver.com", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
    ]

    
    for(let i = 0; i < teamlist.length; i++){
        list +=`
        <div class="card" style="width: 18rem">
          <a href="${teamlist[i].link}">
              <img src="${teamlist[i].img}" class="card-img-top" alt="..." />
          </a>
          <div class="card-body">
            <h5 class="card-title">${teamlist[i].name}</h5>
            <p class="card-text">
              직급: ${teamlist[i].position}
            </p>
            <p class="card-text">
              MBTI: ${teamlist[i].mbti}
            </p>
            <p class="card-text">
              자기 소개: ${teamlist[i].hobby}
            </p>
          </div>
        </div>
        `;
    }

    list += `
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
    `;

  return list;
};

const end = () => {
    return `
    </html> 
    `;
}       

const main = () => {
    return header() + index1() + end();
}

module.exports = main;