function introduction(name = "Aki") {
  if (name === name.toUpperCase()) {
    return `Hi, my name is charles`
  } else 
    return `Hi, my name is ${name}.`;
}


function introductionWithLanguage(name = "Aki", language = "Ember.js") {
    if (name === name.toLowerCase()) {
        return `hi`
    } else 
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
   if (name === name) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
   } else 
    return `hi`
   }

   console.log(introductionWithLanguageOptional())