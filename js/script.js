var english = document.getElementById("en"),
  japanese = document.getElementById("jp"),
  chinese = document.getElementById("cn"),
  change_text = document.getElementById("translate");
// declare some variables to catch the various HTML elements

english.addEventListener("click", function() {
    change(english, japanese, chinese);
  }, false
);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

japanese.addEventListener("click", function() {
    change(japanese, english, chinese);
  }, false
);

chinese.addEventListener("click", function() {
    change(chinese, english, japanese);
  }, false
);

function change(lang_on, lang_off1, lang_off2) {
  if (!lang_on.classList.contains("current_lang")) {
    // if the span that the user clicks on does not have the "current_lang" class
    lang_on.classList.add("current_lang");
    // add the "current_lang" class to it
    lang_off1.classList.remove("current_lang");
    lang_off2.classList.remove("current_lang");
    // remove the "current_lang" class from the other span
  }

  if (lang_on.innerHTML == "EN") {
    change_text.classList.add("english");
    change_text.classList.remove("chinese");
    change_text.classList.remove("japanese");
    change_text.innerHTML = "Which are already on the verge of movement due to rainfall, melting snow, changes in water levels, changes in groundwater, earthquakes, volcanic activity, disturbance from human activities, or a combination of these factors.”";
  }
  
  else if (lang_on.innerHTML == "German") {
    change_text.classList.add("chinese");
    // first line adds the corrent language class to the text
    change_text.classList.remove("english");
    // second and third line removes the other language classes
    // this allows you to apply CSS that is specific to each language
    change_text.classList.remove("japanese");
    change_text.innerHTML = "Die aufgrund von Regenfällen, schmelzendem Schnee, Änderungen des Wasserstands, Änderungen des Grundwassers, Erdbeben, vulkanischer Aktivität, Störungen durch menschliche Aktivitäten oder einer Kombination dieser Faktoren bereits am Rande der Bewegung stehen.";
    // fourth line is where you key in the text that will replace what is currently on-screen
  }
  
  else if (lang_on.innerHTML == "Arabic") {
    change_text.classList.add("japanese");
    change_text.classList.remove("english");
    change_text.classList.remove("chinese");
    change_text.innerHTML = " التي تكون بالفعل على وشك الحركة بسبب هطول الأمطار، وذوبان الثلوج، والتغيرات في مستوى المياه، والتغيرات في المياه الجوفية، والزلازل، والنشاط البركاني، والاضطرابات الناجمةعن الأنشطة البشرية، أو أي مزيج من هذه الع";
  }
}