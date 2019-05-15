input == user.getinput

notes = [  0,
            1,
            2,
            3,
            4,
            5]

// 0: A
// 1: LEFT
// 2: TOP
// 3: RIGHT
// 4: BOTTOM


// song_1: Zelda's Lullaby
// song_2: Epona's Song
// song_3: Saria's Song
// song_4: Sun's Song
// song_5: Song of Time
// song_6: Song of Storms
// song_7: Minute of Forest
// song_8: Bolero of Fire
// song_9: Serenade of Water
// song_10: Requiem of Spirit
// song_11: Nocturne of Shadow
// song_12: Prelude of Light
// song_13: Scarecrow's Song



songlist = { song_1 : [1,2,3,1,2,3],
             song_2 : [],
             song_3 : []
}

// when input received add to array
// if array matches song 1
// 

input_buffer = []

input_checker = > ( input, input_buffer ) {
    
} 

switch (input_buffer.length)
    case: input_buffer.length < 8 
        return note.sound
    case: input_buffer.length = 8
        return note.sound && input_checker