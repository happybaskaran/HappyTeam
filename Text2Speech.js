const say = require('say')
let voice = 0

let sayAll = (voices)=>{
  let v = voices[voice]
  //console.log(v.voice)
  say.speak(v.text, v.voice, 1, (err) => {
    if (err) {
      console.error(err)
    }
    if (voice >= voices.length) {
      process.exit(0)
    }
  })
}
module.exports.sayAll = sayAll
