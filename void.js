document.addEventListener('mousedown', function (e) {
    e.preventDefault();
}, false);

let mainThemeSound = new Audio('sound/backGroundTheme1.mp3');
let levelSoundTheme = new Audio('sound/levelTheme.mp3');
let combo = 0;
let matrix = [];
let condition = false;
let condition2 = true;
let condition3 = true;
let conditionDayPassed = true;
let selected = false;
let firstClickRow = -1;
let firstClickCol = -1;
let firstClickTop = 0;
let firstClickLeft = 0;
let secondClickRow = -1;
let secondClickCol = -1;
let secondClickTop = 0;
let secondClickLeft = 0;
let moves = 5;
let comboArr = [];
let rewardsTaken = 0;
let wood = 4;
let stone = 4;
let metal = 4;
let food = 2;
let water = 2;
let silver = 0;
let gold = 0;
let diamonds = 0;
let day = 1 ;
let matchArrHorizontal = [];
let matchArrVertical = [];
let woodLevel = 0;
let stoneLevel = 0;
let metalLevel = 0;
let foodLevel = 0;
let waterLevel = 0;
let silverLevel = 0;
let goldLevel = 0;
let diamondsLevel = 0;
let specials = 0;
let chanceDiamond = 100;
let chanceGold = 98;
let chanceSilver = 93;
let chanceWater = 83;
let chanceFood = 73;
let chanceMetal = 58;
let chanceStone = 43;
let chanceWood = 28;
let upgradeLvlWood = 0;
let upgradeLvlStone = 0;
let upgradeLvlMetal = 0;
let upgradeLvlFood = 0;
let upgradeLvlWater = 0;
let upgradeLvlSilver = 0;
let upgradeLvlGold = 0;
let upgradeLvlDiamonds = 0;
let woodIncrease = 3;
let stoneIncrease = 3;
let metalIncrease = 3;
let foodIncrease = 1;
let waterIncrease = 1;
let silverIncrease = 0;
let goldIncrease = 0;
let diamondsIncrease = 0;
let rewardOneType;
let rewardTwoType;
let rewardThreeType;
let voidPoints = 0;
let muted = false;

$(document).ready(function () {
    window.open('', '_parent', '');

    start();
});

