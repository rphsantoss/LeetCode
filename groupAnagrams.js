let groupAnagrams = (words1, words2) => {
    words1 = ["roma", "belo", "cabelo"];
    words2 = ["amor", "lobe", "lobeca"];

    let anagramsGroup = {};

    // Loop pelos elementos do array 'words1'
    for (let j = 0; j < words1.length; j++) {
        for (let i = 0; i < words2.length; i++) {
        // Obtemos a palavra atual e a ordenamos para identificar anagramas
        let sortedWord1 = words1[j].split('').sort().join('');

        // Loop pelos elementos do array 'words2'
            let sortedWord2 = words2[i].split('').sort().join('');

            // Verifica se a palavra já foi adicionada a algum grupo de anagramas
            if (sortedWord1 === sortedWord2) {
                // Adiciona ambas as palavras ao grupo correspondente
                if (anagramsGroup.hasOwnProperty(sortedWord1)) {
                    anagramsGroup[sortedWord1].push(words1[j], words2[i]);
                } else {
                    anagramsGroup[sortedWord1] = [words1[j], words2[i]];
                }
            }
        }
    }

    // Retorna um array com os valores (grupos de anagramas) do objeto 'anagramsGroup'
    return Object.values(anagramsGroup);
}

console.log(groupAnagrams());