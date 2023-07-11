//Información de los personajes. hoverImageDimensions ajusta las imágenes para que se superpongan correctamente
const characters = {
    Hibiki: {
        mainImage: 'imagenes/Decoraciones/Hibiki_XV.webp',
        hoverImage: 'imagenes/Decoraciones/Hibiki_Symphogear_XV.png',
        paragraphs: [
            'Hibiki Tachibana (立花響 Tachibana Hibiki) es una de las seis protagonistas principales de la serie Senki Zesshō Symphogear.',
            'Hibiki es extrovertida, amigable y tal vez abrumadoramente optimista. Trata a todos con amabilidad, incluso a aquellos que solían ser enemigos. No quiere pelear a menos que sea necesario y no desea tener batallas sin sentido cuando cree que el problema podría ser resuelto hablando calmadamente primero. Sin embargo, con gusto se pone su Symphogear para ayudar a las personas que están en peligro y que no pueden ser salvadas de manera ordinaria. En otros momentos, es sensible sobre ciertos temas, como su padre y su pasado, especialmente el pasado. También tiene un lado más suave, a menudo oculta sus sentimientos sobre cosas específicas y rara vez muestra tristeza a los demás cuando se trata de un problema relacionado con ella misma, incluso con sus amigos, pero también puede conmoverse fácilmente y llorar si escucha historias tristes. En este sentido, se fuerza a sí misma a mantener una sonrisa para los demás. La única persona que normalmente puede darse cuenta de que está poniendo una fachada es Miku. Esto puede dificultar a Hibiki durante las batallas, ya que permite que sus emociones se apoderen de ella. También puede tener el mal hábito de huir de sus problemas y tener momentos de duda sobre sí misma.'
          ],
        hoverImageDimensions: ['-5%', '-16%', '110%', '110%']
    },
    Tsubasa: {
        mainImage: 'imagenes/Decoraciones/Tsubasa_XV.png',
        hoverImage: 'imagenes/Decoraciones/Tsubasa_Symphogear_XV.png',
        paragraphs: [
            'Tsubasa Kazanari (風鳴翼 Kazanari Tsubasa) es una de las seis protagonistas principales de la serie Senki Zesshō Symphogear. Tsubasa aparece por primera vez como una estrella del pop y estudiante con una personalidad fría. Esto se debe al hecho de que su compañera anterior, Kanade, perdió la vida dos años antes de la serie después de un ataque de Noise en su concierto. Antes, Tsubasa era una chica tímida que estaba saliendo de su caparazón gracias a la personalidad servicial y brillante de Kanade. Tsubasa se niega a aceptar a Hibiki como reemplazo de Kanade y prefiere luchar sola, aún más porque el Gungnir de Hibiki tiene la misma frecuencia que el de Kanade.',
            'Incluso se niega a firmar un contrato de canto en el extranjero, ya que se ve a sí misma como un arma que solo canta en el campo de batalla. Sin embargo, durante el tiempo en que estuvo hospitalizada debido a los efectos secundarios que ponían en peligro su vida al cantar su Superb Song, Tsubasa aparentemente "conversa" con Kanade. Después, comienza a abrirse más a Hibiki y a los demás, y se muestra más afectuosa y protectora con sus compañeros de equipo.'
          ],
        hoverImageDimensions: ['-3%', '-19%', '105%', '105%']
    },
    Chris:{
        mainImage: 'imagenes/Decoraciones/Chris_XV.webp',
        hoverImage: 'imagenes/Decoraciones/Chris_Symphogear_XV.png',
        paragraphs: [
            'Chris Yukine (雪音クリス Yukine Kurisu) es uno de los seis personajes principales de la serie Senki Zesshō Symphogear. Ella es una usuaria de Symphogear que empuña el relicario Ichaival.',
            'Como resultado de su vida difícil, Chris es impetuosa, antagonista y agresiva, rápida para desconfiar de los demás, especialmente de los adultos, que siempre la han tratado como un objeto. Chris desea lograr la paz mundial poniendo fin a las llamas de la guerra; con la manipulación de Finé, Chris decide inicialmente lograr esto destruyendo a todos los demás con el poder y la voluntad de luchar, y coopera voluntariamente con Finé para lograr ese objetivo, bajo la falsa impresión de que Finé trabaja por el mismo objetivo de llevar paz al mundo como ella. Sin embargo, en realidad, Chris odia la idea de lastimar a personas inocentes.'
          ],
        hoverImageDimensions: ['-6%', '-18%', '112%', '112%']
    },
    Miku:{
        mainImage: 'imagenes/Decoraciones/Miku_XV.webp',
        hoverImage: 'imagenes/Decoraciones/Miku_in_her_Symphogear.webp',
        paragraphs: [
            'Miku Kohinata (小日向未来 Kohinata Miku) es la mejor amiga de Hibiki, quien comparte un dormitorio con ella y a menudo se preocupa por su seguridad.',
            'Miku es servicial y alegre, pero constantemente se preocupa por Hibiki debido al peligro en el que se encuentra frecuentemente como usuaria de Symphogear. Tiene un rasgo posesivo oculto hacia Hibiki, nacido de un deseo de no ver a Hibiki lastimada, que fue aprovechado junto con su deseo de que Hibiki dejara de pelear para transformar a Miku en una usuaria de Symphogear ella misma. Aun así, Miku hace todo lo posible para apoyar a Hibiki y la anima a luchar por lo que cree y ayudar a los demás, incluso si nace de un deseo egoísta. Por eso, Miku se esfuerza mucho para asegurarse de que Hibiki tenga un lugar cálido al que regresar.'
          ],
        hoverImageDimensions: ['-10%', '-20%', '117%', '117%']
    },
    Maria:{
        mainImage: 'imagenes/Decoraciones/Maria_XV.png',
        hoverImage: 'imagenes/Decoraciones/Maria_Symphogear_XV.webp',
        paragraphs: [
            'Maria Cadenzavna Eve (マリア・カデンツァヴナ・イヴ Maria Kadentsavuna Ivu) es uno de los seis personajes principales de la serie Senki Zesshō Symphogear. Inicialmente fue una antagonista durante G antes de convertirse en una protagonista a partir de GX. Es una usuaria de Symphogear que empuña principalmente el relicario Airgetlám, reemplazando su Gungnir que usaba en G.',
            'Maria es una idol enérgica y un tanto misteriosa. Poco a poco se revela que tiene un corazón conflictivo, dividido entre su determinación de completar su misión y su falta de voluntad para causar daño a los demás. Aunque está dispuesta a dar discursos severos y luchar contra otros usuarios de Gear, no puede hacer daño a personas normales a menos que esté absolutamente enfurecida. Esta naturaleza conflictiva la hace fácilmente manipulable y vulnerable en ocasiones, pero en el fondo Maria es solo una chica amable y sincera que simplemente quiere ayudar y proteger a todos aquellos a quienes aprecia.'
          ],
        hoverImageDimensions: ['-0%', '-30%', '100%', '100%']
    },
    Kirika:{
        mainImage: 'imagenes/Decoraciones/Kirika_XV.webp',
        hoverImage: 'imagenes/Decoraciones/Kirika_Symphogear_XV.png',
        paragraphs: [
            'Kirika Akatsuki (暁切歌 Akatsuki Kirika) es uno de los seis personajes principales de la serie Senki Zesshō Symphogear. Es una usuaria de Symphogear y empuña el relicario Igalima.',
            'Kirika es una chica alegre, a veces infantil y optimista, a menudo se la ve entusiasta, especialmente en comparación con Shirabe y Maria. Se preocupa mucho por sus compañeros de equipo y está dispuesta a hacer lo que sea necesario para salvar a la humanidad. Su relación con Shirabe en particular roza lo romántico, y es extremadamente protectora con ella. Después de creer falsamente que era la reencarnación de Finé, Kirika se volvió cada vez más desequilibrada debido al pánico por la pérdida de su identidad, hasta el punto de intentar suicidarse cuando se da cuenta de su error. Utiliza "death" (デス desu) como su frase distintiva.'
            ],
        hoverImageDimensions: ['-13.9%', '-17%', '124%', '124%']
    },
    Shirabe:{
        mainImage: 'imagenes/Decoraciones/Shirabe_XV.webp',
        hoverImage: 'imagenes/Decoraciones/Shirabe_Symphogear_XV.webp',
        paragraphs: [
            'Shirabe Tsukuyomi (月読調 Tsukuyomi Shirabe) es uno de los seis personajes principales de la serie Senki Zesshō Symphogear. Introducida como una antagonista, Shirabe más tarde se convierte en una de las seis protagonistas de la serie.',
            'Shirabe es una joven tranquila y reservada, pero apasionada y terca. Protege ferozmente a quienes y a lo que aprecia, especialmente a Kirika. Afirma no ser buena hablando con otras personas, por lo que evita intencionalmente acercarse demasiado a las personas que no sean Kirika.'
          
          ],
        hoverImageDimensions: ['-15%', '-27%', '140%', '125%']
    }    

  }; 

  function initialize() {

    const listItems = document.querySelectorAll('.list-item');
    const mainImage = document.querySelector('.main-image');
    const hoverImage = document.querySelector('.hover-image');
    const characterInfoParagraphs = document.querySelectorAll('.characterInfo');
    const gifsContainer = document.querySelector('.gifs-container');
  
    function replaceGIFs(characterName) {
      gifsContainer.innerHTML = '';
      const character = characters[characterName];
      if (character) {
        const gifCount = 4; 
        for (let i = 1; i <= gifCount; i++) {
          const gifSrc = `imagenes/Decoraciones/${characterName}_${i}.gif`;
          const altText = `GIF ${i} for ${characterName}`;
          const gifElement = document.createElement('img');
          gifElement.src = gifSrc;
          gifElement.alt = altText;
          gifElement.classList.add('gif');
          gifsContainer.appendChild(gifElement);
        }
      }
    }
  
    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        listItems.forEach((item) => { //Elimina los bordes de todos los items
          item.style.borderRadius = '';
          item.style.borderColor = '';
          item.style.borderStyle = '';
        });
  
        //Aplica los bordes al clickeado
        item.style.borderRadius = '10px';
        item.style.borderColor = '#e65c00';
        item.style.borderStyle = 'double';
  
        //Saca información del array
        const characterName = item.querySelector('.list-title').textContent.split(' ')[0];
        const character = characters[characterName];
        if (character) {
          const { mainImage: mainImageUrl, hoverImage: hoverImageUrl, paragraphs, hoverImageDimensions } = character;
          mainImage.src = mainImageUrl;
          hoverImage.src = hoverImageUrl;
  
          
          if (hoverImageDimensions && Array.isArray(hoverImageDimensions) && hoverImageDimensions.length === 4) {
            const [top, left, width, height] = hoverImageDimensions;
            hoverImage.style.top = top;
            hoverImage.style.left = left;
            hoverImage.style.width = width;
            hoverImage.style.height = height;
          } else {
            hoverImage.style.top = '-13.9%';
            hoverImage.style.left = '-19%';
            hoverImage.style.width = '124%';
            hoverImage.style.height = '124%';
          }
  
          // Update the character information paragraphs
          characterInfoParagraphs.forEach((paragraph, index) => {
            paragraph.textContent = paragraphs[index] || '';
          });
  
          // Call the replaceGIFs function with the character's name
          replaceGIFs(characterName);
        }
      });
    });
  }
  
  initialize();
  

