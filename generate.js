
document.body.onload = () => {

  //ELEMENTS
  var container = document.getElementById("container");
  var text = document.getElementById("text");
  var textbox = document.getElementById("textbox");
  var mainbox = document.getElementById("mainbox");
  var otherbox = document.getElementById("otherbox");
  var body = document.body;

  //COLORS
  var lc = "#EFECDD";
  var lmc = "#86D7C8";
  var mc = "#EC6D65";
  var dc = "#5D3D5B";

  //FUNCTIONS
  var colorScheme = (n) => {
    switch(n) {
     case 1:
        return {
          containerColor: lc,
          mainboxColor: lmc,
          otherboxColor: mc,
          textColor: dc
      };
      case 2:
        return {
          containerColor: lmc,
          mainboxColor: dc,
          otherboxColor: lc,
          textColor: mc
      };
      case 3:
        return {
          containerColor: dc,
          mainboxColor: mc,
          otherboxColor: lmc,
          textColor: lc
      };
    }
  }
  var getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var textPlacement = (t, l) => {
    return {
      top: (t*10) + "%",
      left: (l*10) + "%"
    }
  }
  var mainboxPlacement = (edges, height, width) => {
    var h = parseInt(height);
    var w = parseInt(width);
    var top = edges.y ? 0 : getRandom(0, (100-h)/10);
    var left = edges.x ? 0 : getRandom(0, (100-w)/10);
    return {
      top: (top*10) + "%",
      left: (left*10) + "%"
    }
  }
  var otherboxPlacement = (edges, height, width) => {
    var h = parseInt(height);
    var w = parseInt(width);
    var bottom = edges.y ? 0 : getRandom(0, (100-h)/10);
    var right = edges.x ? 0 : getRandom(0, (100-w)/10);
    return {
      bottom: (bottom*10) + "%",
      right: (right*10) + "%"
    }
  }
  var boxEdges = (n) => {
    switch(n) {
      case 1:
        return {
          x: true,
          y: true
        };
      case 2:
        return {
          x: false,
          y: true
        };
      case 3:
        return {
          x: true,
          y: false
        };
      case 4:
        return {
          x: false,
          y: false
        };
    };
  }
  var boxSizing = (h, w) => {
    return {
      height: (h*10) + "%",
      width: (w*10) + "%"
    }
  }
  var colors = colorScheme(getRandom(1, 4));
  var mainboxSize = boxSizing(getRandom(1, 10), getRandom(1, 10));
  var otherboxSize = boxSizing(getRandom(1, 10), getRandom(1, 10));
  var mainboxEdges = boxEdges(getRandom(1,5));
  var otherboxEdges = boxEdges(getRandom(1,5));
  var textPos = textPlacement(getRandom(1, 8), getRandom(1, 5));
  var mainboxPos = mainboxPlacement(mainboxEdges, mainboxSize.height, mainboxSize.width);
  var otherboxPos = otherboxPlacement(otherboxEdges, otherboxSize.height, otherboxSize.width);

  //STYLES
  //colors
  container.style.backgroundColor = colors.containerColor;
  body.style.backgroundColor = colors.containerColor;
  text.style.color = colors.textColor;
  mainbox.style.backgroundColor = colors.mainboxColor;
  otherbox.style.backgroundColor = colors.otherboxColor;

  //positions
  textbox.style.left = textPos.left;
  textbox.style.top = textPos.top;
  mainbox.style.left = mainboxPos.left;
  mainbox.style.top = mainboxPos.top;
  otherbox.style.right = otherboxPos.right;
  otherbox.style.bottom = otherboxPos.bottom;

  //sizes
  mainbox.style.width = mainboxSize.width;
  mainbox.style.height = mainboxSize.height;
  otherbox.style.width = otherboxSize.width;
  otherbox.style.height = otherboxSize.height;

  //transform
  text.style.transform = "translateY(0px)";
}
