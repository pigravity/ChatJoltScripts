var songs = {
  questOfTheManwhore: [
    // Quest of the Manwhore
    /Gaze into my choco?late eyes?/i,
    'Let my music sterilise',
    /Let my music ster[ai]li[sz]e/i,
    'Give to me your hard earned coin',
    /Give to me your hard earned coin/i,
    'I\'ll share with you my tortured groin',
    /I\'?ll? share with you my tortured groin/i,
    'What you\'re feeling is not weird',
    /What you(?:\'?re?| are) feeling is not w(?:ei|ie)rd/i,
    'You want to burrow in my beard',
    /You want to b[uo]rrow in my beard/i,
    'Gaze upon my chiselled abs',
    /Gaze upon my chisell?ed abs/i,
    'I no longer have the crabs',
    /I no longer have the crabs/i,
    'My rhymes will grab you by the throat',
    /My rh?[iy]me?s will grab you by the throat/i,
    'And ride you like a sturdy goat',
    /And ride you like a sturdy goat/i,
    'I will drown you in my scent',
    /I will drown you in my scent/i,
    'with or without your consent',
    /with or with[ \-]?out your consent/i,
    'I am a whore of some renown',
    /I am a whore of some rek?nown/i,
    'Your buttocks are my hunting ground',
    /Your buttocks are my hunting ground/i,
    'I am a manwhore without peer',
    /I am a man[ \-]?whore without peer/i,
    'Absorbing sex from the atmosphere',
    /(?:bsorbing|sucking) sex from the atmosphere/i,
    'Pressure building like a cyst',
    /Prea?ss?ure building like a c[yi]st/i,
    'I want to share with you love\'s fist',
    /I want to share with you love\'?s fist/i,
    'I\'ll lick your feet, I\'ll wear a collar',
    /I\'?ll? lick your feet\,? I\'?ll? wear a collar/i,
    'I\'ll do anything for a dollar',
    /I\'?ll? do anything for a dollar/i,
    'I will fit you like a glove',
    /I will fit you like a glove/i,
    'More precious than a father\'s love',
    /More prea?ciou?s than a father\'?s love/i,
    'not that i would really know',
    /not that i would really know/i,
    'I like my women rich and young',
    /I like my women rich and young/i,
    'The kiss of yoghurt on my tongue',
    /The kiss of you?gh?urt on my tongue/i,
    'I wield a fleshy latin sword',
    /I [wy]ield a fleshy latin sword/i,
    'Raptor jesus is my lord',
    /Raptor jesus is my lord/i,
    'Let me be your phantom limb',
    /Let me be your phantom limb/i,
    'Crack and yoghurt keeps me slim',
    /Crack and you?gh?urt keeps? me slim/i,
    'Struggling with modernity',
    /Strugg?ll?ing with modernity/i,
    'A whore for all eternity.'
  ],
  
  danceOfTheManwhore: [
    //Dance of the Manwhore
    /Love as large as bront[oa]sa[uo]r[uo]s/i,
    'Passion like a bleeding walrus',
    /Passion like a bleeding walrus/i,
    'Our love is real it\'s no mirage',
    /Our love is real it(?:\'?s| is) no mirage/i,
    'Want to lock you in my garage',
    /(?:I )?Want to lock you in my garage/i,
    'Climb upon my trusty steed',
    /Climb (?:u|a)pon my trusty steed/i,
    'Later you will taste my seed',
    /Later you will taste my seed/i,
    'This heart of mine is yours to capture',
    /Th(?:is|e) heart of mine is yours to capture/i,
    'From now on til Velocirapture',
    /From now on till? Velocirapt(?:ure|or)/i,
    'Wield my passion like an axe',
    /[WY]ield my passion like an axe/i,
    'It\'s warm and gooey just like wax',
    /It(?:\'?s| is) warm and gooey\,? just like wax/i,
    'You cannot tame such juicy lust',
    /You can(?: ?not|\'?nt) tame such juicy lust/i,
    'Can you withstand my manly musk',
    /Can you withstand my manly musk/i,
    'Roses are red violets are blue',
    /Roses are red\,? violets are blue/i,
    'I must eat yoghurt of off you',
    /I must eat you?gh?urt off? off? you/i,
    'Know that I can never hold back',
    /Know that I can(?: never| not|\'?t) hold back/i,
    'That might be why I smoke the crack',
    'My father never loved me...',
    /That (?:might|may) be why I smoke the crack/i,
    'My father never loved me...',
    /'My father never loved me/i,
    'Love is like a ripened squid',
    /Love is like a ripened squid/i,
    'It stinks with limp appendages',
    /It (?:stinks|re[ea]ks) with limp app?end[ae]ges/i,
    'You scratch the rash that\'s on my ass',
    /(?:You )?scratch the rash that(?:\'?s| is) on my ass/i,
    'The itch only love can surpass',
    /The itch only love can surpass/i,
    'Yoghurt\'s a dish best served chilled',
    /You?gh?urt(?:\'?s| is) a dish best served chill(?:ed)?/i,
    'Forgot to get my prescription filled',
    /Forg[oe]t to get my p(?:re|er)scription fill(?:ed)?/i,
    'Tonight I will have sex with you',
    /Tonight I(?: will|\'?ll?) have sex with you/i,
    'Then we will prepare a stew',
    /Then (?:we|i)(?: will|\'ll?) prepare a stew/i,
    'Just lie down and let me touch',
    /Just lie down and let me touch/i,
    'I promise you it won\'t hurt much',
    /I promise you\,? it won\'?t hurt much/i,
    'Stalk like a lizard of the night',
    /Stalk like a lizard of the night/i,
    'Come closer, Fernando won\'t bite',
    /Come closer\,? Fernando won\'?t bite/i,
    'Tears and screams of pain and pleasure',
    /Tears and screams of pain and pleasure/i,
    'Our gifts we will share forever',
    /(?:Our |The )?gifts we(?: will|\'?ll?) share forever/i,
    /We(?: will|\'?ll?) share our gifts forever/i,
    'Drenched deep in sweaty brine',
    /Drenched deep in sweaty brine/i,
    'Is this blood yours or mine\?'
  ]
};

function checkLines(songName, fromLine, toLine) {
  var song = songs[songName];
  var handled = false;
  for (var i = fromLine; i < toLine; i += 1)
    if (typeof song[i] != 'string')
      if (song[i].test(message.content))
        for (i = i + 1; i < song.length; i += 1) {
          if (typeof song[i] != 'string') {
            if (!handled)
              continue;
            else
              return i;
          }
          
          say(song[i], true);
          handled = true;
        }
  return -1;
}

var now = new Date().getTime();
var songNames = Object.keys(songs);
for (var i = 0; i < songNames.length; i += 1) {
  var song = songs[songNames[i]];
  
  if (typeof storage[songNames[i]] !== 'object')
    storage[songNames[i]] = { progress: 0, lastLineTime: 0 };
  if (now > storage[songNames[i]].lastLineTime + 60000)
    storage[songNames[i]].progress = 0;
  var progress = storage[songNames[i]].progress;
  
  var nextProgress = checkLines(songNames[i], progress, song.length);
  if (nextProgress == -1)
    nextProgress = checkLines(songNames[i], 0, progress);
  
  if (nextProgress != -1) {
    storage[songNames[i]].progress = nextProgress;
    storage[songNames[i]].lastLineTime = now;
    save();
    setHandled(true);
    
    i = songNames.length;
    break;
  }
}