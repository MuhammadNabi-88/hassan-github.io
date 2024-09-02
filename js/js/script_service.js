function myFunction() {
   alert("I am an alert box!");
 }

let languageContent = {
    "en": {
      "text11": "luxus investmnt ",
       "text1": "This is a sample content test is changing now",
       "text2": " Invfestment <br> Service <br> Providers",
       "text3": " About Us",
      //  "text4": " 44Engergy ntent test is now",
      //  "language": "English is englich",
      //  "BrandName": "TutorialsPoint jobooo dod",
      //  "Programming_lang": "JavaScript",
       "paragrap1": "It is a long established fact that a reader will be distracted by the readable content a page when looking at its layout. The point of using Lorem",
       "paragrap2": "In the study of heat transfer, Newton's law of cooling is a physical law which states that the rate of heat loss of a body is directly proportional to the difference in the temperatures between the body and its environment",
      },
    "german": {
      "text11": "germnan language",
       "text1": "Ceci est un contenu d'exemple",
       "text2": " German text Engergy ntent test is now",
       "text3": "Über uns ",
      //  "text4": " 44 French 4 Engergy ntent test is now",
      //  "language": "Français",
      //  "BrandName": "TutorialsPoint",
      //  "Programming_lang": "JavaScript",
       "paragrap1": "Es ist eine seit langem bekannte Tatsache, dass ein Leser beim Betrachten des Layouts durch den lesbaren Inhalt einer Seite abgelenkt wird. Einsatzort",
       "paragrap2": "Bei der Untersuchung der Wärmeübertragung ist das Newtonsche Abkühlungsgesetz ein physikalisches Gesetz, das besagt, dass die Geschwindigkeit, mit der ein Objekt Wärme verliert, direkt proportional zum Temperaturunterschied zwischen dem Objekt und seiner Umgebung ist."    ,},
    "arabisch": {
      "text11": " استثمار فاخر",
       "text2": "مقدمو خدمات الاستثمار",
       "text3": "معلومات عنا",
      //  "text4": " 44 Spanich 4 Engergy ntent test is now",
      //  "language": "Español",
      //  "BrandName": "TutorialsPoint",
      //  "Programming_lang": "JavaScript",
       "paragrap1": "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى <br>المقروء للصفحة سوف يشتت انتباه <br>القارئ عند النظر إلى تخطيطها. نقطة الاستخدام",
       "paragrap2": "في دراسة انتقال الحرارة، قانون نيوتن للتبريد هو قانون فيزيائي ينص على أن معدل فقدان الجسم للحرارة يتناسب طرديًا مع الفرق في درجات الحرارة بين الجسم وبيئته."    ,
      }
 }
 function swithcLang(lang) {
    for (let key in languageContent[lang]) {
       document.getElementById(key).innerHTML = languageContent[lang][key];
    }
 }
