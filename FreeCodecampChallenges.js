// Record collecttion
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== ''){
      records[id][prop] = value
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false){
      records[id][prop] = [value]
    } else if (prop === 'tracks' && value !== ''){
      records[id][prop].push(value)
    } else if (value === ''){
      delete records[id][prop]
    }
    
    return records
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  
  // Shopping list
  var myList = [["Chicken", 5],["Ham", 6],["Bacon", 3],["Water", 2],["Cheese", 8]];
  
  // Stand in Line
  function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
  
    let taken = arr.shift()
  
    return taken;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  
  // Golf
  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  function golfScore(par, strokes) {
    // Only change code below this line
   if (strokes == 1){
      return "Hole-in-one!";
    } else if (strokes <= par - 2){
      return "Eagle";
    } else if (strokes == par - 1){
      return "Birdie";
    } else if (strokes == par){
      return "Par";
    } else if (strokes == par + 1){
      return "Bogey";
    } else if (strokes == par + 2){
      return "Double Bogey";
    } else{
      return "Go Home!";
    }
  }
  
  golfScore(5, 4);
  
  // Counting cards
  var count = 0
  
  function cc(card) {
    // Only change code below this line
  switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--
        break
    }
    if (count > 0){
      return count + " Bet"
    } else{
      return count + " Hold"
    }
  
    // Only change code above this line
  }
  
  cc(2); cc(3); cc(7); cc('K'); cc('A');
  
  // Profile Lookup
  var contacts = [
      {
          "firstName": "Akira",
          "lastName": "Laine",
          "number": "0543236543",
          "likes": ["Pizza", "Coding", "Brownie Points"]
      },
      {
          "firstName": "Harry",
          "lastName": "Potter",
          "number": "0994372684",
          "likes": ["Hogwarts", "Magic", "Hagrid"]
      },
      {
          "firstName": "Sherlock",
          "lastName": "Holmes",
          "number": "0487345643",
          "likes": ["Intriguing Cases", "Violin"]
      },
      {
          "firstName": "Kristian",
          "lastName": "Vos",
          "number": "unknown",
          "likes": ["JavaScript", "Gaming", "Foxes"]
      }
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
      for (let i = 0; i < contacts.length; i++){
          if (contacts[i].firstName === name){
              if (contacts[i].hasOwnProperty(prop)){
                  return contacts[i][prop]
              } else { 
              return "No such property"
              }
          }
      } 
  return "No such contact"
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");