function start() {
    $(document).ready(function () {
        $("#wrapper").css({
            "background": "url(images/newGameImg1.jpg)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $(".plus").text("+");
        $("#project").css("display", "block");
        $("#project").css("opacity", "0.001");
        $("#newGameSection").fadeIn(2000);
        $("#congratsSection").hide();
        $("#voidPointsSection").hide();
        $("#level").hide();
        $("#getReady").hide();
        $("#endOfDay").hide();
        $("#homeSection").hide();
        $("#instructionsSection").hide();
        $("#upgradeSection").hide();
        $("#shopSection").hide();
        $("#sectionGoals").hide();
        $("#bonus").hide();
        $("#silverLi").hide();
        $("#goldLi").hide();
        $("#diamondLi").hide();
        $("#failDiv").hide();
        $("#btnTryAgain").hide();
        $("#btnExit").hide();
        $("#specialsDiv").css("text-shadow", "none");
        $(".classSpecials").css({
            "opacity": "0.2",
            "box-shadow": "none"
        });
        setTimeout(function () {
            $("#project").css("opacity", "1");
        }, 2000)
    })
}

function exitFunction() {
    window.close();
    window.location.href = "about:blank";
}

function viewUpgrade() {
    $(document).ready(function () {
        $("#wrapper").css({
            "background-image": "url(images/shop.jpg)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });

        $("#shopSection").hide();
        $("#homeSection").hide();
        $("#getReady").hide();
        $("#newGameSection").hide();
        $("#level").hide();
        $("#endOfDay").hide();
        $("#sectionGoals").hide();
        $("#upgradeTable tr td #woodDiv").text("Wood Drop Chance +" + upgradeLvlWood + "%");
        $("#upgradeTable tr td #stoneDiv").text("Stone Drop Chance +" + upgradeLvlStone + "%");
        $("#upgradeTable tr td #metalDiv").text("Metal Drop Chance +" + upgradeLvlMetal + "%");
        $("#upgradeTable tr td #foodDiv").text("Food Drop Chance +" + upgradeLvlFood + "%");
        $("#upgradeTable tr td #waterDiv").text("Water Drop Chance +" + upgradeLvlWater + "%");
        $("#upgradeTable tr td #silverDiv").text("Silver Drop Chance +" + upgradeLvlSilver + "%");
        $("#upgradeTable tr td #goldDiv").text("Gold Drop Chance +" + upgradeLvlGold + "%");
        $("#upgradeTable tr td #diamondDiv").text("Diamonds Drop Chance +" + upgradeLvlDiamonds + "%");
        $(".plus").css({"cursor": "default", "opacity": "0.2", "pointer-events": "none"});
        if (upgradeLvlWood === 0) {
            $("#woodRequirements").text("-requires 10 wood to upgrade");
            if (wood >= 10) {
                $("#plusWood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlWood === 1) {
            $("#woodRequirements").text("-requires 15 wood to upgrade");
            if (wood >= 15) {
                $("#plusWood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlWood === 2) {
            $("#woodRequirements").text("-requires 20 wood to upgrade");
            if (wood >= 20) {
                $("#plusWood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlWood === 3) {
            $("#plusWood").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#woodRequirements").text("-not available")
        }
        if (upgradeLvlStone === 0) {
            $("#stoneRequirements").text("-requires 10 stone to upgrade");
            if (stone >= 10) {
                $("#plusStone").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlStone === 1) {
            $("#stoneRequirements").text("-requires 15 stone to upgrade");
            if (stone >= 15) {
                $("#plusStone").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlStone === 2) {
            $("#stoneRequirements").text("-requires 20 stone to upgrade");
            if (stone >= 20) {
                $("#plusStone").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlStone === 3) {
            $("#plusStone").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#stoneRequirements").text("-not available")
        }
        if (upgradeLvlMetal === 0) {
            $("#metalRequirements").text("-requires 10 metal to upgrade");
            if (metal >= 10) {
                $("#plusMetal").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlMetal === 1) {
            $("#metalRequirements").text("-requires 15 metal to upgrade");
            if (metal >= 15) {
                $("#plusMetal").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlMetal === 2) {
            $("#metalRequirements").text("-requires 20 metal to upgrade");
            if (metal >= 20) {
                $("#plusMetal").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlMetal === 3) {
            $("#plusMetal").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#metalRequirements").text("-not available")
        }
        if (upgradeLvlFood === 0) {
            $("#foodRequirements").text("-requires 7 food to upgrade");
            if (food >= 7) {
                $("#plusFood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlFood === 1) {
            $("#foodRequirements").text("-requires 10 food to upgrade");
            if (food >= 10) {
                $("#plusFood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlFood === 2) {
            $("#foodRequirements").text("-requires 13 food to upgrade");
            if (food >= 13) {
                $("#plusFood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlFood === 3) {
            $("#plusFood").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#foodRequirements").text("-not available")
        }
        if (upgradeLvlWater === 0) {

            $("#waterRequirements").text("-requires 7 water to upgrade");
            if (water >= 7) {
                $("#plusWater").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlWater === 1) {
            $("#waterRequirements").text("-requires 10 water to upgrade");
            if (water >= 10) {
                $("#plusWater").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlWater === 2) {
            $("#waterRequirements").text("-requires 13 water to upgrade");
            if (water >= 13) {
                $("#plusWater").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlWater === 3) {
            $("#plusWater").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#waterRequirements").text("-not available")
        }
        if (upgradeLvlSilver === 0) {

            $("#silverRequirements").text("-requires 5 silver to upgrade");
            if (silver >= 5) {
                $("#plusSilver").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlSilver === 1) {
            $("#silverRequirements").text("-requires 6 silver to upgrade");
            if (silver >= 6) {
                $("#plusSilver").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlSilver === 2) {
            $("#silverRequirements").text("-requires 7 silver to upgrade");
            if (silver >= 7) {
                $("#plusSilver").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlSilver === 3) {
            $("#plusSilver").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#silverRequirements").text("-not available")
        }
        if (upgradeLvlGold === 0) {
            $("#goldRequirements").text("-requires 4 gold to upgrade");
            if (gold >= 4) {
                $("#plusGold").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlGold === 1) {
            $("#goldRequirements").text("-requires 5 gold to upgrade");
            if (gold >= 5) {
                $("#plusGold").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlGold === 2) {
            $("#goldRequirements").text("-requires 6 gold to upgrade");
            if (gold >= 6) {
                $("#plusGold").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlGold === 3) {
            $("#plusGold").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#goldRequirements").text("-not available")
        }
        if (upgradeLvlDiamonds === 0) {
            $("#diamondsRequirements").text("-requires 3 diamonds to upgrade");
            if (diamonds >= 3) {
                $("#plusDiamond").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlDiamonds === 1) {
            $("#diamondsRequirements").text("-requires 4 diamonds to upgrade");
            if (diamonds >= 4) {
                $("#plusDiamond").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlDiamonds === 2) {
            $("#diamondsRequirements").text("-requires 5 diamonds to upgrade");
            if (diamonds >= 5) {
                $("#plusDiamond").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
            }
        }
        else if (upgradeLvlDiamonds === 3) {
            $("#plusDiamond").text("Max").css({
                "width": "80px",
                "opacity": "1",
                "font-size": "35px",
                "pointer-events": "none"
            });
            $("#diamondsRequirements").text("-not available")
        }
        $("#upgradeTable  tr  td").css("background", "transparent");
        $("#voidPointsDiv").css("top", "88px");
        $("#upgradeSection").fadeIn(2000);
        $("#voidPointsSection").fadeIn(2000);
    })
}

function viewShop() {
    $(document).ready(function () {
        $("#wrapper").css({
            "background-image": "url(images/storage.png)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $(".plusShop").css({"cursor": "default", "opacity": "0.2", "pointer-events": "none"});
        if (voidPoints >= 15) {
            $("#plusShopDiamond").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
        }
        if (voidPoints >= 10) {
            $("#plusShopGold").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
        }
        if (voidPoints >= 5) {
            $("#plusShopSilver").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
        }
        if (voidPoints >= 2) {
            $("#plusShopWater").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"});
            $("#plusShopFood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
        }
        if (voidPoints >= 1) {
            $("#plusShopWood").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"});
            $("#plusShopStone").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"});
            $("#plusShopMetal").css({"cursor": "pointer", "pointer-events": "auto", "opacity": "1"})
        }
        $("#upgradeSection").hide();
        $("#homeSection").hide();
        $("#getReady").hide();
        $("#newGameSection").hide();
        $("#level").hide();
        $("#endOfDay").hide();
        $("#sectionGoals").hide();
        $(".pic").html('<img src="images/void.png" style="  height:30px ;width:30px"/>');
        $("#voidPointsDiv").css("top", "96px").text("Void Points:" + voidPoints);
        $("#shopSection").fadeIn(2000)
        $("#voidPointsSection").fadeIn(2000)

    })
}

function viewHome() {
    $(document).ready(function () {
        homeSoundFunction("start");
        $("#wrapper").css({
            "background-image": "url(images/home.jpg)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $("#NewDayButton").text("Day " + day);
        $("#homeSection").fadeIn(2000);
        $("#wood").text("Wood:" + wood);
        $("#stone").text("Stone:" + stone);
        $("#metal").text("Metal:" + metal);
        $("#food").text("Food:" + food);
        $("#water").text("Water:" + water);
        $("#silver").text("Silver:" + silver);
        $("#gold").text("Gold:" + gold);
        $("#diamonds").text("Diamonds:" + diamonds);
        $("#voidPointsDiv").text("Void Points:" + voidPoints).show().css("top", "670px");
        $("#voidPointsSection").fadeIn(2000);
        $("#bonus").hide();
        $("#getReady").hide();
        $("#newGameSection").hide();
        $("#level").hide();
        $("#endOfDay").hide();
        $("#upgradeSection").hide();
        $("#shopSection").hide();
        $("#sectionGoals").hide();
        $(".resourses").fadeIn(2000);
    })
}

function viewInstructions() {
    $(document).ready(function () {
        $("#newGameSection").hide();
        $("#instructionsSection").fadeIn(2000);
        $("#wrapper").css("background", "black")
    })
}

function viewLevel() {
    $(document).ready(function () {
        $("#mainTable").empty();
        matrix = [];
        $("#day").text("Day " + day);
        moves = 5;    //--------------------/////////////////////////////////ORIGINAL CODE
        $("#levelInfo").text("Moves:" + moves);
        $("#getReady").show();
        $("#voidPointsSection").hide();
        $("#homeSection").hide();
        setTimeout(function () {
            $("#divReady").animate({
                fontSize: 0,
                left: "10%",
                top: "22%"
            }, 1000);
            setTimeout(function () {
                $("#wrapper").css({
                    "background": "url(images/cave.jpg)",
                    "background-size": "1150px 800px",
                    "background-repeat": "no-repeat",
                    "background-position": "center"
                });
                $("#getReady").hide();
                $("#goalTable").css({
                    left: "780px",
                    top: "-20px"
                });

                checkSpecialsAtBeginningOfLevel();
                $("#level").show();
                $("#voidPointsSection").show();
                $("li").css("color", "#1A9F9B");
                $("#sectionGoals").show();
                $(".classChecker,.classGoal").show();
                conditionDayPassed = true;
                comboArrFunction("firstFill");
                increaseLevelDemands();
                randomGoals();
                fill()
            }, 1000);
        }, 1200)
    })
}

function viewCongrats() {
    $(document).ready(function () {
        $("#wrapper").css({
            "background-image": "url(images/congrats.jpg)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $("#endOfDay").hide();
        $("#res").hide();
        $("#congratsSection").show();
        celebrateFunction();
        setTimeout(function () {
            $("#congratsSection > p").show();
        }, 4000)
        setTimeout(function () {
            $("#congratsSection").css("overflow", "visible");
            $("#congratsSection > div").fadeIn(8000);
        }, 4500)
    })
}

function heroBlink() {
    $("#hero").html(' <img src="images/sprBlink.png" style="position:absolute;top: 280px;left: 50px;  height:200px ;width:100px"/>')
    setTimeout(function () {
        $("#hero").html(' <img src="images/spr1.png"  style="position:absolute;top: 280px;left: 50px; height:200px ;width:100px"/>')
    }, 100)
}

function viewEndOfDay() {
    $(document).ready(function () {
        $(".classGoal").css("color", "#1A9F9B");
        $("#level").hide();
        $("#voidPointsSection").hide();
        $("#sectionGoals").hide();
        $("#endOfDay").show();
        $("#diveEndOfDay").css("font-size", "45px");
        setTimeout(function () {
            if (day === 50) {
                viewCongrats();
            }
            else if (day % 3 === 0) {
                day++;
                viewBonus()
            }
            else {
                day++;
                viewHome()
            }
        }, 2000)
    })
}

function viewStartDay() {
    $(document).ready(function () {
        $("#newGameSection").hide();
        $("#voidPointsSection").hide();
        $("#level").hide();
        $("#endOfDay").hide();
        $("#home").hide();
        $("#upgradeSection").hide();
        $("#shopSection").hide();
        $("#getReady").show();
    })
}

function viewBonus() {
    $(document).ready(function () {
        $("#wrapper").css({
            "background-image": "url(images/TREASURE+CAVE.jpg)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $("#diveEndOfDay").hide();
        $("#level").hide();
        $("#voidPointsSection").hide();
        $("#bonus").fadeIn(2000);
    })
}

function viewDeath() {
    $(document).ready(function () {
        $("#failDiv").css("opacity", "0.001");
        $("#deathSection").css("display", "block");
        $(".resourses").hide();
        $("#sectionGoals").hide();
        $("#wrapper").css({
            "background-image": "url(images/death.jpg)",
            "background-size": "1150px 800px",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $("#failDiv").show();
        setTimeout(function () {
            $("#failDiv").animate({
                opacity: "1"
            });
            $("#btnTryAgain,#btnExit").fadeIn(8000)
        }, 2600);
        $(".classGoal").css("color", "#1A9F9B");
        loseSound()
    })
}

function randomizeReward(x) {
    let rand = Math.floor((Math.random() * 100) + 1);
    let type;
    let img;
    if (rand > 97) {
        type = 8;
        img = "images/diamond.jpg";
    }
    else if (rand > 93) {
        specials += 1;
        type = 99;
        img = "images/special.jpg";
    }
    else if (rand > 88) {
        type = 7;
        img = "images/gold.jpg";
    }
    else if (rand > 80) {
        type = 6;
        img = "images/silver.jpg";
    }
    else if (rand > 67) {
        type = 5;
        img = "images/water.jpg";
    }
    else if (rand > 54) {
        type = 4;
        img = "images/food.jpg";
    }
    else if (rand > 36) {
        type = 3;
        img = "images/metal.jpg";
    }
    else if (rand > 18) {
        type = 2;
        img = "images/stone.jpg";
    }
    else {
        type = 1;
        img = "images/wood.jpg";
    }
    if (x === 1) {
        rewardOneType = type
    }
    else if (x === 2) {
        rewardTwoType = type
    }
    else {
        rewardThreeType = type
    }
    return img;
}

function animationn(chest) {
    let chestTwo = new Image();
    chestTwo.src = "images/chest2.png";
    let chestThree = new Image();
    chestThree.src = "images/chest3.png";
    let rewardPictureOne = new Image();
    rewardPictureOne.src = randomizeReward(1);
    let rewardPictureTwo = new Image();
    rewardPictureTwo.src = randomizeReward(2);
    let rewardPictureThree = new Image();
    rewardPictureThree.src = randomizeReward(3);
    chestSound();
    if (chest === "chestOne") {
        $("#chestTwo").animate({
            opacity: "0.001"
        }, 1500);
        $("#chestThree").animate({
            opacity: "0.001"
        }, 1500)
    }
    else if (chest === "chestTwo") {
        $("#chestOne").animate({
            opacity: "0.001"
        }, 1500);
        $("#chestThree").animate({
            opacity: "0.001"
        }, 1500)
    }
    else if (chest === "chestThree") {
        $("#chestTwo").animate({
            opacity: "0.001"
        }, 1500);
        $("#chestOne").animate({
            opacity: "0.001"
        }, 1500)
    }
    let whichChest = "#" + chest;
    $(".chests").css("pointer-events", "auto");
    let left;
    switch (chest) {
        case "chestOne":
            left = 30;
            break;
        case "chestTwo":
            left = 164;
            break;
        case "chestThree":
            left = 298;
            break;
    }
    setTimeout(function () {
        $(whichChest).html(chestTwo)
    }, 200);
    setTimeout(function () {
        $(whichChest).html(chestThree);
        $("#reward1").css({
            "visibility": "visible",
            "left": left,
            "opacity": "1",
            "top": "-140"
        }).addClass("rewards").html(rewardPictureOne)
    }, 400);
    setTimeout(function () {
        $("#reward1").animate({
            top: Math.floor((Math.random() * -300) + 1),
            left: Math.floor((Math.random() * 300) + 1),
        }, 500)
    }, 400);
    setTimeout(function () {
        $("#reward1>img").animate({
            width: "+=100px",
            height: "+=100px"
        }, 500)
    }, 400);
    setTimeout(function () {
        $("#reward1").animate({
            top: 10,
            left: 80,
        }, 500)
    }, 1000);
    setTimeout(function () {
        $("#reward1>img").animate({
            width: "-=80px",
            height: "-=80px"
        }, 500)
    }, 1000);
    setTimeout(function () {
        $("#reward2").css({
            "visibility": "visible",
            "opacity": "1",
            "left": left,
            "top": "140"
        }).addClass("rewards").html(rewardPictureTwo)
    }, 400);
    setTimeout(function () {
        $("#reward2").animate({
            top: Math.floor((Math.random() * -300) + 1),
            left: Math.floor((Math.random() * 300) + 1),
        }, 500)
    }, 400);
    setTimeout(function () {
        $("#reward2>img").animate({
            width: "+=100px",
            height: "+=100px"
        }, 500)
    }, 400);
    setTimeout(function () {
        $("#reward2").animate({
            top: -30,
            left: 155,
        }, 500)
    }, 1000);
    setTimeout(function () {
        $("#reward2>img").animate({
            width: "-=80px",
            height: "-=80px"
        }, 500)
    }, 1000);
    setTimeout(function () {
        $("#reward3").css({
            "visibility": "visible",
            "opacity": "1",
            "left": left,
            "top": "140"
        }).addClass("rewards").html(rewardPictureThree)
    }, 400);
    setTimeout(function () {
        $("#reward3").animate({
            top: Math.floor((Math.random() * -300) + 1),
            left: Math.floor((Math.random() * 300) + 1),
        }, 500)
    }, 400);
    setTimeout(function () {
        $("#reward3>img").animate({
            width: "+=100px",
            height: "+=100px"
        }, 500)
    }, 400);
    setTimeout(function () {
        $("#reward3").animate({
            top: -70,
            left: 230,
        }, 500)
    }, 1000);
    setTimeout(function () {
        $("#reward3>img").animate({
            width: "-=80px",
            height: "-=80px"
        }, 500)
    }, 1000);
    $(".chests").css("pointer-events", "none");
    $("#reward1,#reward2,#reward3").css("pointer-events", "none");
    setTimeout(function () {
        $("#reward1,#reward2,#reward3").css("pointer-events", "auto")
    }, 1500)
}

function hoverRewardOne() {
    resourceTakenFunction();
    addingPoints(rewardOneType, 1);
    rewardsTaken++;

    areAllRewardsTaken();
    $("#reward1").css({
        "pointer-events": "none"
    }).animate({
        top: "-=30px"
    }, 50).animate({
        top: "+=30px"
    }, 50);
    setTimeout(function () {
        $("#reward1").css({
            "opacity": "0.001"
        })
    }, 200)
}

function hoverRewardTwo() {
    resourceTakenFunction();
    addingPoints(rewardTwoType, 1);
    rewardsTaken++;

    areAllRewardsTaken();
    $("#reward2").css({
        "pointer-events": "none"
    }).animate({
        top: "-=30px"
    }, 50).animate({
        top: "+=30px"
    }, 50);
    setTimeout(function () {
        $("#reward2").css({
            "opacity": "0.001"
        })
    }, 200)
}

function hoverRewardThree() {
    resourceTakenFunction();
    addingPoints(rewardThreeType, 1);
    rewardsTaken++;

    areAllRewardsTaken();
    $("#reward3").css({
        "pointer-events": "none"
    }).animate({
        top: "-=30px"
    }, 50).animate({
        top: "+=30px"
    }, 50);
    setTimeout(function () {
        $("#reward3").css({
            "opacity": "0.001"
        })
    }, 200)
}

function areAllRewardsTaken() {
    if (rewardsTaken === 3) {
        rewardsTaken = 0;
        setTimeout(function () {
            // viewHome();
            let a = new Image();
            a.src = "images/chest1.png";
            let b = new Image();
            b.src = "images/chest1.png";
            let c = new Image();
            c.src = "images/chest1.png";
            $("#chestOne").css({
                "visibility": "visible",
                "opacity": "1",
                "pointer-events": "auto"
            }).html(a).unbind("click").click(function () {
                animationn('chestOne'), clickFunction()
            });
            $("#chestTwo").css({
                "visibility": "visible",
                "opacity": "1",
                "pointer-events": "auto"
            }).html(b).unbind("click").click(function () {
                animationn('chestTwo'), clickFunction()
            });
            $("#chestThree").css({
                "visibility": "visible",
                "opacity": "1",
                "pointer-events": "auto"
            }).html(c).unbind("click").click(function () {
                animationn('chestThree'), clickFunction()
            });
            $("#reward1").css({
                "position": "relative",
                "left": "30px",
                "top": "-100px",
                "width": "40px",
                "height": "40px",
            });
            $("#reward2").css({
                "position": "relative",
                "left": "164px",
                "top": "-140px",
                "width": "40px",
                "height": "40px",
            });
            $("#reward3").css({
                "position": "relative",
                "left": "298px",
                "top": "-180px",
                "width": "40px",
                "height": "40px",
            })
            $('#bonus').hide()
            viewHome();
        }, 1000)
    }
}

function comboArrFunction(command) {
    if (command === "firstFill") {
        comboArr = [];
        for (row = 0; row < 9; row++) {
            tempArr = [];
            for (col = 0; col < 9; col++) {
                tempArr.push(0)
            }
            comboArr.push(tempArr)
        }
    }
    else if (command === "check") {
        for (row = 0; row < 9; row++) {
            for (col = 0; col < 9; col++) {
                comboArr[row][col] = 0;
            }
        }
    }
}

function fill() {
    $("#mainTable").css("pointer-events", "none");
    $("#comboBlack").height((10 - combo) * 50);
    for (row = 0; row < 9; row++) {
        $("#mainTable").append($("<tr>"));
        let currentRowForArray = [];
        for (col = 0; col < 9; col++) {
            let ran = randomizer();
            if (ran === 1) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>")
                    .addClass("blocks")
                    .append('<img  id="wood" src="images/wood.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (ran === 2) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="stone" src="images/stone.jpg" width="50" height="50"/>')
                    .click(function () {
                        clickHandler();
                    }));
            }
            else if (ran === 3) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="metal" src="images/metal.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (ran === 4) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="food" src="images/food.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (ran === 5) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="water" src="images/water.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (ran === 6) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="silver" src="images/silver.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (ran === 7) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="gold" src="images/gold.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (ran === 8) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="diamond" src="images/diamond.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c, top, left);
                        }
                    }));
            }
            else if (ran === 9) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("void").append('<img id="void" src="images/void.png" width="50" height="50"/>'))
            }
            else if (ran === 10) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="bomba" src="images/bomb.jpg" width="50" height="50"/>')
                    .click(function () {
                        if (selected === false) {
                            $("#mainTable").css("pointer-events", "none");
                            bombExplosion(r, c);
                        }
                        else {
                            try {
                                let off = $(this).offset();
                                let top = Object.values(off)[0];
                                let left = Object.values(off)[1];
                                clickHandler(r, c, top, left);
                            } catch (alt) {
                                clickHandler(r, c);
                            }
                        }
                    }));
            }
            currentRowForArray.push(ran)
        }
        matrix.push(currentRowForArray);
    }
    checkForMatches();
}

function checkForMatches() {
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            let current = matrix[row][col];
            if (current !== 0 && current !== 9) {
                checkHorizontal(row, current, col);
                checkVertical(row, current, col);
            }
        }
    }
    goalCheckerFunction();
    if (matchArrHorizontal.length === 0 && matchArrVertical.length === 0) {
        $("#mainTable").css("pointer-events", "none");
        if (moves <= 0) {
            $(".classSpecials").css("pointer-events", "none");
            setTimeout(function () {
                $("#level,#voidPointsSection").fadeOut(3000, function () {
                    if (conditionDayPassed === true) {
                        $("#goalTable").css({
                            left: "780px",
                            top: "64px"
                        });
                        dayPassed();
                    }
                })
            }, 2000)
        }
        else {
            $("#mainTable").css("pointer-events", "auto")
        }
        comboArrFunction("check");
        return;
    }
    else {
        condition3 = true;
        comboArrFunction("check");
        setTimeout(function () {
            checkerHorizontal();
        }, 200);
        setTimeout(function () {
            checkerVertical();
        }, 200)
    }
}

function fillEmptySlots() {
    condition = false;
    for (j = 0; j < 9; j++) {
        for (i = 8; i > 0; i--) {
            if (matrix[i][j] === 0) {
                if (matrix[i - 1][j] !== 0) {
                    condition = true;
                }
                matrix[i][j] = matrix[i - 1][j];
                matrix[i - 1][j] = 0;
            }
        }
    }
    $("#mainTable").empty();
    matchArrVertical = [];
    matchArrHorizontal = [];
    rearrange();
}

function clickHandler(r, c, top, left) {
    try {
        let parentClick = event.target.tagName.toLowerCase();
        if (parentClick === img) {
            if (selected === false) {
                let offSet = $(event.target).offset();
                $(event.target).parent().css("background", "black");
                let index = $(event.target).parent().index();
                let parentIndex = $(event.target).parent().parent().index();
                firstClickCol = index + 1;
                firstClickRow = parentIndex + 1;
                firstClickTop = offSet.top;
                firstClickLeft = offSet.left;
                clickFunction();
                coloringSurroundings(parentIndex, index);
                selected = true;
            }
            else if (selected === true) {
                let offSet = $(event.target).offset();
                $(".blocks").css("background", "black");
                let index = $(event.target).parent().index();
                let parentIndex = $(event.target).parent().parent().index();
                secondClickCol = index + 1;
                secondClickRow = parentIndex + 1;
                secondClickTop = offSet.top;
                secondClickLeft = offSet.left;
                selected = false;
                inner();
            }
        }
    }
    catch (alt) {
        if (selected === false) {
            $("#mainTable tr").eq(r).children().eq(c).css("background", "black");
            firstClickCol = c + 1;
            firstClickRow = r + 1;
            firstClickTop = top;
            firstClickLeft = left;

            clickFunction();
            coloringSurroundings(r, c);
            selected = true;
        }
        else {
            $(".blocks").css("background", "black");
            secondClickCol = c + 1;
            secondClickRow = r + 1;
            secondClickTop = top;
            secondClickLeft = left;
            selected = false;
            inner();
        }
    }
}

function inner() {
    if ((Math.abs(firstClickRow) - Math.abs(secondClickRow) === 1) && (Math.abs(firstClickCol) - Math.abs(secondClickCol) === 0) ||
        (Math.abs(firstClickRow) - Math.abs(secondClickRow) === -1) && (Math.abs(firstClickCol) - Math.abs(secondClickCol) === 0) ||
        (Math.abs(firstClickRow) - Math.abs(secondClickRow) === 0) && (Math.abs(firstClickCol) - Math.abs(secondClickCol) === 1) ||
        (Math.abs(firstClickRow) - Math.abs(secondClickRow) === 0) && (Math.abs(firstClickCol) - Math.abs(secondClickCol) === -1)) {
        heroHitFunction();
        firstClickTop = (firstClickTop + 66) + "px";
        firstClickLeft = (firstClickLeft + 66) + "px";
        secondClickTop = (secondClickTop + 66) + "px";
        secondClickLeft = (secondClickLeft + 66) + "px";
        moves -= 1;
        $("#levelInfo").text("Moves:" + moves);
        $("#mainTable tr").eq(firstClickRow - 1).children().eq(firstClickCol - 1).animate({
            top: "100px",//secondClickTop,
            left: "100px"//secondClickLeft
        }, 500);
        $("#mainTable tr").eq(secondClickRow - 1).children().eq(secondClickCol - 1).animate({
            top: firstClickTop,
            left: firstClickLeft
        }, 500);
        let temp = matrix[firstClickRow - 1][firstClickCol - 1];
        matrix[firstClickRow - 1][firstClickCol - 1] = matrix[secondClickRow - 1][secondClickCol - 1];
        matrix[secondClickRow - 1][secondClickCol - 1] = temp;
        heroHit();
        setTimeout(function () {
            checkForMatches();
        }, 0);
        setTimeout(function () {
            fillEmptySlots()
        }, 0);
    }
    else {
        setTimeout(function () {
            fillEmptySlots()
        }, 0);
    }
}

function coloringSurroundings(r, c) {
    let parentIndex = r;
    let index = c;
    let up = parentIndex - 1;
    let down = parentIndex + 1;
    let left = index - 1;
    let right = index + 1;
    $(".blocks,.void").css("opacity", "0.5")
    $("#mainTable tr:nth-child(" + (up + 2 ) + ") td:nth-child(" + (index + 1) + ")").css({
        "box-shadow": "0 0 6px 6px white",
        "opacity": "1"
    });
    if (parentIndex !== 0) {
        if (matrix[up][index] !== 9) {
            $("#mainTable tr:nth-child(" + (up + 1) + ") td:nth-child(" + (index + 1) + ")").css({
                "box-shadow": "0 0 6px 6px green",
                "opacity": "1"
            })
        }
    }
    if (parentIndex !== 8) {
        if (matrix[down][index] !== 9) {
            $("#mainTable tr:nth-child(" + (down + 1) + ") td:nth-child(" + (index + 1) + ")").css({
                "box-shadow": "0 0 6px 6px green",
                "opacity": "1"
            })
        }
    }
    if (index !== 0) {
        if (matrix[parentIndex][left] !== 9) {
            $("#mainTable tr:nth-child(" + (parentIndex + 1 ) + ") td:nth-child(" + (left + 1 ) + ")").css({
                "box-shadow": "0 0 6px 6px green",
                "opacity": "1"
            })
        }
    }
    if (index !== 8) {
        if (matrix[parentIndex][right] !== 9) {
            $("#mainTable :nth-child(" + (parentIndex + 1 ) + ") td:nth-child(" + (right + 1 ) + ")").css({
                "box-shadow": "0 0 6px 6px green",
                "opacity": "1"
            })
        }
    }
}

function rearrange() {
    $("#mainTable").css("pointer-events", "none");
    for (row = 0; row < 9; row++) {
        $("#mainTable").append($("<tr>"));
        for (col = 0; col < 9; col++) {
            if (matrix[row][col] === 0) {
                $("#mainTable tr").eq(row).append($("<td>")
                    .addClass("blocks"))
            }
            else if (matrix[row][col] === 1) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>")
                    .addClass("blocks")
                    .append('<img id="wood" src="images/wood.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 2) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>")
                    .addClass("blocks")
                    .append('<img id="stone" src="images/stone.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 3) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="metal" src="images/metal.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 4) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="food" src="images/food.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 5) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="water" src="images/water.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 6) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="silver" src="images/silver.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 7) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="gold" src="images/gold.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 8) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="diamond" src="images/diamond.jpg" width="50" height="50"/>')
                    .click(function () {
                        try {
                            let off = $(this).offset();
                            let top = Object.values(off)[0];
                            let left = Object.values(off)[1];
                            clickHandler(r, c, top, left);
                        } catch (alt) {
                            clickHandler(r, c);
                        }
                    }));
            }
            else if (matrix[row][col] === 9) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("void").append('<img id="void" src="images/void.png" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 10) {
                let r = row;
                let c = col;
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="bomba" src="images/bomb.jpg" width="50" height="50"/>')
                    .click(function () {
                        if (selected === false) {
                            $("#mainTable").css("pointer-events", "none");
                            bombExplosion(r, c);
                        }
                        else {
                            try {
                                let off = $(this).offset();
                                let top = Object.values(off)[0];
                                let left = Object.values(off)[1];
                                clickHandler(r, c, top, left);
                            } catch (alt) {
                                clickHandler(r, c);
                            }
                        }
                    }));
            }
        }
    }
    if (condition === true) {
        matchArrVertical = [];
        matchArrHorizontal = [];
        setTimeout(function () {
            fillEmptySlots()
        }, 100);
    }
    else if (condition2 === true) {
        matchArrVertical = [];
        matchArrHorizontal = [];
        setTimeout(function () {
            fillEmptySlots()
        }, 100);
        condition2 = false;
    }
    else if (condition3 === true) {
        matchArrVertical = [];
        matchArrHorizontal = [];
        setTimeout(function () {
            newRandomSlots()
        }, 100);
    }
    else {
        matchArrVertical = [];
        matchArrHorizontal = [];
        setTimeout(function () {
            checkForMatches();
        }, 100);
        condition2 = true;
    }
}

function bombExplosion(row, col) {
    let tempCondition = false;
    bombSound();
    moves -= 1;
    $("#levelInfo").text("Moves:" + moves);
    $("#mainTable tr").eq(row).children().eq(col).animate({
        opacity: 0
    }, 0, function () {
        $("#mainTable tr").eq(row).children().eq(col).empty();
        $("#mainTable tr").eq(row).children().eq(col).animate({
            opacity: 1
        }, 0);
        $("#mainTable tr").eq(row).children().eq(col).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
    }, 0)

    $("#mainTable tr").eq(row).children().eq(col).contents().filter("img").animate({
        opacity: 0
    }, 333)
    matrix[row][col] = 0;
    $("#mainTable tr").eq(row).children().eq(col).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red");
    if (col !== 0) {
        if (matrix[row][col - 1] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row).children().eq(col - 1).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row).children().eq(col - 1).empty();
            $("#mainTable tr").eq(row).children().eq(col - 1).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row).children().eq(col - 1).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0)

        $("#mainTable tr").eq(row).children().eq(col - 1).contents().filter("img").animate({
            opacity: 0
        }, 333)
        matrix[row][col - 1] = 0;
        $("#mainTable tr").eq(row).children().eq(col - 1).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    if (col !== 0 && row !== 0) {
        if (matrix[row - 1][col - 1] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row - 1).children().eq(col - 1).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row - 1).children().eq(col - 1).empty();
            $("#mainTable tr").eq(row - 1).children().eq(col - 1).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row - 1).children().eq(col - 1).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0)

        $("#mainTable tr").eq(row - 1).children().eq(col - 1).contents().filter("img").animate({
            opacity: 0
        }, 333)
        matrix[row - 1][col - 1] = 0;
        $("#mainTable tr").eq(row - 1).children().eq(col - 1).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    if (row !== 0) {
        if (matrix[row - 1][col] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row - 1).children().eq(col).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row - 1).children().eq(col).empty();
            $("#mainTable tr").eq(row - 1).children().eq(col).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row - 1).children().eq(col).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0)
        $("#mainTable tr").eq(row - 1).children().eq(col).contents().filter("img").animate({
            opacity: 0
        }, 333)
        matrix[row - 1][col] = 0;
        $("#mainTable tr").eq(row - 1).children().eq(col).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    if (row !== 0 && col !== 8) {

        if (matrix[row - 1][col + 1] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row - 1).children().eq(col + 1).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row - 1).children().eq(col + 1).empty();
            $("#mainTable tr").eq(row - 1).children().eq(col + 1).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row - 1).children().eq(col + 1).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0)
        $("#mainTable tr").eq(row - 1).children().eq(col + 1).contents().filter("img").animate({
            opacity: 0
        }, 333)
        matrix[row - 1][col + 1] = 0;
        $("#mainTable tr").eq(row - 1).children().eq(col + 1).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }


    if (col !== 8) {
        if (matrix[row][col + 1] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row).children().eq(col + 1).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row).children().eq(col + 1).empty();
            $("#mainTable tr").eq(row).children().eq(col + 1).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row).children().eq(col + 1).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0)
        $("#mainTable tr").eq(row).children().eq(col + 1).contents().filter("img").animate({
            opacity: 0
        }, 333);
        matrix[row][col + 1] = 0;
        $("#mainTable tr").eq(row).children().eq(col + 1).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    if (row !== 8 && col !== 8) {
        if (matrix[row + 1][col + 1] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row + 1).children().eq(col + 1).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row + 1).children().eq(col + 1).empty();
            $("#mainTable tr").eq(row + 1).children().eq(col + 1).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row + 1).children().eq(col + 1).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0);
        $("#mainTable tr").eq(row + 1).children().eq(col + 1).contents().filter("img").animate({
            opacity: 0
        }, 333);
        matrix[row + 1][col + 1] = 0;
        $("#mainTable tr").eq(row + 1).children().eq(col + 1).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    if (row !== 8) {
        if (matrix[row + 1][col] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row + 1).children().eq(col).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row + 1).children().eq(col).empty();
            $("#mainTable tr").eq(row + 1).children().eq(col).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row + 1).children().eq(col).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0);
        $("#mainTable tr").eq(row + 1).children().eq(col).contents().filter("img").animate({
            opacity: 0
        }, 333);
        matrix[row + 1][col] = 0;
        $("#mainTable tr").eq(row + 1).children().eq(col).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    if (row !== 8 && col !== 0) {
        if (matrix[row + 1][col - 1] === 9) {
            voidPoints += 1;
            tempCondition = true;
        }
        $("#mainTable tr").eq(row + 1).children().eq(col - 1).animate({
            opacity: 0
        }, 0, function () {
            $("#mainTable tr").eq(row + 1).children().eq(col - 1).empty();
            $("#mainTable tr").eq(row + 1).children().eq(col - 1).animate({
                opacity: 1
            }, 0);
            $("#mainTable tr").eq(row + 1).children().eq(col - 1).append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
        }, 0);
        $("#mainTable tr").eq(row + 1).children().eq(col - 1).contents().filter("img").animate({
            opacity: 0
        }, 333);
        setTimeout(function () {
            $(".blocks,.void").css({
                "border": "1px solid gold"
            })
        }, 333);
        matrix[row + 1][col - 1] = 0;
        $("#mainTable tr").eq(row + 1).children().eq(col - 1).css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
    }
    condition3 = true;
    if (tempCondition === true) {
        $("#voidPointsDiv").css({
            "color": "red",
            "text-shadow": "-1px 0px 5px yellow, 1px 0px 5px yellow,0px 0px 5px yellow,0px 0px 5px yellow,-1px 0px 12px orange, 1px 0px 12px orange,0px 0px 12px orange,0px 0px 12px orange"
        });
        setTimeout(function () {
            $("#voidPointsDiv").css({
                "color": "red",
                "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
            })
        }, 500);
        $("#voidPointsDiv").text("Void Points:" + voidPoints)
    }
    setTimeout(function () {
        fillEmptySlots();
    }, 500);
}

function newRandomSlots() {
    $("#mainTable").css("pointer-events", "none");
    condition3 = false;
    $("#mainTable").empty();
    matchArrVertical = [];
    matchArrHorizontal = [];
    for (col = 0; col < 9; col++) {
        if (matrix[0][col] === 0) {
            matrix[0][col] = randomizer();
            condition3 = true;
        }
    }
    for (row = 0; row < 9; row++) {
        $("#mainTable").append($("<tr>"));
        for (col = 0; col < 9; col++) {
            if (matrix[row][col] === 0) {
                $("#mainTable tr").eq(row).append($("<td>")
                    .addClass("blocks"))
            }
            else if (matrix[row][col] === 1) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="wood" src="images/wood.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 2) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="stone" src="images/stone.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 3) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="metal" src="images/metal.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 4) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="food" src="images/food.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 5) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="water" src="images/water.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 6) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="silver" src="images/silver.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 7) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="gold" src="images/gold.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 8) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="diamond" src="images/diamond.jpg" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 9) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("void").append('<img id="void" src="images/void.png" width="50" height="50"/>'))
            }
            else if (matrix[row][col] === 10) {
                $("#mainTable tr").eq(row).append($("<td>").addClass("blocks").append('<img id="bomba" src="images/bomb.jpg" width="50" height="50"/>'))
            }
        }
    }
    if (condition3 === true) {
        for (j = 0; j < 9; j++) {
            for (i = 8; i > 0; i--) {
                if (matrix[i][j] === 0) {
                    matrix[i][j] = matrix[i - 1][j];
                    matrix[i - 1][j] = 0;
                }
            }
        }
        setTimeout(function () {
            newRandomSlots()
        }, 300)
    }
    else {
        fillEmptySlots()
    }
}

function checkerHorizontal() {
    let length = 0;
    let inter = setInterval(intt, 0);

    function intt() {
        if (length < matchArrHorizontal.length) {
            horizontalMatchesFunction(matchArrHorizontal[length]);
            length++;
        } else {
            clearInterval(inter);
        }
    }

    comboArrFunction("check");
}

function checkerVertical() {
    let length = 0;
    let inter = setInterval(intt, 0);

    function intt() {
        if (length < matchArrVertical.length) {
            verticalMatchesFunction(matchArrVertical[length]);
            length++;
        } else {
            goalCheckerFunction();
            setTimeout(function () {
                fillEmptySlots();
            }, 750);
            matchArrVertical = [];
            matchArrHorizontal = [];
            clearInterval(inter);
        }
    }

    comboArrFunction("check");
}
function checkHorizontal(row, current, col) {
    let matches = 1;
    let resourseType = current;
    if (col !== 0 && current !== 9 && current === matrix[row][col - 1]) {
        return 0;
    }
    for (i = col + 1; i < 9; i++) {
        if (current === matrix[row][i]) {
            matches++;
        }
        else {
            break;
        }
    }
    if (matches >= 3) {
        matchArrHorizontal.push([row, col, matches, resourseType]);
        return matches;
    }
    else {
        return 0;
    }
}

function checkVertical(row, current, col) {
    let matches = 1;
    let resourseType = current;
    if (row !== 0 && current !== 9 && current === matrix[row - 1][col]) {
        return 0;
    }
    for (i = row + 1; i < 9; i++) {
        if (current === matrix[i][col]) {
            matches++;
        }
        else {
            break;
        }
    }
    if (matches >= 3) {
        matchArrVertical.push([row, col, matches, resourseType]);
        return matches;
    }
    else {
        return 0;
    }
}

function horizontalMatchesFunction(x) {
    let currentMatches = 0;
    let inter = setInterval(explosion, 10);//originally 100!!!!!!!!!!!!!!
    addingPoints(x[3], x[2]);
    if (x[2] > 4) {
        moves += (x[2]) - 4;
        $("#levelInfo").text("Moves:" + moves);
        movesPlusOneFunction();
    }
    if (x[2] > 3) {
        combo += x[2] - 3;
        comboBarWidthFunction();
        glowingComboBar()
    }
    else {
        matchFunction()
    }
    function explosion() {
        let xx = x[0] + 1;
        let y = x[1] + 1 + currentMatches;
        if (currentMatches < x[2]) {
            $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").animate({
                opacity: 0
            }, 0, function () {
                $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").empty();
                $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").animate({
                    opacity: 1
                }, 0);
                $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").append('<img id="def" src="images/explosion.jpg" width="50" height="50"/>');
            }, 0);
            $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ") img").animate({
                opacity: 0
            }, 333);
            $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red");
            matrix[xx - 1][y - 1] = 0;
            comboArr[xx - 1][y - 1]++;
            if (comboArr[xx - 1][y - 1] >= 2) {
                combo += 2;
                moves += (comboArr[xx - 1][y - 1]) - 1;
                $("#levelInfo").text("Moves:" + moves);
                movesPlusOneFunction();
                comboBarWidthFunction();
                glowingComboBar()
            }
            currentMatches++;
        }
        else {
            clearInterval(inter);
        }
    }
}

function addingPoints(type, matches) {
    let color;
    switch (type) {
        case 1:
            wood += matches;
            $("#wood").text("Wood:" + wood).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "wood";
            break;
        case 2:
            stone += matches;
            $("#stone").text("Stone:" + stone).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "stone";
            break;
        case 3:
            metal += matches;
            $("#metal").text("Metal:" + metal).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "metal";
            break;
        case 4:
            food += matches;
            $("#food").text("Food:" + food).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "food";
            break;
        case 5:
            water += matches;
            $("#water").text("Water:" + water).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "water";
            break;
        case 6:
            silver += matches;
            $("#silver").text("Silver:" + silver).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "silver";
            break;
        case 7:
            gold += matches;
            $("#gold").text("Gold:" + gold).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "gold";
            break;
        case 8:
            diamonds += matches;
            $("#diamonds").text("Diamonds:" + diamonds).css("color", "#1A9F9B").css("text-shadow", "1px 1px black");
            color = "diamonds";
            break;
        default:
            break;
    }
    $("#" + color).css({
        "color": "red",
        "text-shadow": "-1px 0px 5px yellow, 1px 0px 5px yellow,0px 0px 5px yellow,0px 0px 5px yellow,-1px 0px 12px orange, 1px 0px 12px orange,0px 0px 12px orange,0px 0px 12px orange"
    });
    setTimeout(function () {
        $("#" + color).css({
            "color": "black",
            "text-shadow": " 1px 1px gold"
        })
    }, 500);
}

function verticalMatchesFunction(x) {
    let currentMatches = 0;
    let inter = setInterval(explosion, 10);
    addingPoints(x[3], x[2]);
    if (x[2] > 4) {
        moves += (x[2]) - 4;
        $("#levelInfo").text("Moves:" + moves);
        movesPlusOneFunction();
    }
    if (x[2] > 3) {
        combo += x[2] - 3;
        comboBarWidthFunction();
        glowingComboBar()
    }
    else {
        matchFunction()
    }
    function explosion() {
        let xx = x[0] + 1 + currentMatches;
        let y = x[1] + 1;
        if (currentMatches < x[2]) {
            matrix[xx - 1][y - 1] = 0;
            comboArr[xx - 1][y - 1]++;
            $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").animate({
                opacity: 0
            }, 0, function () {
                $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").empty();
                $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").animate({
                    opacity: 1
                }, 0);
                $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").append('<img id="explode" src="images/explosion.jpg" width="50" height="50"/>');
            }, 0);
            $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ") img").animate({
                opacity: 0
            }, 333);
            $("#mainTable tr:nth-child(" + xx + ") td:nth-child(" + y + ")").css("box-shadow", "0 0 20px 25px gold,0 0 10px 20px red")
            if (comboArr[xx - 1][y - 1] >= 2) {
                combo += 2;
                moves += (comboArr[xx - 1][y - 1]) - 1;
                $("#levelInfo").text("Moves:" + moves);
                movesPlusOneFunction();
                comboBarWidthFunction();
                glowingComboBar()
            }
            currentMatches++;
        }
        else {
            clearInterval(inter);
        }
    }
}

