// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        ": ̗̀➛ 願わくば、この贈り物がいつもあなたに力と希望を与えてくれますように！",      //May this gift always give you strength and hope!
        "いつもお世話になりありがとうございます!",  // Thank you for always taking care of me!
        "ごめんなさい、あなたにお金を使うことができませんでした.", //im sorry i couldnt spent any money on you.
        "それはあなたとの別の年でした!", //its been another year with you! 
        "今年もよろしくお願いします!", //I look forward to having a good relationship with you this year too!
        ": ̗̀➛ 一緒にいない明日があるなら,", //If there's a tomorrow where we won't be together,
        "覚えておかなければならないことがあります.", //there is something to remember.
        "あなたは信じているよりも勇敢で、見た目よりも強い", //You're braver than you believe and stronger than you look
        "あなたが思っているよりも賢いですが、最も重要なことは、", //Smarter than you think, but most importantly,
        "離れていても、ずっと一緒にいます. 𓆩♡𓆪", //Even if we are apart, we are always together.
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        ": ̗̀➛ 願わくば、この贈り物がいつもあなたに力と希望を与えてくれますように！": "./imgs/image1.jpg", //May this gift always give you strength and hope!
        "いつもお世話になりありがとうございます!": "./imgs/image2.jpg", //Thank you for always taking care of me!
        "ごめんなさい、あなたにお金を使うことができませんでした.": "./imgs/image3.jpg", //im sorry i couldnt spent any money on you.
        "それはあなたとの別の年でした!": "./imgs/image4.jpg", //its been another year with you!
        "今年もよろしくお願いします!": "./imgs/image5.jpg", //I look forward to having a good relationship with you this year too!
        ": ̗̀➛ 一緒にいない明日があるなら,": "./imgs/image6.jpg", //If there's a tomorrow where we won't be together,
        "覚えておかなければならないことがあります.": "./imgs/image7.jpg", //there is something to remember.
        "あなたは信じているよりも勇敢で、見た目よりも強い": "./imgs/image8.jpg", //You're braver than you believe and stronger than you look
        "あなたが思っているよりも賢いですが、最も重要なことは、": "./imgs/image9.jpg", //Smarter than you think, but most importantly,
        "離れていても、ずっと一緒にいます. 𓆩♡𓆪": "./imgs/image10.jpg", //Even if we are apart, we are always together.
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "•̩̩͙⊱ 電気を付ける! •̩̩͙⊰", //turn on the light
        play: "•̩̩͙⊱ あまりにも音楽を再生します！ •̩̩͙⊰", //Play music too!
        bannar_coming: "•̩̩͙⊱ うわー、それは何ですか? •̩̩͙⊰", //wow what is that?
        balloons_flying: "•̩̩͙⊱ よし、今から飾ろう!! •̩̩͙⊰", //yay! lets decorate now
        cake_fadein: "•̩̩͙⊱ うわー、いいですね、今すぐケーキを持ってきてください! •̩̩͙⊰", //wow nice, bring me the cake now!
        light_candle: "•̩̩͙⊱ 美味しい！ろうそくに火をつけよう！ •̩̩͙⊰", //delicious! Let's light a candle!
        wish_message: "♡ 今集中!!", //Focus now!!
        story: "✿❀ あなたへの優しい言葉 ❀✿", //kind words for you
    }
};
