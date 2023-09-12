const mongoose = require('mongoose');   //1. mongoose 모듈 가져오기
//const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({  //2. 가져온 mongoose 모듈을 이용해서 Schema를 생성한다. 
  				      //3. 그리고 이 안에서 필드들을 작성한다.
    name: {
        type : String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //입력한 글에서 스페이스를 없애주는 역할
        unique: 1 //이메일은 유니크 햇으면 좋겠으니까 똑같은 이메일을 쓰지 못하도록 한다.
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role : { 
        type: Number, //ex) number가 1이면 관리자, 0이면 일반유저
        default: 0//만약 임의로 role을 지정하지 않는다면, default로 0을 주겠다.
    },
    image: String, //✨ object를 사용하지 않고, 그냥 이렇게도 작성해줄 수도 있다.
    token: {  //토큰을 이용해서 유효성 관리
        type: String
    },
    tokenExp: {  //토큰이 사용될 수 있는 기간
        type: Number
    }
})

//4. 생성한 Schema를 모델로 감싸주기
const User = mongoose.model('User', userSchema)   //Schema를 모델로 감싸준다고 했었는데 그게 이거다!
//✨ 모델의 이름이 User이고, mongoose.model(이 모델의 이름을 적어주고(='User'), 스키마를 여기에 넣어준다(='userSchema'))


//5. 만든 모델을 다른 파일에서도 쓸 수 있도록 export 해주기
module.exports = { User }  //마지막으로 할 일은! 이 User를(= 이 모델을) 다른 파일에서도 쓸 수 있도록 export 해주는거다🙂