function glowingComboBar() {
    $("#comboGold").css("box-shadow", "0px 0px 70px 15px black");
    $("#comboGold").css("box-shadow", "0px 0px 100px 40px #1A9F9B");
    setTimeout(function () {
        $("#comboGold").css("box-shadow", "0px 0px 70px 15px black,0px 0px 160px 80px #1A9F9B")
    }, 333);
    setTimeout(function () {
        $("#comboGold").css("box-shadow", "0px 0px 70px 15px black,0px 0px 225px 80px #1A9F9B")
    }, 333);
    setTimeout(function () {
        $("#comboGold").css("box-shadow", "0px 0px 70px 15px black,0px 0px 275px 40px #1A9F9B")
    }, 333)
}

function randomizer() {
    let rand = Math.floor((Math.random() * 100) + 1);
    if (rand === 1) {
        return 10;
    }
    else if (rand >= chanceDiamond) {
        return 8;
    }
    else if (rand >= chanceGold) {
        return 7;
    }
    else if (rand >= chanceSilver) {
        return 6;
    }
    else if (rand >= chanceWater) {
        return 5;
    }
    else if (rand >= chanceFood) {
        return 4;
    }
    else if (rand >= chanceMetal) {
        return 3;
    }
    else if (rand >= chanceStone) {
        return 2;
    }
    else if (rand >= chanceWood) {
        return 1;
    }
    else {
        return 9;
    }
}

