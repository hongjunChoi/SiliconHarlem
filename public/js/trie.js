var Trie = function (courses) {
  this.data = {};
  this.suggestions = [];
  this.courses = courses;
  if (courses.length > 0) {
    courses.forEach(function (course) {
      this.addWord(course);
    }.bind(this));
  }
};

Trie.prototype.addWord = function (course) {
  var courseName = course.name.toUpperCase();
  // creates a node object with course id.
  var courseId = course._id;

  this.addWordRecursor(courseName, this.data, courseId);
};

Trie.prototype.addWordRecursor = function (word, trieNode, courseId) {
  if (word.length === 0) {
    trieNode.end = courseId;
    return;
  } else {
    var firstChar = word.charAt(0);
    var newWord = word.substring(1);
  }
  if (!trieNode.hasOwnProperty(firstChar)) {
    trieNode[firstChar] = {};
  }
  var newNode = trieNode[firstChar];
  this.addWordRecursor(newWord, newNode, courseId);
};

Trie.prototype.getSuggestions = function (sub) {
  var input = sub.toUpperCase();
  this.suggestions = [];
  var firstChar = input.charAt(0);
  if (!this.data.hasOwnProperty(firstChar)) {
    return [];
  } else {
    var trieNode = this.data[firstChar];
  }

  for (var i = 1; i < input.length; i++) {
    var char = input.charAt(i);
    if (trieNode.hasOwnProperty(char)) {
      trieNode = trieNode[char];
    } else {
      return [];
    }
  }
  this.depthFirstSearchPreorderRecursive(trieNode);
  return this.suggestions;
};

// returns each suggestion to add to the output array of suggestions
Trie.prototype.depthFirstSearchPreorderRecursive = function (trieNode) {
  if (trieNode.hasOwnProperty('end')) {
    var id = trieNode.end;
    var suggestionToAdd = {};

    for (var j = 0; j < this.courses.length; j++) {
      if (this.courses[j]._id === id) {
        var courseName = this.courses[j].name.toUpperCase();
        break;
      }
    }
    suggestionToAdd.name = courseName;
    suggestionToAdd._id = id;
    this.suggestions.push(suggestionToAdd);
  } else {
    for (var property in trieNode) {
      if (trieNode.hasOwnProperty(property)) {
        this.depthFirstSearchPreorderRecursive(trieNode[property]);
      }
    }
  }
};

//window.Trie = Trie;
/*var seedData = [
{ _id: 1,
  name: 'CIS197',
  instructor: 'Sibner',
  department: 'CIS',
  reviews: {}},
{ _id: 2,
  name: 'CIS120',
  instructor: 'Weirich',
  department: 'CIS',
  reviews: {}},
{ _id: 3,
  name: 'BIOL121',
  instructor: 'Moorman',
  department: 'BIOL',
  reviews: {}}
];*/
//var trie = new Trie(seedData);

//console.log(JSON.stringify(trie.data, null, '  '));
//console.log(seedData[0].name);

/*
Expected output:
{
  "C": {
    "I": {
      "S": {
        "1": {
          "2": {
            "0": {
              "end": 2
            }
          },
          "9": {
            "7": {
              "end": 1
            }
          }
       }
     }
   }
  },
  "B": {
    "I": {
      "O": {
        "L": {
          "1": {
            "2": {
              "1": {
                "end": 3
              }
            }
          }
        }
      }
    }
  }
}
*/

// console.log(trie.getSuggestions('cis'));
// console.log(trie.getSuggestions('biol'));

/*
   Expected output: [{_id: 1, name: CIS197},
                     {_id: 2, name: CIS120}]
*/

// console.log(trie.getSuggestions(''));

/*
   Expected output: []
*/
