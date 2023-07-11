const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var diacritics = // Array de diacríticos de cada letra
{
		'a' : ['a','à','á','â','ã','ä','å','æ','ā','ă','ą','ǎ','ǟ','ǡ','ǻ','ȁ','ȃ','ȧ','ɐ','ɑ','ɒ','ͣ','а','ӑ','ӓ','ᵃ','ᵄ','ᶏ','ḁ','ẚ','ạ','ả','ấ','ầ','ẩ','ẫ','ậ','ắ','ằ','ẳ','ẵ','ặ','ₐ','ⱥ','ａ'],
		'A' : ['A','À','Á','Â','Ã','Ä','Å','Ā','Ă','Ą','Ǎ','Ǟ','Ǡ','Ǻ','Ȁ','Ȃ','Ȧ','Ⱥ','А','Ӑ','Ӓ','ᴀ','ᴬ','Ḁ','Ạ','Ả','Ấ','Ầ','Ẩ','Ẫ','Ậ','Ắ','Ằ','Ẳ','Ẵ','Ặ','Ａ'],
		 
		'b' : ['b','ƀ','ƃ','ɓ','ᖯ','ᵇ','ᵬ','ᶀ','ḃ','ḅ','ḇ','ｂ'],
		'B' : ['B','Ɓ','Ƃ','Ƀ','ʙ','ᛒ','ᴃ','ᴮ','ᴯ','Ḃ','Ḅ','Ḇ','Ｂ'],
		 
		'c' : ['c','ç','ć','ĉ','ċ','č','ƈ','ȼ','ɕ','ͨ','ᴄ','ᶜ','ḉ','ↄ','ｃ'],
		'C' : ['C','Ç','Ć','Ĉ','Ċ','Č','Ƈ','Ȼ','ʗ','Ḉ','Ｃ'],
		
		'd' : ['d','ď','đ','Ƌ','ƌ','ȡ','ɖ','ɗ','ͩ','ᵈ','ᵭ','ᶁ','ᶑ','ḋ','ḍ','ḏ','ḑ','ḓ','ｄ'],
		'D' : ['D','Ď','Đ','Ɖ','Ɗ','ᴰ','Ḋ','Ḍ','Ḏ','Ḑ','Ḓ','Ｄ'],
		
		'e' : ['e','è','é','ê','ë','ē','ĕ','ė','ę','ě','ǝ','ȅ','ȇ','ȩ','ɇ','ɘ','ͤ','ᵉ','ᶒ','ḕ','ḗ','ḙ','ḛ','ḝ','ẹ','ẻ','ẽ','ế','ề','ể','ễ','ệ','ₑ','ｅ'],
		'E' : ['E','È','É','Ê','Ë','Ē','Ĕ','Ė','Ę','Ě','Œ','Ǝ','Ɛ','Ȅ','Ȇ','Ȩ','Ɇ','ɛ','ɜ','ɶ','Є','Э','э','є','Ӭ','ӭ','ᴇ','ᴈ','ᴱ','ᴲ','ᵋ','ᵌ','ᶓ','ᶔ','ᶟ','Ḕ','Ḗ','Ḙ','Ḛ','Ḝ','Ẹ','Ẻ','Ẽ','Ế','Ề','Ể','Ễ','Ệ','Ｅ','𐐁','𐐩'],
		
		'f' : ['f','ƒ','ᵮ','ᶂ','ᶠ','ḟ','ｆ'],
		'F' : ['F','Ƒ','Ḟ','ⅎ','Ｆ'],
		
		'g' : ['g','ĝ','ğ','ġ','ģ','ǥ','ǧ','ǵ','ɠ','ɡ','ᵍ','ᵷ','ᵹ','ᶃ','ᶢ','ḡ','ｇ'],
		'G' : ['G','Ĝ','Ğ','Ġ','Ģ','Ɠ','Ǥ','Ǧ','Ǵ','ɢ','ʛ','ᴳ','Ḡ','Ｇ'],
		
		'h' : ['h','ĥ','ħ','ƕ','ȟ','ɥ','ɦ','ʮ','ʯ','ʰ','ʱ','ͪ','Һ','һ','ᑋ','ᶣ','ḣ','ḥ','ḧ','ḩ','ḫ','ⱨ','ｈ'],
		'H' : ['H','Ĥ','Ħ','Ȟ','ʜ','ᕼ','ᚺ','ᚻ','ᴴ','Ḣ','Ḥ','Ḧ','Ḩ','Ḫ','Ⱨ','Ｈ'],
		
		'i' : ['i','ì','í','î','ï','ĩ','ī','ĭ','į','ǐ','ȉ','ȋ','ɨ','ͥ','ᴉ','ᵎ','ᵢ','ᶖ','ᶤ','ḭ','ḯ','ỉ','ị','ｉ'],
		'I' : ['I','Ì','Í','Î','Ï','Ĩ','Ī','Ĭ','Į','İ','Ǐ','Ȉ','Ȋ','ɪ','І','ᴵ','ᵻ','ᶦ','ᶧ','Ḭ','Ḯ','Ỉ','Ị','Ｉ'],
		
		'j' : ['j','ĵ','ǰ','ɉ','ʝ','ʲ','ᶡ','ᶨ','ｊ'],
		'J' : ['J','Ĵ','ᴊ','ᴶ','Ｊ'],
		
		'k' : ['k','ķ','ƙ','ǩ','ʞ','ᵏ','ᶄ','ḱ','ḳ','ḵ','ⱪ','ｋ'],
		'K' : ['K','Ķ','Ƙ','Ǩ','ᴷ','Ḱ','Ḳ','Ḵ','Ⱪ','Ｋ'],
		
		'l' : ['l','ĺ','ļ','ľ','ŀ','ł','ƚ','ȴ','ɫ','ɬ','ɭ','ˡ','ᶅ','ᶩ','ᶪ','ḷ','ḹ','ḻ','ḽ','ℓ','ⱡ'],
		'L' : ['L','Ĺ','Ļ','Ľ','Ŀ','Ł','Ƚ','ʟ','ᴌ','ᴸ','ᶫ','Ḷ','Ḹ','Ḻ','Ḽ','Ⱡ','Ɫ'],
		
		'm' : ['m','ɯ','ɰ','ɱ','ͫ','ᴟ','ᵐ','ᵚ','ᵯ','ᶆ','ᶬ','ᶭ','ḿ','ṁ','ṃ','㎡','㎥','ｍ'],
		'M' : ['M','Ɯ','ᴍ','ᴹ','Ḿ','Ṁ','Ṃ','Ｍ'],
		
		'n' : ['n','ñ','ń','ņ','ň','ŉ','ƞ','ǹ','ȵ','ɲ','ɳ','ᵰ','ᶇ','ᶮ','ᶯ','ṅ','ṇ','ṉ','ṋ','ⁿ','ｎ'],
		'N' : ['N','Ñ','Ń','Ņ','Ň','Ɲ','Ǹ','Ƞ','ɴ','ᴎ','ᴺ','ᴻ','ᶰ','Ṅ','Ṇ','Ṉ','Ṋ','Ｎ'],
		
		'o' : ['o','ò','ó','ô','õ','ö','ø','ō','ŏ','ő','ơ','ǒ','ǫ','ǭ','ǿ','ȍ','ȏ','ȫ','ȭ','ȯ','ȱ','ɵ','ͦ','о','ӧ','ө','ᴏ','ᴑ','ᴓ','ᴼ','ᵒ','ᶱ','ṍ','ṏ','ṑ','ṓ','ọ','ỏ','ố','ồ','ổ','ỗ','ộ','ớ','ờ','ở','ỡ','ợ','ₒ','ｏ','𐐬'],
		'O' : ['O','Ò','Ó','Ô','Õ','Ö','Ø','Ō','Ŏ','Ő','Ɵ','Ơ','Ǒ','Ǫ','Ǭ','Ǿ','Ȍ','Ȏ','Ȫ','Ȭ','Ȯ','Ȱ','О','Ӧ','Ө','Ṍ','Ṏ','Ṑ','Ṓ','Ọ','Ỏ','Ố','Ồ','Ổ','Ỗ','Ộ','Ớ','Ờ','Ở','Ỡ','Ợ','Ｏ','𐐄'],
		
		'p' : ['p','ᵖ','ᵱ','ᵽ','ᶈ','ṕ','ṗ','ｐ'],
		'P' : ['P','Ƥ','ᴘ','ᴾ','Ṕ','Ṗ','Ᵽ','Ｐ'],
		
		'q' : ['q','ɋ','ʠ','ᛩ','ｑ'],
		'Q' : ['Q','Ɋ','Ｑ'],
		
		'r' : ['r','ŕ','ŗ','ř','ȑ','ȓ','ɍ','ɹ','ɻ','ʳ','ʴ','ʵ','ͬ','ᵣ','ᵲ','ᶉ','ṙ','ṛ','ṝ','ṟ'],
		'R' : ['R','Ŕ','Ŗ','Ř','Ʀ','Ȑ','Ȓ','Ɍ','ʀ','ʁ','ʶ','ᚱ','ᴙ','ᴚ','ᴿ','Ṙ','Ṛ','Ṝ','Ṟ','Ɽ'],
		
		's' : ['s','ś','ŝ','ş','š','ș','ʂ','ᔆ','ᶊ','ṡ','ṣ','ṥ','ṧ','ṩ','ｓ'],
		'S' : ['S','Ś','Ŝ','Ş','Š','Ș','ȿ','ˢ','ᵴ','Ṡ','Ṣ','Ṥ','Ṧ','Ṩ','Ｓ'],
		
		't' : ['t','ţ','ť','ŧ','ƫ','ƭ','ț','ʇ','ͭ','ᵀ','ᵗ','ᵵ','ᶵ','ṫ','ṭ','ṯ','ṱ','ẗ','ｔ'],
		'T' : ['T','Ţ','Ť','Ƭ','Ʈ','Ț','Ⱦ','ᴛ','ᵀ','Ṫ','Ṭ','Ṯ','Ṱ','Ｔ'],
	 	
		'u' : ['u','ù','ú','û','ü','ũ','ū','ŭ','ů','ű','ų','ư','ǔ','ǖ','ǘ','ǚ','ǜ','ȕ','ȗ','ͧ','ߎ','ᵘ','ᵤ','ṳ','ṵ','ṷ','ṹ','ṻ','ụ','ủ','ứ','ừ','ử','ữ','ự','ｕ'],
		'U' : ['U','Ù','Ú','Û','Ü','Ũ','Ū','Ŭ','Ů','Ű','Ų','Ư','Ǔ','Ǖ','Ǘ','Ǚ','Ǜ','Ȕ','Ȗ','Ʉ','ᴜ','ᵁ','ᵾ','Ṳ','Ṵ','Ṷ','Ṹ','Ṻ','Ụ','Ủ','Ứ','Ừ','Ử','Ữ','Ự','Ｕ'],
		
		'v' : ['v','ʋ','ͮ','ᵛ','ᵥ','ᶹ','ṽ','ṿ','ⱱ','ｖ','ⱴ'],
		'V' : ['V','Ʋ','Ʌ','ʌ','ᴠ','ᶌ','Ṽ','Ṿ','Ｖ'],
		
		'w' : ['w','ŵ','ʷ','ᵂ','ẁ','ẃ','ẅ','ẇ','ẉ','ẘ','ⱳ','ｗ'],
		'W' : ['W','Ŵ','ʍ','ᴡ','Ẁ','Ẃ','Ẅ','Ẇ','Ẉ','Ⱳ','Ｗ'],
		
		'x' : ['x','̽','͓','ᶍ','ͯ','ẋ','ẍ','ₓ','ｘ'],
		'X' : ['X','ˣ','ͯ','Ẋ','Ẍ','☒','✕','✖','✗','✘','Ｘ'],
		
		'y' : ['y','ý','ÿ','ŷ','ȳ','ɏ','ʸ','ẏ','ỳ','ỵ','ỷ','ỹ','ｙ'],
		'Y' : ['Y','Ý','Ŷ','Ÿ','Ƴ','ƴ','Ȳ','Ɏ','ʎ','ʏ','Ẏ','Ỳ','Ỵ','Ỷ','Ỹ','Ｙ'],
		
		'z' : ['z','ź','ż','ž','ƶ','ȥ','ɀ','ʐ','ʑ','ᙆ','ᙇ','ᶻ','ᶼ','ᶽ','ẑ','ẓ','ẕ','ⱬ','ｚ'],
		'Z' : ['Z','Ź','Ż','Ž','Ƶ','Ȥ','ᴢ','ᵶ','Ẑ','Ẓ','Ẕ','Ⱬ','Ｚ']
	};