function goalCheckerFunction() {
    if (wood >= woodLevel) {
        $("#woodChecker").html("\u2713").css("color", "green")
    }
    if (stone >= stoneLevel) {
        $("#stoneChecker").html("\u2713").css("color", "green")
    }
    if (metal >= metalLevel) {
        $("#metalChecker").html("\u2713").css("color", "green")
    }
    if (food >= foodLevel) {
        $("#foodChecker").html("\u2713").css("color", "green")
    }
    if (water >= waterLevel) {
        $("#waterChecker").html("\u2713").css("color", "green")
    }
    if (silver >= silverLevel) {
        $("#silverChecker").html("\u2713").css("color", "green")
    }
    if (gold >= goldLevel) {
        $("#goldChecker").html("\u2713").css("color", "green")
    }
    if (diamonds >= diamondsLevel) {
        $("#diamondsChecker").html("\u2713").css("color", "green")
    }
}

function randomGoals() {
    let tempWood = Math.floor((Math.random() * 3) + woodIncrease);
    woodLevel = tempWood;
    $("#woodGoal").text("Have " + (tempWood) + " Wood");
    $("#woodChecker").html("\u2717").css("color", "red");
    let tempStone = Math.floor((Math.random() * 3) + stoneIncrease);
    stoneLevel = tempStone;
    $("#stoneGoal").text("Have " + (tempStone) + " Stone");
    $("#stoneChecker").html("\u2717").css("color", "red");
    let tempMetal = Math.floor((Math.random() * 3) + metalIncrease);
    metalLevel = tempMetal;
    $("#metalGoal").text("Have " + (tempMetal) + " Metal");
    $("#metalChecker").html("\u2717").css("color", "red");
    let tempFood = Math.floor((Math.random() * 3) + foodIncrease);
    foodLevel = tempFood;
    $("#foodGoal").text("Have " + (tempFood) + " Food");
    $("#foodChecker").html("\u2717").css("color", "red");
    let tempWater = Math.floor((Math.random() * 3) + waterIncrease);
    waterLevel = tempWater;
    $("#waterGoal").text("Have " + (tempWater) + " Water");
    $("#waterChecker").html("\u2717").css("color", "red");
    silverLevel = silverIncrease;
    if (silverLevel > 0) {
        $("#silverLi").show();
        $("#silverGoal").show().text("Have " + (silverLevel) + " Silver");
        $("#silverChecker").show().html("\u2717").css("color", "red")
    }
    else {
        $("#silverGoal").hide();
        $("#silverChecker").hide()
    }
    goldLevel = goldIncrease;
    if (goldLevel > 0) {
        $("#goldLi").show();
        $("#goldGoal").show().text("Have " + (goldLevel) + " Gold");
        $("#goldChecker").show().html("\u2717").css("color", "red")
    }
    else {
        $("#goldGoal").hide();
        $("#goldChecker").hide()
    }
    diamondsLevel = diamondsIncrease;
    if (diamondsLevel > 0) {
        $("#diamondLi").show();
        $("#diamondsGoal").show().text("Have " + (diamondsLevel) + " Diamonds");
        $("#diamondsChecker").show().html("\u2717").css("color", "red")
    }
    else {
        $("#diamondsGoal").hide();
        $("#diamondsChecker").hide()
    }
}

