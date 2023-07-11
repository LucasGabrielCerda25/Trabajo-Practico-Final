

window.onload = function() {
    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");
    var timer = document.querySelector(".timer"); 
    
    var valuesToTrigger = {
      Kanji: [
        { verse: [{ word: "りん" }, { word: "ご" }, { word: "は" }, { word: "浮" }, { word: "かんだ" }, { word: "お" }, { word: "空" }, { word: "に" }], 
        displayTime: 430, 
        eraseTime: 9100 },
        {
          verse: [
            { word: "りん" }, { word: "ご" }, { word: "は" }, { word: "落" }, { word: "っこちた" }, { word: "地" }, { word: "べ" }, { word: "た" }, { word: "に" }],
          displayTime: 9530,
          eraseTime: 8580
        },
        {verse: [{ word: "星" }, { word: "が" }, { word: "生まれて" }],
          displayTime: 18110,
          eraseTime: 4640
        },
        {verse: [{ word: "歌" }, { word: "が" }, { word: "生まれて" }],
          displayTime: 22750,
          eraseTime: 4640
        },
        {verse: [{ word: "ルル" }, { word: "ア" }, { word: "メル" }, { word: "は" }, { word: "笑" }, { word: "っ" }, { word: "た" }, { word: "常" }, { word: "しえと" }],
          displayTime: 27390,
          eraseTime: 8970
        },
        {verse: [{ word: "星が" }, { word: "キ" }, { word: "スし" }, { word: "て" }],
          displayTime: 36810,
          eraseTime: 4150
        },
        {verse: [{ word: "歌" }, { word: "が" }, { word: "眠" }, { word: "って" }],
          displayTime: 41260,
          eraseTime: 4660
        },
        {verse: [{ word: "か" }, { word: "え" }, { word: "る" }, { word: "とこは" }, { word: "ど" }, { word: "こでし" }, { word: "ょう" }],
          displayTime: 46570,
          eraseTime: 8420
        },
        {verse: [{ word: "か" }, { word: "え" }, { word: "る" }, { word: "とこは" }, { word: "ど" }, { word: "こでし" }, { word: "ょう" }],
          displayTime: 55800,
          eraseTime: 8940
        },
        {verse: [{ word: "りん" }, { word: "ご" }, { word: "は" }, { word: "落" }, { word: "っこちた" }, { word: "地" }, { word: "べ" }, { word: "た" }, { word: "に" }],
          displayTime: 65040,
          eraseTime: 8720
        },
        {verse: [{ word: "りん" }, { word: "ご" }, { word: "は  " }, { word: "浮" }, { word: "かんだ" }, { word: "お" }, { word: "空" }, { word: "に" }],
          displayTime: 74426,
          eraseTime: 9590
        }
      ],
      Romaji: [
        { verse: [{ word: "Rin" }, { word: "go " }, { word: "wa " }, { word: "u" }, { word: "kanda " }, { word: "o" }, { word: "sora " }, { word: "ni" }], 
          displayTime: 430, 
          eraseTime: 9100 },
        {
          verse: [
            { word: "Rin" }, { word: "go " }, { word: "wa " }, { word: "o" }, { word: "kkochita " }, { word: "ji" }, { word: "be" }, { word: "ta " }, { word: "ni" }],
          displayTime: 9530,
          eraseTime: 8580
        },
        {verse: [{ word: "Hoshi " }, { word: "ga " }, { word: "umarete " }],
          displayTime: 18110,
          eraseTime: 4640
        },
        {verse: [{ word: "uta " }, { word: "ga " }, { word: "umarete " }],
          displayTime: 22750,
          eraseTime: 4640
        },
        {verse: [{ word: "Ruru " }, { word: "a" }, { word: "meru " }, { word: "wa " }, { word: "wa" }, { word: "ra" }, { word: "tta " }, { word: "toko" }, { word: "shie to" }],
          displayTime: 27390,
          eraseTime: 8970
        },
        {verse: [{ word: "Hoshi ga " }, { word: "ki" }, { word: "su shi" }, { word: "te" }],
          displayTime: 36810,
          eraseTime: 4150
        },
        {verse: [{ word: "uta " }, { word: "ga " }, { word: "ne" }, { word: "mutte" }],
          displayTime: 41260,
          eraseTime: 4660
        },
        {verse: [{ word: "Ka" }, { word: "e" }, { word: "ru " }, { word: "toko wa " }, { word: "do" }, { word: "ko desh" }, { word: "ō" }],
          displayTime: 46570,
          eraseTime: 8420
        },
        {verse: [{ word: "Ka" }, { word: "e" }, { word: "ru " }, { word: "toko wa " }, { word: "do" }, { word: "ko desh" }, { word: "ō" }],
          displayTime: 55800,
          eraseTime: 8940
        },
        {verse: [{ word: "Rin" }, { word: "go " }, { word: "wa " }, { word: "o" }, { word: "kkochita " }, { word: "ji" }, { word: "be" }, { word: "ta " }, { word: "ni" }],
          displayTime: 65040,
          eraseTime: 8720
        },
        {verse: [{ word: "La " }, { word: "manzana " }, { word: "flotaba " }, { word: "en " }, { word: "el " }, { word: "firmamento." }],
          displayTime: 74426,
          eraseTime: 9590
        }
      ],
      Translated: [
        { verse: [{ word: "La " }, { word: "manzana " }, { word: "flotaba " }, { word: "en " }, { word: "el " }, { word: "firmamento." }], 
          displayTime: 430, 
          eraseTime: 9100 },
        {
          verse: [
            { word: "La " }, { word: "manzana " }, { word: "se " }, { word: "estrelló " }, { word: "en " }, { word: "el " }, { word: "suelo." }],
          displayTime: 9530,
          eraseTime: 8580
        },
        {verse: [{ word: "Las " }, { word: "estrellas " }, { word: "nacieron" }],
          displayTime: 18110,
          eraseTime: 4640
        },
        {verse: [{ word: "y " }, { word: "después " }, { word: "las " }, { word: "canciones." }],
          displayTime: 22750,
          eraseTime: 4640
        },
        {verse: [{ word: "Y " }, { word: "los " }, { word: "Lulu " }, { word: "Amelu " }, { word: "podían " }, { word: "sonreír " }, { word: "por " }, { word: "siempre." }],
          displayTime: 27390,
          eraseTime: 8970
        },
        {verse: [{ word: "Entonces, " }, { word: "las " }, { word: "estrellas " }, { word: "se " }, { word: "besaron" }],
          displayTime: 36810,
          eraseTime: 4150
        },
        {verse: [{ word: "y " }, { word: "las " }, { word: "canciones " }, { word: "durmieron." }],
          displayTime: 41260,
          eraseTime: 4660
        },
        {verse: [{ word: "¿Dónde " }, { word: "está " }, { word: "mi " }, { word: "hogar?" }],
          displayTime: 46570,
          eraseTime: 8420
        },
        {verse: [{ word: "¿Dónde " }, { word: "está " }, { word: "mi " }, { word: "hogar?" }],
          displayTime: 55800,
          eraseTime: 8940
        },
        {verse: [{ word: "La " }, { word: "manzana " }, { word: "se " }, { word: "estrelló " }, { word: "en " }, { word: "el " }, { word: "suelo." }],
          displayTime: 65040,
          eraseTime: 8720
        },
        {verse: [{ word: "Rin" }, { word: "go " }, { word: "wa " }, { word: "u" }, { word: "kanda " }, { word: "o" }, { word: "sora " }, { word: "ni" }],
          displayTime: 74426,
          eraseTime: 9590
        }
      ]
    };
    
    
    
  
    file.onchange = function() {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
      updateTimer(); 
      setupTriggers(); 
    };
  
    function updateTimer() {
      setInterval(function() {
        var currentTime = audio.currentTime * 1000; 
        var minutes = Math.floor(currentTime / 60000); 
        var seconds = Math.floor((currentTime % 60000) / 1000); 
        var milliseconds = Math.floor(currentTime % 1000); 
        var formattedTime =
          minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0") +
          "." +
          milliseconds.toString().padStart(3, "0"); 
        timer.textContent = formattedTime; 
  
        handleTriggers(currentTime); 
      }, 10); 
    }
  
    function setupTriggers() {
      Object.keys(valuesToTrigger).forEach(function(category) {
        valuesToTrigger[category].forEach(function(trigger) {
          var displayTime = trigger.displayTime;
          var eraseTime = trigger.eraseTime;
  
          setTimeout(function() {
            createKaraokeElement(category, trigger.verse); 
  
            setTimeout(function() {
              eraseKaraokeElement(category); 
            }, eraseTime);
          }, displayTime);
        });
      });
    }
  
    function createKaraokeElement(category, verse) {
      var karaokeWrapper = document.getElementById(category);
      var pElement = document.createElement("p");
      pElement.className = "verse";
    
      verse.forEach(function(wordObj) {
        var wordWrapper = document.createElement("span");
        wordWrapper.className = "wordWrapper";
    
        var wordText = document.createElement("span");
        wordText.className = "wordText";
        wordText.textContent = wordObj.word;
        wordWrapper.appendChild(wordText);
    
        var karaokeHighlight = document.createElement("span");
        karaokeHighlight.className = "karaokeHighlight word";
        karaokeHighlight.textContent = wordObj.word;
    
        karaokeHighlight.style.animation = "karaokeAnim";
        karaokeHighlight.style.animationDuration = wordObj.animDuration + "ms";
        karaokeHighlight.style.animationDelay = wordObj.animDelay + "ms";
        karaokeHighlight.style.animationFillMode = "backwards";
        karaokeHighlight.style.animationTimingFunction = "linear";
    
        wordWrapper.appendChild(karaokeHighlight);
    
        pElement.appendChild(wordWrapper);
      });
    
      karaokeWrapper.appendChild(pElement);
    }
    
    
  
    function eraseKaraokeElement(category) {
      var karaokeWrapper = document.getElementById(category); 
      var pElement = karaokeWrapper.querySelector("p");
      if (pElement) {
        pElement.remove();
      }
    }
  
    function handleTriggers(currentTime) {
      Object.keys(valuesToTrigger).forEach(function(category) {
        valuesToTrigger[category].forEach(function(trigger) {
          var number = trigger.displayTime;
  
          if (currentTime === number) {
            createKaraokeElement(category, trigger.verse); 
          }
        });
      });
    }
  };
  
  