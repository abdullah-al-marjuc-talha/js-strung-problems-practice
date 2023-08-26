const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.';
const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// ---------------------------------------
// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1)
{
    console.log('exist inside the string')

}
else
console.log('can not found');

// startswith
console.log(lyrics.startsWith('tumi'));

// end with
const fileName = 'myBioData.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');