function checkSpecialsAtBeginningOfLevel() {
    if (specials > 0) {
        $("#specialsDiv").text("Specials:" + specials);
        $("#specialsDiv").css("text-shadow", "rgb(7, 11, 10) -1px 0px 5px, black 1px 0px 5px, #585841 0px 0px 5px," +
            " #51512a 0px 0px 5px, #cf8c10 -1px 0px 12px, #e9e7e4 1px 0px 12px, #a8a8a8 0px 0px 12px, #ffe4b2 0px 0px 12px");
        $(".classSpecials").css({
            "cursor": "pointer",
            "pointer-events": "auto",
            "opacity": "1",
            "box-shadow": "0px 0px 50px 5px red,0px 0px 70px 20px gold"
        });
    }
    else {
        $(".classSpecials").css("opacity", "0.2");
        $(".classSpecials").css("cursor", "default");
        $(".classSpecials").css("pointer-events", "none");
        $("#specialsDiv").text("Specials:" + specials)
    }
}

function comboBarWidthFunction() {
    if (combo >= 10) {
        comboBarFullFunction();
        combo -= 10;
        specials++;
        $(".classSpecials").css({
            "cursor": "pointer",
            "pointer-events": "auto",
            "opacity": "1",
            "box-shadow": "0px 0px 50px 5px red,0px 0px 70px 20px gold"
        });
        $("#specialsDiv").css("text-shadow", "rgb(7, 11, 10) -1px 0px 5px, black 1px 0px 5px, #585841 0px 0px 5px," +
            " #51512a 0px 0px 5px, #cf8c10 -1px 0px 12px, #e9e7e4 1px 0px 12px, #a8a8a8 0px 0px 12px, #ffe4b2 0px 0px 12px")
    }
    else {
        comboBarFunction()
    }
    $("#comboBlack").height((10 - combo) * 50);
    $("#specialsDiv").text("Specials:" + specials)
}

