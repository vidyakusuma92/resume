var app = angular.module("sliding-game", ["ngAnimate"]);
var _x = 4;
var _y = 4;

app.controller("indexCtrl", ["$scope", function($scope){

  var nodes = new Array(_x);

  var cnt = 1;

  $scope.init = function (cross){
    // Fill an array
    $scope.cross = cross;
    _x = $scope.cross;
    _y = $scope.cross;

    // Creating a multidimensional array
    nodes = new Array(_x);
    for (var iter = 0; iter < _x; iter++){
      nodes[iter] = new Array(_x);
    }

    var dtArr = []
    // Filling array with numbers
    for (var i = 1; i < ((_x - 1) * (_y - 1)) + 1; i++){
      dtArr.push(i);
    }

    console.log(dtArr);
    // Shuffling the array
    dtArr = shuffle(dtArr);
    console.log(dtArr);

    // Creating nodes for the mesh
    for (var i = 1; i < _x ; i++){
      for(var j = 1; j < _x ; j++){
        nodes[i][j] = new Node(undefined, undefined, undefined, undefined, dtArr.pop(), i, j);
        cnt++;
      }
    }

    // Making the mesh
    for (var i = 1; i < _x ; i++){
      for(var j = 1; j < _x ; j++){
        nodes[i][j].top = getTop(nodes, i, j);
        nodes[i][j].bottom = getBottom(nodes, i, j);
        nodes[i][j].left = getLeft(nodes, i, j);
        nodes[i][j].right = getRight(nodes, i, j);
      }
    }

    $scope.nodes = nodes;
    console.log($scope.nodes);

    $scope.moveBlock = function(node){
      // Check if the node block can move
      var move = canMove(node);

      // If the block can move
      if(move){
        // Swap identifier values
        var temp = node.value;
        node.value = move.value;
        move.value = temp;

        // Swap display texts
        var tdt = node.dt;
        node.dt = move.dt;
        move.dt = tdt;
      }
    }

    $scope.getColLen = function(){
      if(_x == 4){
        return "4";
      }
      else if(_x == 5){
        return "3";
      }
      else if(_x == 7){
        return "2";
      }
      else if(_x == 13){
        return "1";
      }
      else if(_x == 3){
        return "6";
      }
      return "12";
    }
  }
}]);

function canMove(node){
  var retVal = undefined;
  // Check to move top
  if(node.top && node.top.value == ((_x - 1) * (_y - 1))){
    console.log("Can move top");
    retVal = node.top;
  }

  if(node.bottom && node.bottom.value == ((_x - 1) * (_y - 1))){
    console.log("Can move bottom");
    retVal = node.bottom;
  }

  if(node.left && node.left.value == ((_x - 1) * (_y - 1))){
    console.log("Can move left");
    retVal = node.left;
  }

  if(node.right && node.right.value == ((_x - 1) * (_y - 1))){
    console.log("Can move right");
    retVal = node.right;
  }

  if(!retVal){
    console.log("Cannot move");
  }
  return retVal;
}

class Node {
  constructor(left, right, top, bottom, value, x, y) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.value = value;
    this.x = x;
    this.y = y;
    this.dt = value;
    if(value == ((_x - 1) * (_y - 1))){
      this.dt = "";
    }
  }
}

function getTop(nodes, i, j){
  if(i - 1 < 1){
    return undefined;
  }
  else if(nodes[i-1][j] != undefined){
    return nodes[i-1][j];
  }
  else {
    return undefined;
  }
}

function getBottom(nodes, i, j){
  if(i + 1 >= _x){
    return undefined;
  }
  else if(nodes[i+1][j] != undefined){
    return nodes[i+1][j];
  }
  else {
    return undefined;
  }
}

function getLeft(nodes, i, j){
  if(j - 1 < 1){
    return undefined;
  }
  else if(nodes[i][j-1] != undefined){
    return nodes[i][j-1];
  }
  else {
    return undefined;
  }
}

function getRight(nodes, i, j){
  if(j + 1 >= _y){
    return undefined;
  }
  else if(nodes[i][j+1] != undefined){
    return nodes[i][j+1];
  }
  else {
    return undefined;
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
