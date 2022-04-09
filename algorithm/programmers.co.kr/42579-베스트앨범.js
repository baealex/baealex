function Song() {
    this.songs = [];
    this.total = 0;
}

function solution(genres, plays) {
    const items = {};
    
    for (const idx in genres) {
        if (!items[genres[idx]]) {
            items[genres[idx]] = new Song();
        }
        
        items[genres[idx]].songs.push({
            idx,
            play: plays[idx],
        });
        
        items[genres[idx]].total += plays[idx];
    }
    
    for (const genre of genres) {
        items[genre].songs.sort((a, b) => {
            return b.play - a.play;
        });
    }
    
    const mostPlayedGenres = [];
    
    for (const genre in items) {
        mostPlayedGenres.push({
            genre,
            total: items[genre].total,
        });
    }
    
    mostPlayedGenres.sort((a, b) => {
        return b.total - a.total;
    });
    
    const answer = [];
    
    for (const mostPlayedGenre of mostPlayedGenres) {
        let counter = 0;
        
        for (const song of items[mostPlayedGenre.genre].songs) {
            answer.push(Number(song.idx));
            counter += 1;
            
            if (counter >= 2) {
                break;
            }
        }
    }
    
    return answer;
}