function dayPassed() {
    let additionalMiliseconds = 0;
    levelSound('stop');
    conditionDayPassed = false;
    let resourse;
    setTimeout(function () {
        if (wood < woodLevel) {
            $("#woodGoal").text("Failed").css("color", "red");
            $("#woodGoal").parent().css("color", "red")
        }
        else {
            $("#woodGoal").text("Complete").css("color", "green");
            $("#woodGoal").parent().css("color", "green")
        }
        $("#resourseMinusDiv").show().text("Wood -" + woodLevel);
        wood -= woodLevel;
        resourse = "wood";
        $("#wood").text("Wood:" + wood);
        blink(resourse);
        resourceTakenFunction()
    }, 500);
    setTimeout(function () {
        if (stone < stoneLevel) {
            $("#stoneGoal").text("Failed").css("color", "red");
            $("#stoneGoal").parent().css("color", "red")
        }
        else {
            $("#stoneGoal").text("Complete").css("color", "green");
            $("#stoneGoal").parent().css("color", "green")
        }
        $("#resourseMinusDiv").show().text("Stone -" + stoneLevel);
        stone -= stoneLevel;
        resourse = "stone";
        $("#stone").text("Stone:" + stone);
        blink(resourse);
        resourceTakenFunction()
    }, 1000);
    setTimeout(function () {
        if (metal < metalLevel) {
            $("#metalGoal").text("Failed").css("color", "red");
            $("#metalGoal").parent().css("color", "red")
        }
        else {
            $("#metalGoal").text("Complete").css("color", "green");
            $("#metalGoal").parent().css("color", "green")
        }
        $("#resourseMinusDiv").show().text("Metal -" + metalLevel);
        metal -= metalLevel;
        resourse = "metal";
        $("#metal").text("Metal:" + metal);
        blink(resourse);
        resourceTakenFunction()
    }, 1500);
    setTimeout(function () {
        if (food < foodLevel) {
            $("#foodGoal").text("Failed").css("color", "red");
            $("#foodGoal").parent().css("color", "red")
        }
        else {
            $("#foodGoal").text("Complete").css("color", "green");
            $("#foodGoal").parent().css("color", "green")
        }
        $("#resourseMinusDiv").show().text("Food -" + foodLevel);
        food -= foodLevel;
        resourse = "food";
        $("#food").text("Food:" + food);
        blink(resourse);
        resourceTakenFunction()
    }, 2000);
    setTimeout(function () {
        if (water < waterLevel) {
            $("#waterGoal").text("Failed").css("color", "red");
            $("#waterGoal").parent().css("color", "red")
        }
        else {
            $("#waterGoal").text("Complete").css("color", "green");
            $("#waterGoal").parent().css("color", "green")
        }
        $("#resourseMinusDiv").show().text("Water -" + waterLevel);
        water -= waterLevel;
        resourse = "water";
        $("#water").text("Water:" + water);
        blink(resourse);
        resourceTakenFunction();
    }, 2500);
    if (silverLevel > 0) {
        additionalMiliseconds += 500;
        setTimeout(function () {
            if (silver < silverLevel) {
                $("#silverGoal").text("Failed").css("color", "red");
                $("#silverGoal").parent().css("color", "red")
            }
            else {
                $("#silverGoal").text("Complete").css("color", "green");
                $("#silverGoal").parent().css("color", "green")
            }
            $("#resourseMinusDiv").show().text("Silver -" + silverLevel);
            silver -= silverLevel;
            resourse = "silver";
            $("#silver").text("Silver:" + silver);
            blink(resourse);
            resourceTakenFunction()
        }, 3000)
    }

    if (goldLevel > 0) {
        additionalMiliseconds += 500;
        setTimeout(function () {
            if (gold < goldLevel) {
                $("#goldGoal").text("Failed").css("color", "red");
                $("#goldGoal").parent().css("color", "red")
            }
            else {
                $("#goldGoal").text("Complete").css("color", "green");
                $("#goldGoal").parent().css("color", "green")
            }
            $("#resourseMinusDiv").show().text("Gold -" + goldLevel);
            gold -= goldLevel;
            resourse = "gold";
            $("#gold").text("Gold:" + gold);
            blink(resourse);
            resourceTakenFunction()
        }, 3500)
    }

    if (diamondsLevel > 0) {
        additionalMiliseconds += 500;
        setTimeout(function () {
            if (diamonds < diamondsLevel) {
                $("#diamondsGoal").text("Failed").css("color", "red");
                $("#diamondsGoal").parent().css("color", "red")
            }
            else {
                $("#diamondsGoal").text("Complete").css("color", "green");
                $("#diamondsGoal").parent().css("color", "green")
            }
            $("#resourseMinusDiv").show().text("Diamonds -" + diamondsLevel);
            diamonds -= diamondsLevel;
            resourse = "diamonds";
            $("#diamonds").text("Diamonds:" + diamonds);
            blink(resourse);
            resourceTakenFunction()
        }, 4000)
    }
    setTimeout(function () {
        $("#resourseMinusDiv").hide()
    }, 3000 + additionalMiliseconds);
    if (wood < woodLevel || stone < stoneLevel || metal < metalLevel || food < foodLevel || water < waterLevel || silver < silverLevel || gold < goldLevel || diamonds < diamondsLevel) {
        setTimeout(function () {
            viewDeath()
        }, 4500 + additionalMiliseconds)
    }
    else {
        setTimeout(function () {
            viewEndOfDay();
        }, 4500 + additionalMiliseconds)
    }
}


