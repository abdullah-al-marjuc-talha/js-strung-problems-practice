function reverseWord(str)
{
    const words = str.split(' ')
    console.log(words);

    const result = [];
    for(let i = words.length -1; i >= 0; i--)
    {
        const element = words[i];
        result.push(element);
    }
    console.log(result)
    const reversed = result.join('  ');
    return reversed;
}

const myString = 'i am a good guy.';
reverseWord(myString);