function diacriticless(text) { //El único cambio que hice fue el reemplazar el que sea una variable exportable a una local para utilizar en el buscador
    var result = []; //Diaciticless transforma un valor de string para remover diacríticos y carácteres especiales

	//recorre todos los carácteres del texto
    for(var i=0; i<text.length; i++) {
        var searchChar = text.charAt(i);
        var foundChar = false;

		//recorre todos los diacríticos de la letra
        for(var key in diacritics) {
            var indexChar = diacritics[key].indexOf(searchChar);
			
			//Checkea si la letra tiene diacríticos
            if (indexChar !== -1) {
				//Si tiene diacrítico, pone la letra sin diacrítico en el array
                result.push(key);
                foundChar = true;
                break;
            }
        }

        //Checkea si la letra no se encontró
        if (!foundChar) {
			//Si no encuentra la letra, la mete al array
            result.push(searchChar);
        }
    }
    //une las letras sin diacríticos, y las retorna
    return result.join("");
};
const songs = [ //Arreglo de todas las canciones, con palabras claves como propiedades, 
               //incluídos datos de búsqueda como temporada, personaje, o artista.
    {name: 'Apple', characters: ['Maria Cadenzavna Eve', "Serena Cadenzavna Eve"], season: ["Season 2", "S2", "G"], artists: ["Yōko Hikasa", "Yui Horie"], sources:[], cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"]},                                                                                                                                                                                                                                                                                                                                                                                        
    { name: 'Gyakkō no Flügel'                            , characters: ['Tsubasa Kazanari'     , 'Kanade Amou'                                                                                                          ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"      ], artists: ['Nana Mizuki'      , 'Minami Takayama'                                                                           ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_1.webp"                ]},
    { name: 'Gyakkō no Flügel (Ver.Sōyoku no Sirius)'     , characters: ['Tsubasa Kazanari'     , 'Kanade Amou'                                                                                                          ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Nana Mizuki'      , 'Minami Takayama'                                                                           ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_1.webp"                ]},
    { name: 'ORBITAL BEAT'                                , characters: ['Tsubasa Kazanari'     , 'Kanade Amou'                                                                                                          ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Nana Mizuki'      , 'Minami Takayama'                                                                           ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_1.webp"                ]},
    { name: 'Gekisō Gungnir'                              , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_2.webp"                ]},
    { name: 'Watashi to Iu Oto Hibiki Sono Saki ni'       , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_2.webp"                ]},
    { name: 'Zettō Ame no Habakiri'                       , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_3.webp"                ]},
    { name: 'FLIGHT FEATHERS'                             , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_3.webp"                ]},
    { name: 'Makyū Ichaival'                              , characters: ['Chris Yukine'                                                                                                                                  ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_4.webp"                ]},
    { name: 'Tsunaida Te Dake ga Tsumugu Mono'            , characters: ['Chris Yukine'                                                                                                                                  ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_4.webp"                ]},
    { name: 'Kimi to Iu Oto Kanade Tsukiru Made'          , characters: ['Kanade Amou'                                                                                                                                   ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Minami Takayama'                                                                                                ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_5.webp"                ]},
    { name: 'Hidamari Memoria'                            , characters: ['Miku Kohinata'                                                                                                                                 ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Yuka Iguchi'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_6.webp"                ]},
    { name: 'FIRST LOVE SONG'                             , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine'                                                                                      ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki'                                                            ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_Character_Song_7.webp"                ]},
    { name: 'Synchrogazer'                                , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Mizuki_Nana_Synchrogazer.webp"                   ]},
    { name: 'Synchrogazer -Aufwachen Form-'               , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"       ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Mizuki_Nana_Synchrogazer.webp"                   ]},
    { name: 'Meteor Light'                                , characters: ['Chris Yukine'                                                                                                                                  ], season: ['Season 1', 'S1',"Senki Zesshou Symphogear"      ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Meteor_Light_Album.webp"                         ]},
    { name: 'Fushichō no Flamme'                          , characters: ['Tsubasa Kazanari'     , 'Maria Cadenzavna Eve'                                                                                                 ], season: ['Season 2', 'S2', 'G' ], artists: ['Nana Mizuki'      , 'Yōko Hikasa'                                                                               ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_1.webp"              ]},
    { name: 'Seigi wo Shinjite, Nigirishimete'            , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_2.webp"              ]},
    { name: 'Rainbow Flower'                              , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_2.webp"              ]},
    { name: 'Ressō Gungnir'                               , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 2', 'S2', 'G' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_3.webp"              ]},
    { name: 'Dark Oblivion'                               , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 2', 'S2', 'G' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_3.webp"              ]},
    { name: 'Gekkō no Tsurugi'                            , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_4.webp"              ]},
    { name: 'Koi no Okehazama'                            , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_4.webp"              ]},
    { name: 'Ōkyo Shul Shagana'                           , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 2', 'S2', 'G' ], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_5.webp"              ]},
    { name: 'PRACTICE MODE'                               , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 2', 'S2', 'G' ], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_5.webp"              ]},
    { name: 'Bye-Bye Lullaby'                             , characters: ['Chris Yukine'                                                                                                                                  ], season: ['Season 2', 'S2', 'G' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_6.webp"              ]},
    { name: 'Kyōshitsu Monochrome'                        , characters: ['Chris Yukine'                                                                                                                                  ], season: ['Season 2', 'S2', 'G' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_6.webp"              ]},
    { name: 'Gokuren Igalima'                             , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 2', 'S2', 'G' ], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_7.webp"              ]},
    { name: 'Tegami'                                      , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 2', 'S2', 'G' ], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_7.webp"              ]},
    { name: 'Waikyō Shénshòujìng'                         , characters: ['Miku Kohinata'                                                                                                                                 ], season: ['Season 2', 'S2', 'G' ], artists: ['Yuka Iguchi'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_8.webp"              ]},
    { name: 'Kaban no Kakushigoto'                        , characters: ['Miku Kohinata'                                                                                                                                 ], season: ['Season 2', 'S2', 'G' ], artists: ['Yuka Iguchi'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_8.webp"              ]},
    { name: 'Genchaku! Denkō Keiji Ban (Genjuro ver)'     , characters: ['Genjūrō Kazanari'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Hideo Ishikawa'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_Album.webp"          ]},
    { name: 'Genchaku! Denkō Keiji Ban (Ver.Kosumosusai)' , characters: ['Yumi Itaba'           ,'Shiori Terashima', 'Kuriyo Ando'                                                                                       ], season: ['Season 2', 'S2', 'G' ], artists: ['Chinatsu Akasaki' , 'Nao Tōyama' ,'Mikako Komatsu'                                                              ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_Album.webp"          ]},
    { name: 'ORBITAL BEAT (Ver.ZABABA)'                   , characters: ['Kirika Akatsuki'      ,'Shirabe Tsukuyomi'                                                                                                     ], season: ['Season 2', 'S2', 'G' ], artists: ['Ai Kayano'        , 'Yoshino Nanjō'                                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_Album.webp"          ]},
    { name: 'Yīngxióng Gùshì (Ver.Training Day)'          , characters: ['Genjūrō Kazanari'     ,'Hibiki Tachibana'                                                                                                      ], season: ['Season 2', 'S2', 'G' ], artists: ['Hideo Ishikawa'   , 'Aoi Yūki'                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_Character_Song_Album.webp"          ]},
    { name: 'Edge Works of Goddess ZABABA'                , characters: ['Kirika Akatsuki'      ,'Shirabe Tsukuyomi'                                                                                                     ], season: ['Season 2', 'S2', 'G' ], artists: ['Ai Kayano'        , 'Yoshino Nanjō'                                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_volume_6_cover.webp"                ]},
    { name: 'Hajimari no Babel'                           , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi'                       ], season: ['Season 2', 'S2', 'G' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō'                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_volume_6_cover.webp"                ]},
    { name: 'Nijiiro no Flügel'                           , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi', 'Kanade Amou'        ], season: ['Season 2', 'S2', 'G' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō','Minami Takayama'] , sources: [] , cover_art:["imagenes/CDs/Symphogear_G_volume_6_cover.webp"                ]},
    { name: 'Vitalization'                                , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Vitalization_cover.webp"                         ]},
    { name: 'Vitalization -Aufwachen Form-'               , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 2', 'S2', 'G' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Vitalization_cover.webp"                         ]},
    { name: 'Next Destination'                            , characters: ['Chris Yukine'                                                                                                                                  ], season: ['Season 2', 'S2', 'G' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Next_Destination_cover.webp"                     ]},
    { name: 'Seiten Galaxy Cross'                         , characters: ['Tsubasa Kazanari'     , 'Maria Cadenzavna Eve'                                                                                                 ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'      , 'Yōko Hikasa'                                                                               ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_1.webp"             ]},
    { name: 'Genkai Toppa G-beat'                         , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_2.webp"             ]},
    { name: 'Little Miracle -Grip it tight-'              , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_2.webp"             ]},
    { name: 'Beyond the BLADE'                            , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_3.webp"             ]},
    { name: 'Sora e'                                      , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'                                                                                                     ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_3.webp"             ]},
    { name: 'TRUST HEART'                                 , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 3', 'S3','GX' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_4.webp"             ]},
    { name: 'Hōkago Key Holder'                           , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 3', 'S3','GX' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_4.webp"             ]},
    { name: 'Overkill Scythe Hell'                        , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 3', 'S3','GX' ], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_5.webp"             ]},
    { name: 'Okitegami'                                   , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 3', 'S3','GX' ], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_5.webp"             ]},
    { name: 'Genocide Saw Heaven'                         , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 3', 'S3','GX' ], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_6.webp"             ]},
    { name: 'SENSE OF DISTANCE'                           , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 3', 'S3','GX' ], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_6.webp"             ]},
    { name: 'Ginwan Airgetlám'                            , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_7.webp"             ]},
    { name: 'Junpaku Innocent'                            , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_7.webp"             ]},
    { name: 'Senkin Dur da Blá'                           , characters: ['Carol Malus Dienheim'                                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Inori Minase'                                                                                                   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_8.webp"             ]},
    { name: 'tomorrow'                                    , characters: ['Carol Malus Dienheim'                                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Inori Minase'                                                                                                   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'RADIANT FORCE'                               , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari','Yukine Chris'                                                                                       ], season: ['Season 3', 'S3','GX' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki'                                                            ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Just Loving X-Edge'                          , characters: ['Shirabe Tsukuyomi'    ,'Kirika Akatsuki'                                                                                                       ], season: ['Season 3', 'S3','GX' ], artists: ['Ai Kayano'        , 'Yoshino Nanjō'                                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'BAYONET CHARGE'                              , characters: ['Tsubasa Kazanari'     ,'Yukine Chris'                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'      , 'Ayahi Takagaki'                                                                            ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Itsuka no Niji, Hana no Omoide'              , characters: ['Hibiki Tachibana'     ,'Miku Kohinata'                                                                                                         ], season: ['Season 3', 'S3','GX' ], artists: ['Aoi Yūki'         , 'Yuka Iguchi'                                                                               ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Arigatō wo Utai Nagara'                      , characters: ['Maria Cadenzavna Eve','Shirabe Tsukuyomi','Kirika Akatsuki'                                                                                    ], season: ['Season 3', 'S3','GX' ], artists: ['Ai Kayano'        , 'Yoshino Nanjō' , 'Yōko Hikasa'                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Green Green'                                 , characters: ['Carol Malus Dienheim'                                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Inori Minase'                                                                                                   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'RADIANT FORCE (IGNITED arrangement)'         , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Yukine Chris'                                                                                      ], season: ['Season 3', 'S3','GX' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki'                                                            ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Ginwan Airgetlám (IGNITED arrangement)'      , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 3', 'S3','GX' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Just Loving X-Edge (IGNITED arrangement)'    , characters: ['Shirabe Tsukuyomi'    ,'Kirika Akatsuki'                                                                                                       ], season: ['Season 3', 'S3','GX' ], artists: ['Ai Kayano'        , 'Yoshino Nanjō'                                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Beyond the BLADE (IGNITED arrangement)'      , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'TRUST HEART (IGNITED arrangement)'           , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 3', 'S3','GX' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Genkai Toppa G-beat (IGNITED arrangement)'   , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_GX_Character_Song_Album.webp"         ]},
    { name: 'Exterminate'                                 , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Exterminate.webp"                                ]},
    { name: 'Glorious Break'                              , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 3', 'S3','GX' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/NMSAGlorious_Break.webp"                         ]},
    { name: 'Rebirth-day'                                 , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 3', 'S3','GX' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Rebirth-day_front_cover.webp"                    ]},
    { name: 'Makenai Ai ga Koko ni Aru'                   , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 4', 'S4','AXZ'], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_1.webp"            ]},
    { name: 'Hanasaku Yūki'                               , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 4', 'S4','AXZ'], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_1.webp"            ]},
    { name: 'Stand up! Ready!!'                           , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 4', 'S4','AXZ'], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_2.webp"            ]},
    { name: 'Stand up! Lady!!'                            , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 4', 'S4','AXZ'], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_2.webp"            ]},
    { name: 'Gekka Bijin'                                 , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 4', 'S4','AXZ'], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_3.webp"            ]},
    { name: 'Luminous Gate'                               , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 4', 'S4','AXZ'], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_3.webp"            ]},
    { name: 'GUN BULLET XXX'                              , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 4', 'S4','AXZ'], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_4.webp"            ]},
    { name: 'Todoke Happy♡Uta Zukin!'                     , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 4', 'S4','AXZ'], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_4.webp"           ]},
    { name: 'Dangerous Sunshine'                          , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 4', 'S4','AXZ'], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_5.webp"            ]},
    { name: 'Happy Smile Vacation'                        , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 4', 'S4','AXZ'], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_5.webp"            ]},
    { name: 'Melodious Moonlight'                         , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 4', 'S4','AXZ'], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_6.webp"            ]},
    { name: 'Draft folder'                                , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 4', 'S4','AXZ'], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_6.webp"            ]},
    { name: 'Gekishō Infinity'                            , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari','Yukine Chris'                                                                                       ], season: ['Season 4', 'S4','AXZ'], artists: ['Aoi Yūki'        , 'Nana Mizuki','Ayahi Takagaki'                                                               ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Senritsu Sorority'                           , characters: ['Maria Cadenzavna Eve','Shirabe Tsukuyomi','Kirika Akatsuki'                                                                                    ], season: ['Season 4', 'S4','AXZ'], artists: ['Yōko Hikasa'     ,'Ai Kayano','Yoshino Nanjō'                                                                   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Gekishō Infinity (IGNITED arrangement)'      , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari','Yukine Chris'                                                                                       ], season: ['Season 4', 'S4','AXZ'], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki'                                                            ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Senritsu Sorority (IGNITED arrangement)'     , characters: ['Maria Cadenzavna Eve','Shirabe Tsukuyomi','Kirika Akatsuki'                                                                                    ], season: ['Season 4', 'S4','AXZ'], artists: ['Yōko Hikasa'     , 'Ai Kayano' ,'Yoshino Nanjō'                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Gizagizagirari☆Full Throttle'                , characters: ['Shirabe Tsukuyomi'    ,'Kirika Akatsuki'                                                                                                       ], season: ['Season 4', 'S4','AXZ'], artists: ['Ai Kayano'        , 'Yoshino Nanjō'                                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"       ]},
    { name: 'Change the Future'                           , characters: ['Yukine Chris'         ,'Maria Cadenzavna Eve'                                                                                                  ], season: ['Season 4', 'S4','AXZ'], artists: ['Yōko Hikasa'      , 'Ayahi Takagaki'                                                                            ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Fūgetsu no Shissō'                           , characters: ['Tsubasa Kazanari'     ,'Shirabe Tsukuyomi'                                                                                                     ], season: ['Season 4', 'S4','AXZ'], artists: ['Nana Mizuki'      , 'Yoshino Nanjō'                                                                             ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Hitsuai Duo Shout'                           , characters: ['Hibiki Tachibana'     ,'Kirika Akatsuki'                                                                                                       ], season: ['Season 4', 'S4','AXZ'], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Shitō -Ewigkeit-'                            , characters: ['Cagliostro'           ,'Prelati', 'Saint-Germain'                                                                                              ], season: ['Season 4', 'S4','AXZ'], artists: ['Minako Kotobuki'  ,'Shouta Aoi','Rina Hidaka'                                                                   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'Axia no Kaze'                                , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi'                       ], season: ['Season 4', 'S4','AXZ'], artists: ['Aoi Yūki'         , 'Nana Mizuki','Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō'                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_AXZ_Character_Song_Album.webp"        ]},
    { name: 'TESTAMENT'                                   , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','AXZ'], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Testament.webp"                                  ]},
    { name: 'TESTAMENT -Aufwachen Form-'                  , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','AXZ'], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Testament.webp"                                  ]},
    { name: 'Futurism'                                    , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 5', 'S5','AXZ'], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Ayahi_takagaki_futurism_anime_edition_cover.webp"]},
    { name: 'ALL LOVES BLAZING'                           , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_1.webp"             ]},
    { name: 'Kimi Dake ni'                                , characters: ['Hibiki Tachibana'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'                                                                                                       ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_1.webp"             ]},
    { name: 'Mikansei Ai Mapputatsu!'                     , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 5', 'S5','XV' ], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_2.webp"             ]},
    { name: 'Happy Birthday no Uta'                       , characters: ['Kirika Akatsuki'                                                                                                                               ], season: ['Season 5', 'S5','XV' ], artists: ['Ai Kayano'                                                                                                      ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_2.webp"             ]},
    { name: 'Mijuku Shōjo Buttagiri!'                     , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 5', 'S5','XV' ], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_3.webp"             ]},
    { name: 'Kimi ga Nakanai Sekai ni'                    , characters: ['Shirabe Tsukuyomi'                                                                                                                             ], season: ['Season 5', 'S5','XV' ], artists: ['Yoshino Nanjō'                                                                                                  ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_3.webp"             ]},
    { name: 'Take this! All loaded'                       , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 5', 'S5','XV' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_4.webp"             ]},
    { name: 'Ashita no Atashi'                            , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 5', 'S5','XV' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_4.webp"             ]},
    { name: 'Shirogane no Honō -keep the faith-'          , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 5', 'S5','XV' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_5.webp"             ]},
    { name: 'Kono Ima wo Ikiru Hikari'                    , characters: ['Maria Cadenzavna Eve'                                                                                                                          ], season: ['Season 5', 'S5','XV' ], artists: ['Yōko Hikasa'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_5.webp"             ]},
    { name: "Defender'Z Brand!"                           , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_6.webp"             ]},
    { name: 'Kaze no Anata ni'                            , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_6.webp"             ]},
    { name: 'Rikka Ryōran'                                , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi'                       ], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'        , 'Nana Mizuki','Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō'                     ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Angelic Remnant'                             , characters: ['Tsubasa Kazanari'     ,'Maria Cadenzavna Eve'                                                                                                  ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'      , 'Yōko Hikasa'                                                                               ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Hanasaku Yūki (Ver. Amalgam)'                , characters: ['Hibiki Tachibana'     ,'Saint-Germain'                                                                                                         ], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'         , 'Minako Kotobuki'                                                                           ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Mata Au Hi Made'                             , characters: ['Elfnein'                                                                                                                                       ], season: ['Season 5', 'S5','XV' ], artists: ['Misaki Kuno'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Sforzando no Zankyō'                         , characters: ['Carol Malus Dienheim'                                                                                                                          ], season: ['Season 5', 'S5','XV' ], artists: ['Inori Minase'                                                                                                   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Cutting Edge×2 Ready go!'                    , characters: ['Shirabe Tsukuyomi'    ,'Kirika Akatsuki'                                                                                                       ], season: ['Season 5', 'S5','XV' ], artists: ['Yoshino Nanjō'    , 'Ai Kayano'                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'PERFECT SYMPHONY'                            , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi','Carol Malus Dienheim'], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō','Inori Minase'   ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Xtreme Vibes'                                , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi','Miku Kohinata'       ], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō','Yuka Iguchi'    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'FOR THE FUTURE'                              , characters: ['Miku Kohinata'                                                                                                                                 ], season: ['Season 5', 'S5','XV' ], artists: ['Yuka Iguchi'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'Ashita e no Flügel'                          , characters: ['Hibiki Tachibana'     ,'Tsubasa Kazanari', 'Chris Yukine', 'Maria Cadenzavna Eve', 'Kirika Akatsuki','Shirabe Tsukuyomi','Miku Kohinata'       ], season: ['Season 5', 'S5','XV' ], artists: ['Aoi Yūki'         , 'Nana Mizuki' , 'Ayahi Takagaki','Yōko Hikasa','Ai Kayano','Yoshino Nanjō','Yuka Iguchi'    ] , sources: [] , cover_art:["imagenes/CDs/Symphogear_XV_Character_Song_Album.webp"         ]},
    { name: 'METANOIA'                                    , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/METANOIA.webp"                                   ]},
    { name: 'METANOIA -Aufwachen Form-'                   , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/METANOIA.webp"                                   ]},
    { name: 'FINAL COMMANDER'                             , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Cannonball_Running_2.webp"                       ]},
    { name: 'FINAL COMMANDER -Aufwachen Form-'            , characters: ['Tsubasa Kazanari'                                                                                                                              ], season: ['Season 5', 'S5','XV' ], artists: ['Nana Mizuki'                                                                                                    ] , sources: [] , cover_art:["imagenes/CDs/Cannonball_Running_2.webp"                       ]},
    { name: 'Lasting Song'                                , characters: ['Yukine Chris'                                                                                                                                  ], season: ['Season 5', 'S5','XV' ], artists: ['Ayahi Takagaki'                                                                                                 ] , sources: [] , cover_art:["imagenes/CDs/Lasting_Song_Anime_Edition.webp"                 ]}
    ]

function analyzeAndAddFiles(files) {
  function findMatchingSong(fileName) {
    const normalizedName = fileName.replace(/\.[^/.]+$/, ""); // Elimina la extensión del archivo 
    const offVocalizedName = normalizedName.replace(" (Off_Vocal)", "");

    let matchingSongIndex = -1;

    for (let i = songs.length - 1; i >= 0; i--) {
      const song = songs[i];
      if (song.name === normalizedName || song.name === offVocalizedName) {
        matchingSongIndex = i;
        break;
      }
    }

    return matchingSongIndex;
  }

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var fileName = file.name;

    // Busca que el archivo 
    var matchingSongIndex = findMatchingSong(fileName);

    if (matchingSongIndex !== -1) {
      
      if (fileName.includes("(Off_Vocal)")) { // Revisa si el archivo es instrumental
        //en posición 1 para que sea seleccionable después y reemplaze cargas previas
        songs[matchingSongIndex].sources[1] = URL.createObjectURL(file);
      } else {
        //en posición 0 para que sea seleccionable después y reemplaze cargas previas
        songs[matchingSongIndex].sources[0] = URL.createObjectURL(file);
      }
    }
  }
}


  var audioContext = null; //No hay contexto de audio incial ni canvas hasta que se crea.
  var analyzer = null;
  var canvas = null;
  var canvasContext = null;
  var dataArray = null;
  var bufferLength = null;
  var lastRenderTime = 0;
  var targetFPS = 120;
  var currentSongtitle = null;
  var currentSong = null;
  var OffVocalOn = false;
  var loopMode = false;
  var randomSong = false;
  const currentPlaylist = document.getElementById("Playlist").children[0].children;
  
  window.onload = function(){

  var nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', playNextSong);
  var previousButton = document.getElementById('previousButton');
  previousButton.addEventListener('click', playPreviousSong);
  var addAllButton = document.getElementById('addAllButton');
  addAllButton.addEventListener('click', addAllSongs);

  var timeBar = document.getElementById("timeSlider");
  timeBar.addEventListener("input", function(){
    let duration = audio.duration;
    timeBar.max=duration;
    audio.currentTime = timeBar.value;
  });
  audio.addEventListener("timeupdate", function(){
    let duration = audio.duration;
    let currentTime = audio.currentTime;
    timeBar.max=duration;
    timeBar.value = currentTime;
  });
  //volumen
  var volumeSlider = document.getElementById("songVolume");
  volumeSlider.addEventListener("input", function(){
    audio.volume = volumeSlider.value/1000;  
  })
  //modo loop
  var loopButton = document.getElementById("loop");
    loopButton.addEventListener("click", function(){
      loopMode = !loopMode;
      console.log(loopMode);
    if(loopMode){
      loopButton.style.cssText = "background-color: orange;border-radius: 20%;";
      } else{
        loopButton.style.cssText = "background:transparent";
      }
    });

  //Modo random
  var randomButton = document.getElementById("randomButton");
  randomButton.addEventListener("click", function(){
    randomSong = !randomSong;
  if(randomSong){
      randomButton.style.cssText = "background-color: orange;border-radius: 20%;";
    } else{
      randomButton.style.cssText = "background:transparent";
    }
  });
  
  //Configura el botón de pausa y reproducción
  var playButton = document.getElementById("Play-Pause");
  playButton.addEventListener("click", function(){
    if(!audio.paused){
    playButton.src = ("./imagenes/Utility/music-play-play-button.svg");
    audio.pause();
    }else{
    playButton.src = ("./imagenes/Utility/media-player-music-pause.svg");
    audio.play()
    }
  });
  //Configura el botón de carga de canciones.
  var file = document.getElementById("uploadInput");
  var uploadButtonImage = document.getElementById('uploadButton');
  uploadButtonImage.addEventListener("click", function () {
    file.click();
  });
  //Cambia entre temas normales e instrumentales. Algunos temas no tienen instrumental así que no hace nada en esos casos.
  var karaokeToggle = document.getElementById("karaoke");
  karaokeToggle.addEventListener("click", function(){
    audio.pause()
    let timeStamp = audio.currentTime;
    OffVocalOn = !OffVocalOn;
    console.log(OffVocalOn);
    playSong(songs.indexOf(currentSong));
    audio.currentTime = timeStamp;
    if(OffVocalOn){
      karaokeToggle.style.cssText = "background-color: orange;border-radius: 20%;";
    } else{
      karaokeToggle.style.cssText = "background:transparent";
    }
  });
  
  currentSongtitle = document.getElementById('titulocancionactual');

  file.onchange = function() {
  var files = this.files;
  analyzeAndAddFiles(files);
  }};

  function  initializeContexts(){ //Inicia todas las cosas necesarias para analizar audio
    if (audioContext === null){
      const mainAudioElement = document.getElementById('audio');  //Selecciona el elemento que reproduce el audio
      audioContext = new window.AudioContext({sampleRate: 80000}); //Crea un contexto de audio utilizando la API de javascript audio
      analyzer = audioContext.createAnalyser(); //Crea un analizador de audio ligado al contexto
      canvas = document.getElementById('canvas'); //Crea un elento canvas para después dibujar basado en audio
      canvasContext = canvas.getContext('2d'); //Especifica que va a ser de tipo 2D porque no sé usar webGL
      
      var audioSource = audioContext.createMediaElementSource(mainAudioElement); //Crea una fuente de audio para que el analizador pueda analizar
      audioSource.connect(analyzer); //Conecta el audio al analizador
      analyzer.connect(audioContext.destination); //conecta el analizador a la salida de audio

      analyzer.fftSize = 4096; // Define que tanto nivel de detalle se va a analizar, yo elijo 4096 porque se ve bonito
      analyzer.minDecibels = -100; //Modifica el rango de decibeles a analizar, de -100 a 0.
      analyzer.maxDecibels = -35; //Yo elijo -100|-35 porque se ve más piola
      bufferLength = analyzer.frequencyBinCount; //Cantidad de muestras del audio analizado, lo cual van a ser las barras
      dataArray = new Uint8Array(bufferLength); //Crea un array de datos del 0 al 255, igual a la cantidad de muestras analizadas del audio 
      canvas.width = bufferLength; 
      canvas.height = bufferLength/1.5;

    }
    return {//Devuelve los datos necesarios para que funcione la función de dibujo más tarde
      analyzer: analyzer, 
      canvasContext: canvasContext,
      dataArray: dataArray
    };
  }

  function displayTitleOnCanvas(song){ //Muestra el título y artistas en pantalla cuando se pone una canción
    currentSongtitle.textContent = `${song.name} // ${song.artists.join(" - ")}`;
  }

  function playSong(indexSong){ //Reproduce una canción basado en el array pre-cargad
    
    initializeContexts();
    
    if(OffVocalOn && (songs[indexSong].sources[1] !== undefined)){
      audio.src = songs[indexSong].sources[1]; //Instrumental (si existe y la opción está activada)
    }else if(songs[indexSong].sources[0] !== undefined){
      audio.src = songs[indexSong].sources[0]; //reproducción normal
    }

    audio.load();
    currentSong=songs[indexSong];
    displayTitleOnCanvas(currentSong);
    let playButton = document.getElementById("Play-Pause");
    playButton.src = ("./imagenes/Utility/media-player-music-pause.svg");
    audio.play();
    //Dimensiones del analizador
    var WIDTH = canvas.width; 
    var HEIGHT = canvas.height;
    var HALFHEIGHT = HEIGHT/2;
    var barWidth = (WIDTH / bufferLength)*2;
    var barHeightTop;
    var barHeightBottom;
    var x = 0;
    function renderFrame(timestamp) { //Dibuja barras en la pantalla basado en los datos del analizador
      

      if (timestamp - lastRenderTime < 1000 / targetFPS) { //Primero se fija que sea momento de poner un nuevo frameo
        requestAnimationFrame(renderFrame); //porque si no es continuo y me mata la PC
        return;
      }
      lastRenderTime = timestamp;
      canvasContext.clearRect(0, 0, canvas.width, canvas.height); //Borra el frame anterior para que no se apilen
      x = 0;

      analyzer.getByteFrequencyData(dataArray); //Recibe los valores del sonido en el momento y los pone en el Uint8Array.
      maxValue = (Math.max(...dataArray));
      canvasContext.fillStyle = "rgba(0, 0, 0, 0.950)"; //Fondo base negro
      canvasContext.fillRect(0, 0, WIDTH, HEIGHT);
      
      for (var i = 0; i < bufferLength; i++) {    
        //Mitad de abajo usa una función de raíz cuadrada
        barHeightBottom = clamp((HALFHEIGHT / 16) * Math.sqrt(dataArray[i]), 0 , HALFHEIGHT); 
        //Raiz cuadrada normalizada
        //barHeightBottom = clamp((((HEIGHT/2) / Math.sqrt(maxValue)) * Math.sqrt(dataArray[i])), 0 , HEIGHT/2); ;
        //Mitad de arriba que usa función de potencia cuadrada
        barHeightTop = clamp((HALFHEIGHT/65536)*(dataArray[i]**2), 0 , HALFHEIGHT);
        //potencia normalizada
        //barHeightTop = clamp(((HEIGHT/2)/(maxValue**2))*((dataArray[i]+1)**2), 0 , HEIGHT/2)

        //Función lineal para el color
        var r = (dataArray[i]);
        var g = (255-dataArray[i]);
        var b = 50;
        var o = maxValue;

        canvasContext.fillStyle = "rgb(" + r + "," + g + "," + b + ","+ o +")";
        //Función potencia cuadrada var r = (255/65536)*((dataArray[i]+1)**2)+60; var g = (255/65536)*((dataArray[i]-256)**2)+60; var b = 50; var o = 255; ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ","+ o +")";
        
        canvasContext.fillRect(x, (HALFHEIGHT), barWidth, -barHeightTop);
        //Función raiz cuadrada  r = (255/Math.sqrt(256))*(Math.sqrt(dataArray[i]+1))+60;var g = (255/Math.sqrt(256))*(Math.sqrt(dataArray[i]-256))+60;var b = 50;var o = 255;ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ","+ o +")";
        
        canvasContext.fillRect(x, (HALFHEIGHT), barWidth, barHeightBottom);
        x += barWidth+0.5;
      }
      requestAnimationFrame(renderFrame);

    }

    audio.play();
    requestAnimationFrame(renderFrame);
  };

function playNextSong(){
  if(currentPlaylist.length>0){
    let nextElementPlaylist = document.getElementById("nowPlaying").nextSibling;
    if(randomSong){
      if(nextElementPlaylist!=null){
        currentPlaylist[getRandomInt(0,(currentPlaylist.length-1))].click();
        }
    } else {
      if (loopMode){
        nextElementPlaylist.previousSibling.click();
      } else {
        nextElementPlaylist.click();
      }
  }
}
}

function playPreviousSong(){
  if(currentPlaylist.length>0){
    let previousElementPlaylist = document.getElementById("nowPlaying").previousSibling;
    if(previousElementPlaylist!=null){
      previousElementPlaylist.click();
    }else {currentPlaylist[currentPlaylist.length-1].click()}
    
  }
}
function updatePlaylistPosition() {
      var headerHeight = document.getElementById('header').offsetHeight;
      var slidingBars = document.getElementsByClassName('slidingElement');
      Array.from(slidingBars).forEach(element => {
          if (window.scrollY > headerHeight) {
              element.style.top = "-1vw";
            } else {
                    element.style.top = (headerHeight - window.scrollY) + "px";
                }           
    });
  }
    


var slidingBarButtons = document.getElementsByClassName('img-button');
function modifyElement(event) {
  var slidingBarButton = event.target;
  var barToModify = slidingBarButton.parentElement.previousElementSibling;
  if (barToModify.style.height == "64vh"){
    barToModify.style.height = "0";
  }else{
    barToModify.style.height = "64vh";
  }

}
for (var i = 0; i < slidingBarButtons.length; i++) {
  slidingBarButtons[i].addEventListener('click', modifyElement);
}



window.addEventListener("load", function() {
  updatePlaylistPosition();
});

window.addEventListener("scroll", updatePlaylistPosition);
window.addEventListener("resize", updatePlaylistPosition);




var sortableList = document.querySelector(".sortable-list");
var items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Agrega la clase "dragging" para indicar que se está arrastrando
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Quita la clase "dragging" una vez soltado el elemento
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  const listRect = sortableList.getBoundingClientRect();
  const listScrollTop = sortableList.scrollTop; // Recibe la posición de la bara de scroll
  const mouseY = e.clientY + listScrollTop - listRect.top; // Calcula la posición del mouse relativa a la lista, teniendo en cuenta el scroll
  // Agarra la lista de todos los elemenots no arrastrados
  let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  // encuentra la posición después del elemento sobre el cual se esté arrastrando el otro elemento
  let nextSibling = siblings.find(sibling => {
    return mouseY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Inserta el elemento por encima del otro
  sortableList.insertBefore(draggingItem, nextSibling);
};


sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());

function addElementToPlaylist(songNumber) {
  const song = songs[songNumber]; 
  const newItemList = document.createElement("li");
  newItemList.setAttribute("class", "item");
  newItemList.setAttribute("draggable", "true");
  newItemList.setAttribute("characters", song.characters.join(" - "));
  newItemList.setAttribute("artists", song.artists.join(" - "));
  newItemList.setAttribute("songNumber", songNumber)
  const detailsHTML = `<div class="details"><img class="songThumbnail" src=${song.cover_art}><div><div><span class="song_name">${song.name}</span></div><div><span class="song_artists">${song.artists.join(" - ")}</span></div></div></div>`;
  newItemList.innerHTML = `${detailsHTML}<input type="image" class="delete-button" alt="delete" src="imagenes/Utility/close-square.svg">`;

  newItemList.addEventListener("dragstart", () => {
    setTimeout(() => newItemList.classList.add("dragging"), 0);
  });

  newItemList.addEventListener("dragend", () => {
    newItemList.classList.remove("dragging");
  });

  newItemList.addEventListener("click", (event) => {
    const target = event.target;
    const isDeleteButton = target.classList.contains("delete-button");
    
    if (!isDeleteButton) {
      const parentElement = newItemList.parentElement;
      if (parentElement) {
        for (var child of parentElement.children) {
          child.style.borderColor = "transparent";
          child.removeAttribute("id");
        }
      }
      let indexSong = newItemList.getAttribute("songNumber");
      newItemList.style.borderColor = "#ff8049";
      newItemList.setAttribute("id", "nowPlaying");
      playSong(indexSong);
    }
  });
  
  

  newItemList.querySelector(".delete-button").addEventListener("click", function() {
    if (newItemList.id !== "nowPlaying") {
      newItemList.remove();
    }
  });

  document.getElementById("list").appendChild(newItemList);
}

const input = document.querySelector('#songs');
const suggestions = document.querySelector('.suggestions ul');


function search(str) {
    let results = [];
    const val = str.toLowerCase();
  
    for (let i = 0; i < songs.length; i++) {
      const item = songs[i];
      const songsName = diacriticless(item.name.toLowerCase());
      const characters = item.characters.map(prop => diacriticless(prop.toLowerCase()));
      const season = item.season.map(prop => diacriticless(prop.toLowerCase()));
      const artists = item.artists.map(prop => diacriticless(prop.toLowerCase()));
      const hasMatchingName = songsName.includes(val);
      const hasMatchingCharacter = characters.some(prop => prop.includes(val));
      const hasMatchingSeason= season.some(prop => prop.includes(val));
      const hasMatchingArtists= artists.some(prop => prop.includes(val));

      if (hasMatchingName || hasMatchingCharacter || hasMatchingSeason || hasMatchingArtists) {
        results.push(item.name);
      }
    }
  
    return results;
  }

function searchHandler(e) {
	const inputVal = e.currentTarget.value;
	let results = [];
	if (inputVal.length > 0) {
		results = search(inputVal);
	}
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';

  if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
          let item = results[i];
          const match = item.match(new RegExp(inputVal, 'i'));
          if (match !== null) {
              item = item.replace(match[0], `<strong style='font-weight: 900, color: red;'>${match[0]}</strong>`);
          }
          suggestions.innerHTML += `<li>${item}</li>`;
      }
      suggestions.classList.add('has-suggestions');
  } else {
      results = [];
      suggestions.innerHTML = '';
      suggestions.classList.remove('has-suggestions');
  }
}




function useSuggestion(e) {
	input.value = e.target.innerText;
	input.focus();
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

function submitHandler(e) {
  e.preventDefault();
  const inputVal = diacriticless(input.value.toLowerCase().trim());
  const matchedSong = songs.find(song => diacriticless(song.name.toLowerCase()) === inputVal);
  
  if (matchedSong) {
    const matchedSongNumber = songs.indexOf(matchedSong);
    addElementToPlaylist(matchedSongNumber);
  }

  input.value = '';
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    submitHandler(e);
  }
});

function addAllSongs() {
  songs.forEach((song, index) => {
    addElementToPlaylist(index);
  });
}