function blink(resourse) {
    $("#" + resourse).addClass("color").animate({
        fontSize: "70px",
    }, 150);
    $("#" + resourse).animate({
        fontSize: "25px"
    }, 1000);
    setTimeout(function () {
        $("#" + resourse).css("color", "black").css("text-shadow", "1px 1px gold")
    }, 1150);
}


function specialConsumed(command) {
    if (command === "+3") {
        let turn = 0;
        let turnInterval = 0;
        moves += 1;
        $("#levelInfo").text("Moves:" + moves);
        let inter = setInterval(increaseMovesByOne, 700);
        movesPlusOneFunction();
        function increaseMovesByOne() {
            if (turnInterval < 2) {
                movesPlusOneFunction();
                moves += 1;
                $("#levelInfo").text("Moves:" + moves);
                turnInterval++;
            }
            else {
                clearInterval(inter)
            }
        }

        while (turn < 3) {
            $(".levelInfoClass").animate({
                top: "+=10px"
            }, 25);
            $(".levelInfoClass").animate({
                top: "-=10px"
            }, 25);
            $(".levelInfoClass").animate({
                left: "+=10px"
            }, 25);
            $(".levelInfoClass").animate({
                left: "-=10px"
            }, 25);
            $(".levelInfoClass").animate({
                top: "-=10px"
            }, 25);
            $(".levelInfoClass").animate({
                top: "+=10px"
            }, 25);
            $(".levelInfoClass").animate({
                left: "-=10px"
            }, 25);
            $(".levelInfoClass").animate({
                left: "+=10px"
            }, 25);
            $(".levelInfoClass").animate({
                left: "+=0px"
            }, 400);
            turn++;
        }
    }
    else {
        let inter2 = setInterval(exxxx, 120);
        let counter = 0;

        function exxxx() {
            $(".blocks").css("opacity", "1");
            for (row = 0; row < 9; row++) {
                for (col = 0; col < 9; col++) {
                    matrix[row][col] = 0;
                    let random = innerRandomizer();
                    if (random === 0) {
                        $("#mainTable tr").eq(row).children().eq(col).removeClass("void").html('<img id="explode"  src="images/explosion.jpg" width="50" height="50"/>').addClass("blocks").animate({
                            opacity: "0.01"
                        }, 120)
                    }
                    else {
                        $("#mainTable tr").eq(row).children().eq(col).css("opacity", "0.01").removeClass("void").addClass("blocks")
                    }
                }
            }
            counter++;
            if (counter === 1 || counter === 8) {
                specialExplosionFunction()
            }
            if (counter === 11) {
                clearInterval(inter2);
            }
        }

        function innerRandomizer() {
            return Math.floor(Math.random() * 2)
        }

        setTimeout(function () {
            $("#mainTable").empty();
            matrix = [];
            fill()
        }, 1800)
    }
    specials--;
    $("#specialsDiv").text("Specials:" + specials);
    if (specials === 0) {
        $(".classSpecials").css({
            "pointer-events": "none",
            "opacity": "0.2",
            "box-shadow": "none"
        });
        $("#specialsDiv").css("text-shadow", "none")
    }
}
function heroHit() {
    setTimeout(function () {
        $("#hero").html(' <img src="images/spr2.png" height="200" width="100"   style="position:absolute;top: 280px;left: 50px; "/>')
    }, 50);
    setTimeout(function () {
        $("#hero").html(' <img src="images/spr3.png" height="200" width="100"  style="position:absolute;top: 280px;left: 50px"/>')
    }, 100);
    setTimeout(function () {
        $("#hero").html(' <img src="images/spr4.png" height="200" width="100"  style="position:absolute;top: 280px;left: 50px"/>')
    }, 200);
    setTimeout(function () {
        $("#hero").html(' <img src="images/spr5.png" height="200" width="100"  style="position:absolute;top: 280px;left: 50px"/>')
    }, 250);
    setTimeout(function () {
        $("#hero").html(' <img src="images/spr1.png" height="200 " width="100"  style="position:absolute;top: 280px;left: 50px"/>')
    }, 300)
}

function upgrade(command) {
    upgradeFunction();
    switch (command) {
        case "wood":
            switch (upgradeLvlWood) {
                case 0:
                    wood -= 10;
                    break;
                case 1:
                    wood -= 15;
                    break;
                case 2:
                    wood -= 20;
                    break;
            }
            $("#wood").text("Wood:" + wood);
            upgradeLvlWood++;
            chanceWood -= 1;
            break;
        case "stone":
            switch (upgradeLvlStone) {
                case 0:
                    stone -= 10;
                    break;
                case 1:
                    stone -= 15;
                    break;
                case 2:
                    stone -= 20;
                    break;
            }
            $("#stone").text("Stone:" + stone);
            upgradeLvlStone++;
            chanceWood -= 1;
            chanceStone -= 1;
            break;
        case "metal":
            switch (upgradeLvlMetal) {
                case 0:
                    metal -= 10;
                    break;
                case 1:
                    metal -= 15;
                    break;
                case 2:
                    metal -= 20;
                    break;
            }
            $("#metal").text("Metal:" + metal);
            upgradeLvlMetal++;
            chanceWood -= 1;
            chanceStone -= 1;
            chanceMetal -= 1;
            break;
        case "food":
            switch (upgradeLvlFood) {
                case 0:
                    food -= 7;
                    break;
                case 1:
                    food -= 10;
                    break;
                case 2:
                    food -= 13;
                    break;
            }
            $("#food").text("Food:" + food);
            upgradeLvlFood++;
            chanceWood -= 1;
            chanceStone -= 1;
            chanceMetal -= 1;
            chanceFood -= 1;
            break;
        case "water":
            switch (upgradeLvlWater) {
                case 0:
                    water -= 7;
                    break;
                case 1:
                    water -= 10;
                    break;
                case 2:
                    water -= 13;
                    break;
            }
            $("#water").text("Water:" + water);
            upgradeLvlWater++;
            chanceWood -= 1;
            chanceStone -= 1;
            chanceMetal -= 1;
            chanceFood -= 1;
            chanceWater -= 1;
            break;
        case "silver":
            switch (upgradeLvlSilver) {
                case 0:
                    silver -= 5;
                    break;
                case 1:
                    silver -= 6;
                    break;
                case 2:
                    silver -= 7;
                    break;
            }
            $("#silver").text("Silver:" + silver);
            upgradeLvlSilver++;
            chanceWood -= 1;
            chanceStone -= 1;
            chanceMetal -= 1;
            chanceFood -= 1;
            chanceWater -= 1;
            chanceSilver -= 1;
            break;
        case "gold":
            switch (upgradeLvlGold) {
                case 0:
                    gold -= 4;
                    break;
                case 1:
                    gold -= 5;
                    break;
                case 2:
                    gold -= 6;
                    break;
            }
            $("#gold").text("Gold:" + gold);
            upgradeLvlGold++;
            chanceWood -= 1;
            chanceStone -= 1;
            chanceMetal -= 1;
            chanceFood -= 1;
            chanceWater -= 1;
            chanceSilver -= 1;
            chanceGold -= 1;
            break;
        case "diamonds":
            switch (upgradeLvlDiamonds) {
                case 0:
                    diamonds -= 3;
                    break;
                case 1:
                    diamonds -= 4;
                    break;
                case 2:
                    diamonds -= 5;
                    break;
            }
            $("#diamonds").text("Diamonds:" + diamonds);
            upgradeLvlDiamonds++;
            chanceWood -= 1;
            chanceStone -= 1;
            chanceMetal -= 1;
            chanceFood -= 1;
            chanceWater -= 1;
            chanceSilver -= 1;
            chanceGold -= 1;
            chanceDiamond -= 1;
            break;
    }
    viewUpgrade();
}

function increaseLevelDemands() {
    if (day === 5) {
        woodIncrease += 1;
        stoneIncrease += 1;
        metalIncrease += 1;
    }
    else if (day === 10) {
        foodIncrease += 1;
        waterIncrease += 1;
    }
    else if (day === 15) {
        woodIncrease += 1;
        stoneIncrease += 1;
        metalIncrease += 1;
    }
    else if (day === 20) {
        foodIncrease += 1;
        waterIncrease += 1;
        silverIncrease += 1;
    }
    else if (day === 25) {
        woodIncrease += 1;
        stoneIncrease += 1;
        metalIncrease += 1;
    }
    else if (day === 30) {
        foodIncrease += 1;
        waterIncrease += 1;
        silverIncrease += 1;
        goldIncrease += 1;
    }
    else if (day === 35) {
        woodIncrease += 1;
        stoneIncrease += 1;
        metalIncrease += 1;
    }
    else if (day === 40) {
        foodIncrease += 1;
        waterIncrease += 1;
        silverIncrease += 1;
        goldIncrease += 1;
        diamondsIncrease += 1;
    }
    else if (day === 45) {
        woodIncrease += 1;
        stoneIncrease += 1;
        metalIncrease += 1;
    }
}

function itemPurchesed(type) {
    upgradeFunction();
    if (type === "Wood") {
        voidPoints -= 1;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(1, 1)
    }
    if (type === "Stone") {
        voidPoints -= 1;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(2, 1)
    }
    if (type === "Metal") {
        voidPoints -= 1;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(3, 1)
    }
    if (type === "Food") {
        voidPoints -= 2;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(4, 1)
    }
    if (type === "Water") {
        voidPoints -= 2;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(5, 1)
    }
    if (type === "Silver") {
        voidPoints -= 5;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(6, 1)
    }
    if (type === "Gold") {
        voidPoints -= 10;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(7, 1)
    }
    if (type === "Diamond") {
        voidPoints -= 15;
        $("#voidPointsDiv").text("Void Points:" + voidPoints);
        addingPoints(8, 1)
    }
    viewShop()
}

function tryAgain() {
    wood = 4;
    stone = 4;
    metal = 4;
    food = 2;
    water = 2;
    silver = 0;
    gold = 0;
    diamonds = 0;
    day = 1;
    specials = 0;
    chanceDiamond = 100;
    chanceGold = 98;
    chanceSilver = 93;
    chanceWater = 83;
    chanceFood = 73;
    chanceMetal = 58;
    chanceStone = 43;
    chanceWood = 28;
    upgradeLvlWood = 0;
    upgradeLvlStone = 0;
    upgradeLvlMetal = 0;
    upgradeLvlFood = 0;
    upgradeLvlWater = 0;
    upgradeLvlSilver = 0;
    upgradeLvlGold = 0;
    upgradeLvlDiamonds = 0;
    woodIncrease = 3;
    stoneIncrease = 3;
    metalIncrease = 3;
    foodIncrease = 1;
    waterIncrease = 1;
    silverIncrease = 0;
    goldIncrease = 0;
    diamondsIncrease = 0;
    voidPoints = 0;
    combo = 0;
    start();
}

function clickFunction() {
    if (muted === false) {
        $("#clickAnywhere").prop("volume", 0.2);
        $("#clickAnywhere")[0].play();
    }
}
function levelSound(command) {
    if (muted === false) {
        if (command === "start") {
            homeSoundFunction("stop");
            levelSoundTheme = new Audio('sound/levelTheme.mp3');
            levelSoundTheme.addEventListener('ended', function () {
                levelSoundTheme.volume = 0.5;
                levelSoundTheme.currentTime = 0;
                levelSoundTheme.load();
                levelSoundTheme.play();
            }, false);
            levelSoundTheme.volume = 0.5;
            levelSoundTheme.play();
        }
        else if (command === "stop") {

            levelSoundTheme.currentTime = 0;
            levelSoundTheme.pause();
        }
    }
}

function homeSoundFunction(command) {
    if (muted === false) {
        if (command === "start") {
            mainThemeSound.addEventListener('ended', function () {
                mainThemeSound.currentTime = 0;
                mainThemeSound.load();
                mainThemeSound.play();
            }, false);
            mainThemeSound.play();
        }
        else if (command === "stop") {
            mainThemeSound.pause();
            mainThemeSound.currentTime = 0;
        }
    }
}


function heroHitFunction() {
    if (muted === false) {
        $("#heroHit").attr("currentTime", 0);
        $("#heroHit").prop("volume", 0.3);
        $("#heroHit")[0].play();
    }
}

function resourceTakenFunction() {
    if (muted === false) {
        $("#resourceTaken").trigger("pause");
        $("#resourceTaken").prop("currentTime", 0);
        $("#resourceTaken")[0].play();
    }
}

function matchFunction() {
    if (muted === false) {
        $("#match").attr("currentTime", 0);
        $("#match").prop("volume", 0.6);
        $("#match")[0].load();
        $("#match")[0].play();
    }
}

function comboBarFunction() {
    if (muted === false) {
        $("#comboBar").attr("currentTime", 0);
        $("#comboBar").prop("volume", 0.3);
        $("#comboBar")[0].play();
    }
}

function comboBarFullFunction() {
    if (muted === false) {
        $("#comboBarFull").prop("volume", 0.2);
        $("#comboBarFull")[0].play();
    }
}

function specialExplosionFunction() {
    if (muted === false) {
        $("#explosionSound")[0].play();
    }
}

function upgradeFunction() {
    if (muted === false) {
        $("#upgradeResource")[0].load();
        $("#upgradeResource").prop("volume", 0.2);
        $("#upgradeResource").attr("currentTime", 0);
        $("#upgradeResource")[0].play();
    }
}

function movesPlusOneFunction() {
    if (muted === false) {
        $("#movesPlusOne")[0].load();
        $("#movesPlusOne").prop("volume", 1);
        $("#movesPlusOne").attr("currentTime", 0);
        $("#movesPlusOne")[0].play();
    }
}

function bombSound() {
    if (muted === false) {
        $("#bomb")[0].load();
        $("#bomb")[0].play();
    }
}

function chestSound() {
    if (muted === false) {
        $("#chestOpen")[0].load();
        $("#chestOpen")[0].play();
    }
}

function loseSound() {
    if (muted === false) {
        $("#lose")[0].load();
        $("#lose")[0].play();
    }
}

function celebrateFunction() {
    if (muted === false) {
        $("#celebrate")[0].load();
        $("#celebrate")[0].play();
    }
}

function soundFunction() {
    let aa = $("#level").is(":visible");
    if (muted === false) {
        muted = true;
        $("#soundContainer").html('<img src="images/sound-off.png" id="sound-off" style="height:22px ;width:22px ;position:absolute; left: 1090px;top: 51px; ;border-radius: 15px;z-index: 22"/>');
        mainThemeSound.pause();
        mainThemeSound.currentTime = 0;
        levelSoundTheme.pause();
        levelSoundTheme.currentTime = 0;
    }
    else {
        muted = false;
        $("#soundContainer").html('<img src="images/sound.png" id="toggle-sound" style="height:22px ;width:22px ;position:absolute; left: 1090px;top: 51px; ;border-radius: 15px;z-index: 22"/>');
        let lvl = $("#level").is(":visible");
        let homeSect = $("#homeSection").is(":visible");
        let shopSect = $("#shopSection").is(":visible");
        let upg = $("#upgradeSection").is(":visible");
        if (lvl === true) {
            levelSound("start")
        }
        if (homeSect === true || shopSect === true || upg === true) {
            homeSoundFunction("start")
        }
    }
}


